#!/bin/bash

# Publish all @aivue packages to npm
# Usage: ./scripts/publish-all.sh <OTP_CODE>

set -e

if [ -z "$1" ]; then
  echo "❌ Error: OTP code required"
  echo "Usage: ./scripts/publish-all.sh <OTP_CODE>"
  echo ""
  echo "Get your OTP code from your authenticator app and run:"
  echo "  ./scripts/publish-all.sh 123456"
  exit 1
fi

OTP_CODE=$1

echo "🚀 Publishing all @aivue packages to npm..."
echo "📱 Using OTP: $OTP_CODE"
echo ""

# List of packages to publish
PACKAGES=(
  "core"
  "chatbot"
  "chatbot-storage"
  "smartform"
  "smart-notify"
  "smart-datatable"
  "analytics"
  "autosuggest"
  "predictive-input"
  "image-caption"
  "360-spin"
  "ai-360-generator"
  "voice-actions"
  "emotion-ui"
  "doc-intelligence"
)

SUCCESS_COUNT=0
FAILED_COUNT=0
FAILED_PACKAGES=()

for pkg in "${PACKAGES[@]}"; do
  echo "========================================="
  echo "📦 Publishing @aivue/$pkg"
  echo "========================================="
  
  if [ ! -d "packages/$pkg" ]; then
    echo "⚠️  Package directory not found, skipping..."
    echo ""
    continue
  fi
  
  cd "packages/$pkg"
  
  if npm publish --access public --otp="$OTP_CODE" 2>&1; then
    echo "✅ Successfully published @aivue/$pkg"
    ((SUCCESS_COUNT++))
  else
    echo "❌ Failed to publish @aivue/$pkg"
    ((FAILED_COUNT++))
    FAILED_PACKAGES+=("$pkg")
  fi
  
  cd ../..
  echo ""
  
  # Small delay to avoid rate limiting
  sleep 1
done

echo "========================================="
echo "📊 PUBLISHING SUMMARY"
echo "========================================="
echo "✅ Successfully published: $SUCCESS_COUNT packages"
echo "❌ Failed: $FAILED_COUNT packages"

if [ $FAILED_COUNT -gt 0 ]; then
  echo ""
  echo "Failed packages:"
  for pkg in "${FAILED_PACKAGES[@]}"; do
    echo "  - @aivue/$pkg"
  done
  exit 1
fi

echo ""
echo "🎉 All packages published successfully!"

