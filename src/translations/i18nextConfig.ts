import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./json/en.json";
import { LangCode } from "./languageUtils";

const resources = {
  en: {
    translation: en,
  },
};

const initalizeI18Next = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  i18n.use(initReactI18next).init({
    debug: false,
    resources,
    lng: LangCode.en,
    fallbackLng: LangCode.en,
    interpolation: {
      escapeValue: false,
    },
  });
};

export default { initalizeI18Next };
