export type LangCode = string;

export type Formality = 'auto' | 'formal' | 'informal';

export interface TranslateResult {
  translatedText: string;
  detectedSource?: string;
  confidence?: number;
  sourceLang: string;
  targetLang: string;
  formality: Formality;
}

export interface TranslateOptions {
  sourceLang?: LangCode;
  targetLang?: LangCode;
  /** DeepL-style tone. `auto` keeps the source register. */
  formality?: Formality;
}
