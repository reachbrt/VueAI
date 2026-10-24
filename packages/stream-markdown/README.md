<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/studio-bar.svg" alt="VueAI" width="100%"></a>

<p align="center">
  <a href="https://aivue.netlify.app/#architecture"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/architecture.svg" alt="VueAI architecture. One repository, the agent runtime, and every feature." width="100%"></a>
</p>

</p>

# @aivue/stream-markdown

Render Markdown while the model is still typing. Unfinished fences stay in a code block. Unfinished emphasis stays as text. HTML in the model output is escaped.

[Live studio](https://aivue.netlify.app) · [GitHub](https://github.com/reachbrt/VueAI)

## Install

```bash
npm install @aivue/stream-markdown
```

```vue
<script setup>
import { ref } from 'vue';
import { AiStreamMarkdown } from '@aivue/stream-markdown';
import '@aivue/stream-markdown/style.css';

const source = ref('');
</script>

<template>
  <AiStreamMarkdown :source="source" />
</template>
```

Append tokens to `source` as they arrive. The component parses on each change.

## Features

- Renders Markdown while tokens are still arriving
- Unfinished code fences stay inside a code block
- Unfinished emphasis stays as text instead of flickering
- HTML from the model is escaped
- Links are limited to `http`, `https`, `mailto`, and same-page paths

## What it understands

Headings, paragraphs, lists, quotes, fenced code, `code`, **bold**, *italic*, and links. Links are limited to `http`, `https`, `mailto`, and same-page paths.

`parseMarkdown` and `renderInline` are exported if you want the blocks without the component.

## Theme

Set `--aivue-ink`, `--aivue-muted`, `--aivue-line`, and `--aivue-code` on a parent.

## License

MIT
