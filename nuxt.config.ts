import vueI18n from './utils/i18/index';

export default defineNuxtConfig({
    typescript: {
        strict: true,
    },
    css: ["@/assets/styles/base.scss"],
    // mode: "static",
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-purgecss",
        "@nuxtjs/device",
        [
            "@nuxtjs/i18n",
            {
                vueI18n
            },
        ],
    ],
});
