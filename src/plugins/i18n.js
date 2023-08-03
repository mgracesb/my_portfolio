import { createI18n } from "vue-i18n";
import esTexts from "../locales/es.js";
import enTexts from "../locales/en.js";

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    es: esTexts,
    en: enTexts
  },
});

export default i18n;
