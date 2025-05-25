// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import enCommon from './translations/en/common.json';
import esCommon from './translations/es/common.json';

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Initialize i18next
  .init({
    debug: true, // Set to false in production
    fallbackLng: 'en', // Use English if detected language is not available
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      en: {
        common: enCommon, // 'common' is the default namespace
      },
      es: {
        common: esCommon,
      },
    },
    // You can define multiple namespaces if your translations are large
    // ns: ['common', 'moduleA', 'moduleB'],
    // defaultNS: 'common',
  });

export default i18n;
