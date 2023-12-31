import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from '../languages/en.json'
import pt_brTranslations from '../languages/pt_br.json'
import esTranslations from '../languages/es.json'
import itTranslations from '../languages/it.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            ...enTranslations
        },
        pt_br: {
            ...pt_brTranslations
        },
        es: {
            ...esTranslations
        },
        it: {
            ...itTranslations
        }
    },
    lng: 'en',
})