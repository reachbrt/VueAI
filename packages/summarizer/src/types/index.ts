export type SummaryLength = 'short' | 'medium' | 'long';
export type SummaryStyle = 'bullets' | 'paragraph' | 'eli5';

export interface SummaryResult {
  summary: string;
  /** One sentence, in the style of Notion AI and Reader apps. */
  tldr: string;
  keyPoints: string[];
  /** Concrete next steps extracted from the source, when any exist. */
  actionItems: string[];
  length: SummaryLength;
  style: SummaryStyle;
}

export interface SummarizerOptions {
  length?: SummaryLength;
  style?: SummaryStyle;
}
