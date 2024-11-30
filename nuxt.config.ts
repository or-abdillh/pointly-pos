// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    ssr: false,

    runtimeConfig: {
        public: {
            appName: "",
            apiUrl: ""
        }
    },

    app: {
        head: {
            script: [
                { src: "https://kit.fontawesome.com/b026c11a83.js", crossorigin: "anonymous" }
            ]
        }
    },

    modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', "@pinia/nuxt", "pinia-plugin-persistedstate"],

    googleFonts: {
        families: {
            "Roboto": {
                wght: [300, 400, 500, 600],
                italic: [300, 400, 500, 600]
            },
            "Poppins": {
                wght: [400, 500, 600, 700, 800, 900],
                italic: [400, 500, 600, 700, 800, 900]
            }
        },
        useStylesheet: true,
        preconnect: true,
        preload: true,
        outputDir: "assets/",
        fontsDir: 'fonts/',
        stylePath: 'css/fonts.css'
    }
})