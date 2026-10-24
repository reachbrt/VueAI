import AiStreamMarkdownComponent from './components/AiStreamMarkdown.vue';
import type { DefineComponent } from 'vue';
import './styles/markdown.css';

export { escapeHtml, parseMarkdown, renderInline } from './utils/parse';
export type { MarkdownBlock } from './utils/parse';

export const AiStreamMarkdown = AiStreamMarkdownComponent as unknown as DefineComponent;

export default { AiStreamMarkdown };
