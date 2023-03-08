const CONST_LOCALE = {
  en: "en",
  vi: "vi",
};

import en from "./messages/en";
import vi from "./messages/vi";

const vueI18n = {
  legacy: false,
  locale: CONST_LOCALE.en,
  messages: {
    en,
    vi,
  },
};

export default vueI18n;
