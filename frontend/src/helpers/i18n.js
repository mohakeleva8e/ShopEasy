import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslation from "../common/locales/english.json";
import frenchTranslation from "../common/locales/french.json";
import germanTranslation from "../common/locales/german.json";
import hindiTranslation from "../common/locales/hindi.json";
import japaneseTranslation from "../common/locales/japanese.json";

i18n.use(initReactI18next).init({
  resources: {
    english: { translation: englishTranslation },
    french: { translation: frenchTranslation },
    german: { translation: germanTranslation },
    hindi: { translation: hindiTranslation },
    japanese: { translation: japaneseTranslation },
  },
  lng: "english", // Default language
  fallbackLng: "english",
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
