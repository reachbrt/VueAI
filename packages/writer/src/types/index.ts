export type WriterAction =
  | 'rewrite'
  | 'shorten'
  | 'expand'
  | 'fix-grammar'
  | 'change-tone'
  | 'continue';

export type WriterTone = 'professional' | 'friendly' | 'confident' | 'concise' | 'casual';

export interface WriterResult {
  text: string;
  action: WriterAction;
  tone?: WriterTone;
}

export interface WriterOptions {
  action?: WriterAction;
  tone?: WriterTone;
}
