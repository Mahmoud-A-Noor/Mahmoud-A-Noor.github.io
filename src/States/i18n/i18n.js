import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { NumberFormatter, CurrencyFormatter, DateFormatter } from "./formatters";


export const SupportedLanguages = {
  en: "English",
  ar: "Arabic (العربية)",
};

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    supportedLngs: Object.keys(SupportedLanguages),
    debug: true,
    interpolation: { 
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

i18n.services.formatter?.add("NumberFormatter", NumberFormatter);
i18n.services.formatter?.add("CurrencyFormatter", CurrencyFormatter);
i18n.services.formatter?.add("DateFormatter", DateFormatter);

export default i18n