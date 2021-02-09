import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AvailableLanguages } from '../contexts/LanguageContext';
import translationEn from './en/translation.json';
import translationRu from './ru/translation.json';
import LanguageController from '../localStorage/LanguageController';

const resources = {
  [AvailableLanguages.EN]: {
    translation: translationEn,
  },
  [AvailableLanguages.RU]: {
    translation: translationRu,
  },
};

i18n.use(initReactI18next).init({
  lng: LanguageController.userLanguage,
  resources,
});
