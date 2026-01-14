export interface Prediction {
  text: string;
  confidence: number;
  type?: 'completion' | 'suggestion' | 'correction' | 'pattern' | 'word' | 'phrase' | 'sentence';
  context?: string;
}

export type Language = 'auto' | 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt';

export interface UserPattern {
  pattern: string;
  frequency: number;
  lastUsed: Date;
  context?: string;
  language?: Language;
}

export interface TrainingProgress {
  current: number;
  total: number;
  stage: string;
  percentage: number;
}

export interface PredictionContext {
  previousText?: string;
  cursorPosition?: number;
  language?: Language;
  userPatterns?: UserPattern[];
}

export interface PredictionOptions {
  maxPredictions?: number;
  minConfidence?: number;
  includePatterns?: boolean;
  language?: Language;
}

