import { Lang_Symbols } from '@/app/languages.d';
import { SectionType } from '@/app/types';
import { SPEAKER_STATE } from '@/components/textarea-footer';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Textarea
export const getPlaceHolder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type === 'from') return 'Introducir texto';
  if (type === 'to' && loading === true) return 'Traduciendo...';
  if (type === 'to') return 'Traducción';
};

export const getValue = (type: SectionType, value?: string, text?: string) => {
  if (type === 'to') return value;

  return text;
};

// Speech Synthesis
type VoiceConfig = {
  locales: string[];
  rate: number;
  pitch: number;
};

const NATIVE_VOICE_HINTS = [
  'enhanced',
  'premium',
  'natural',
  'google',
  'microsoft',
  'apple',
  'siri',
  'neural',
  'online',
];

const VOICE_CONFIG: Partial<Record<Lang_Symbols, VoiceConfig>> = {
  ar: { locales: ['ar-SA', 'ar'], rate: 0.88, pitch: 1 },
  ca: { locales: ['ca-ES', 'ca'], rate: 0.94, pitch: 1 },
  cs: { locales: ['cs-CZ', 'cs'], rate: 0.92, pitch: 1 },
  cy: { locales: ['cy-GB', 'cy'], rate: 0.9, pitch: 1 },
  da: { locales: ['da-DK', 'da'], rate: 0.94, pitch: 1 },
  de: { locales: ['de-DE', 'de-AT', 'de-CH', 'de'], rate: 0.94, pitch: 1 },
  el: { locales: ['el-GR', 'el'], rate: 0.9, pitch: 1 },
  en: { locales: ['en-US', 'en-GB', 'en-AU', 'en-CA', 'en'], rate: 0.96, pitch: 1 },
  es: { locales: ['es-ES', 'es-MX', 'es-US', 'es-419', 'es'], rate: 0.95, pitch: 1 },
  fa: { locales: ['fa-IR', 'fa'], rate: 0.88, pitch: 1 },
  fi: { locales: ['fi-FI', 'fi'], rate: 0.92, pitch: 1 },
  fr: { locales: ['fr-FR', 'fr-CA', 'fr-BE', 'fr-CH', 'fr'], rate: 0.94, pitch: 1 },
  he: { locales: ['he-IL', 'iw-IL', 'he', 'iw'], rate: 0.9, pitch: 1 },
  hi: { locales: ['hi-IN', 'hi'], rate: 0.9, pitch: 1 },
  id: { locales: ['id-ID', 'id'], rate: 0.94, pitch: 1 },
  it: { locales: ['it-IT', 'it'], rate: 0.94, pitch: 1 },
  ja: { locales: ['ja-JP', 'ja'], rate: 0.88, pitch: 1 },
  ko: { locales: ['ko-KR', 'ko'], rate: 0.9, pitch: 1 },
  no: { locales: ['nb-NO', 'nn-NO', 'no-NO', 'no'], rate: 0.94, pitch: 1 },
  ru: { locales: ['ru-RU', 'ru'], rate: 0.9, pitch: 1 },
  tr: { locales: ['tr-TR', 'tr'], rate: 0.94, pitch: 1 },
  zh: { locales: ['zh-CN', 'zh-Hans-CN', 'zh'], rate: 0.88, pitch: 1 },
  'zh-CN': { locales: ['zh-CN', 'zh-Hans-CN', 'zh'], rate: 0.88, pitch: 1 },
  'zh-TW': { locales: ['zh-TW', 'zh-Hant-TW', 'zh-HK', 'zh'], rate: 0.88, pitch: 1 },
};

const getVoiceConfig = (lang: Lang_Symbols): VoiceConfig => {
  const fallbackLocale = lang.includes('-') ? lang : `${lang}-${lang.toUpperCase()}`;

  return (
    VOICE_CONFIG[lang] ?? {
      locales: [fallbackLocale, lang],
      rate: 0.92,
      pitch: 1,
    }
  );
};

const normalizeLocale = (locale: string) => locale.toLowerCase();

const loadVoices = () =>
  new Promise<SpeechSynthesisVoice[]>((resolve) => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    if (voices.length > 0) {
      resolve(voices);
      return;
    }

    const timer = window.setTimeout(() => {
      synth.removeEventListener('voiceschanged', handleVoicesChanged);
      resolve(synth.getVoices());
    }, 500);

    const handleVoicesChanged = () => {
      window.clearTimeout(timer);
      synth.removeEventListener('voiceschanged', handleVoicesChanged);
      resolve(synth.getVoices());
    };

    synth.addEventListener('voiceschanged', handleVoicesChanged);
  });

const getVoiceScore = (
  voice: SpeechSynthesisVoice,
  preferredLocales: string[]
) => {
  const voiceLang = normalizeLocale(voice.lang);
  const voiceName = normalizeLocale(voice.name);
  const exactLocaleIndex = preferredLocales.findIndex(
    (locale) => voiceLang === normalizeLocale(locale)
  );
  const baseLocaleIndex = preferredLocales.findIndex((locale) =>
    voiceLang.startsWith(`${normalizeLocale(locale).split('-')[0]}-`)
  );
  const nativeHintScore = NATIVE_VOICE_HINTS.some((hint) =>
    voiceName.includes(hint)
  )
    ? 25
    : 0;
  const serviceScore = voice.localService ? 8 : 0;

  if (exactLocaleIndex !== -1) {
    return 100 - exactLocaleIndex * 5 + nativeHintScore + serviceScore;
  }

  if (baseLocaleIndex !== -1) {
    return 65 - baseLocaleIndex * 3 + nativeHintScore + serviceScore;
  }

  return 0;
};

const getBestVoice = (
  voices: SpeechSynthesisVoice[],
  preferredLocales: string[]
) =>
  voices
    .map((voice) => ({
      voice,
      score: getVoiceScore(voice, preferredLocales),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)[0]?.voice;

export const handleHearSound = async (
  text: string,
  lang: Lang_Symbols,
  callback: (type: string) => void
) => {
  if (typeof window === 'undefined' || !text) return;
  const synth = window.speechSynthesis;

  if (synth.speaking) {
    synth.cancel();
    callback(SPEAKER_STATE.OFF);
    return;
  }

  callback(SPEAKER_STATE.loading);
  const voiceConfig = getVoiceConfig(lang);
  const voices = await loadVoices();
  const voice = getBestVoice(voices, voiceConfig.locales);
  const utterance = new SpeechSynthesisUtterance(text);

  // On start
  utterance.onstart = () => {
    callback(SPEAKER_STATE.ON);
  };

  // On end
  utterance.onend = () => {
    callback(SPEAKER_STATE.OFF);
  };

  // On error
  utterance.onerror = () => {
    callback(SPEAKER_STATE.OFF);
  };

  utterance.lang = voice?.lang ?? voiceConfig.locales[0];
  utterance.voice = voice ?? null;
  utterance.rate = voiceConfig.rate;
  utterance.pitch = voiceConfig.pitch;
  utterance.volume = 1;

  synth.speak(utterance);
};

export const handleCopy = (
  text: string,
  callback: (boolean: boolean) => void
) => {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    callback(true);

    const timer = setTimeout(() => {
      callback(false);
    }, 1000);

    return () => clearTimeout(timer);
  });
};
