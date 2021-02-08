import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {AvailableLanguages} from '../contexts/LanguageContext';
import translationEn from './en/translation.json';
import translationRu from './ru/translation.json';


const resources = {
  [AvailableLanguages.EN]: {
    translation: translationEn,
  },
  [AvailableLanguages.RU]: {
    translation: translationRu,
  },
};

i18n.use(initReactI18next).init({
  lng: AvailableLanguages.RU,
  resources,
});
