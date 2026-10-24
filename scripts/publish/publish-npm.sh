#!/usr/bin/env bash
# Publish every @aivue package to the public npm registry.
# Requires `npm login` as a member of the @aivue organization,
# or NODE_AUTH_TOKEN in CI (GitHub Actions secret NPM_TOKEN).

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

if ! npm whoami >/dev/null 2>&1; then
  echo "npm is not logged in."
  echo "Run: npm login"
  echo "The account must belong to https://www.npmjs.com/~aivue"
  exit 1
fi

echo "Publishing as $(npm whoami) to https://registry.npmjs.org"

# core and chatbot first; everything else can follow.
PACKAGES=(
  core
  chatbot
  chatbot-storage
  autosuggest
  smartform
  analytics
  image-caption
  emotion-ui
  doc-intelligence
  predictive-input
  smart-notify
  voice-actions
  smart-datatable
  360-spin
  browser-llm
  ai-360-generator
  guided-form
  hierarchical-memory
  mcp
  tabular-intelligence
  summarizer
  translate
  moderation
  writer
)

PROVENANCE=()
if [[ "${GITHUB_ACTIONS:-}" == "true" ]]; then
  PROVENANCE=(--provenance)
fi

for dir in "${PACKAGES[@]}"; do
  pkg_json="$ROOT/packages/$dir/package.json"
  if [[ ! -f "$pkg_json" ]]; then
    echo "Missing $pkg_json"
    exit 1
  fi
  name="$(node -p "require('$pkg_json').name")"
  version="$(node -p "require('$pkg_json').version")"
  echo ""
  echo "Publishing $name@$version"
  (
    cd "$ROOT/packages/$dir"
    npm publish --access public "${PROVENANCE[@]}"
  )
done

echo ""
echo "Published ${#PACKAGES[@]} packages."
echo "Demo: https://aivue.netlify.app"
echo "GitHub: https://github.com/reachbrt/VueAI"
