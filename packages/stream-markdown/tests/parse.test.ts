import { describe, expect, it } from 'vitest';
import { parseMarkdown, renderInline } from '../src/utils/parse';

describe('parseMarkdown', () => {
  it('renders closed emphasis and escapes html', () => {
    expect(renderInline('**bold** and <script>')).toBe('<strong>bold</strong> and &lt;script&gt;');
    expect(renderInline('**still open')).toBe('**still open');
  });

  it('holds an unfinished fence as a pending code block', () => {
    const blocks = parseMarkdown('```ts\nconst n = 1');
    expect(blocks).toEqual([
      { type: 'code', lang: 'ts', text: 'const n = 1', pending: true }
    ]);
  });

  it('parses a finished document', () => {
    const blocks = parseMarkdown('## Note\n\nInvoice **1042**\n\n- Northwind\n- Aster\n\n```\ndone\n```');
    expect(blocks.map((block) => block.type)).toEqual(['heading', 'paragraph', 'list', 'code']);
    const code = blocks[3];
    expect(code).toMatchObject({ pending: false, text: 'done' });
  });

  it('allows only safe links', () => {
    expect(renderInline('[docs](https://aivue.netlify.app)')).toContain('href="https://aivue.netlify.app"');
    expect(renderInline('[bad](javascript:alert(1))')).toBe('[bad](javascript:alert(1))');
  });
});
