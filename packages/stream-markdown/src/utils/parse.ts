export type MarkdownBlock =
  | { type: 'heading'; level: number; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'code'; lang: string; text: string; pending: boolean };

const ESCAPE: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ESCAPE[char] || char);
}

export function renderInline(text: string): string {
  let html = escapeHtml(text);
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
  html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label: string, href: string) => {
    const safe = /^(https?:|mailto:|\/|#)/.test(href) ? href : '';
    if (!safe) return _match;
    return `<a href="${escapeHtml(safe)}" target="_blank" rel="noreferrer">${label}</a>`;
  });
  return html;
}

export function parseMarkdown(source: string): MarkdownBlock[] {
  const lines = (source || '').replace(/\r\n/g, '\n').split('\n');
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const body: string[] = [];
      index += 1;
      let closed = false;
      while (index < lines.length) {
        if (lines[index].startsWith('```')) {
          closed = true;
          index += 1;
          break;
        }
        body.push(lines[index]);
        index += 1;
      }
      blocks.push({ type: 'code', lang, text: body.join('\n'), pending: !closed });
      continue;
    }

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const heading = /^(#{1,3})\s+(.*)$/.exec(line);
    if (heading) {
      blocks.push({ type: 'heading', level: heading[1].length, text: heading[2] });
      index += 1;
      continue;
    }

    if (line.startsWith('> ')) {
      const quote: string[] = [];
      while (index < lines.length && lines[index].startsWith('> ')) {
        quote.push(lines[index].slice(2));
        index += 1;
      }
      blocks.push({ type: 'quote', text: quote.join(' ') });
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^[-*]\s+/, ''));
        index += 1;
      }
      blocks.push({ type: 'list', ordered: false, items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s+/, ''));
        index += 1;
      }
      blocks.push({ type: 'list', ordered: true, items });
      continue;
    }

    const paragraph: string[] = [];
    while (
      index < lines.length
      && lines[index].trim()
      && !lines[index].startsWith('```')
      && !/^(#{1,3})\s+/.test(lines[index])
      && !lines[index].startsWith('> ')
      && !/^[-*]\s+/.test(lines[index])
      && !/^\d+\.\s+/.test(lines[index])
    ) {
      paragraph.push(lines[index]);
      index += 1;
    }
    blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
  }

  return blocks;
}
