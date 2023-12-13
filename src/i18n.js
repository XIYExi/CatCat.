import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
        translation: require('./locale/en.json')
    },
    zh: {
        translation: require('./locale/zh.json')
    }
};


i18n
    .use(initReactI18next)
    .init(({
        resources,
        lng: 'zh',
        keySeparator: false,
        interpolation: {
            escapeValue: false, //防止xss脚本
        }
    }));

export default i18n;
