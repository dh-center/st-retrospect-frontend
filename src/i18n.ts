import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

Vue.use(VueI18n);

/**
 * Load messages from json files
 */
function loadLocaleMessages(): LocaleMessages {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages: LocaleMessages = {};

  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      const locale = matched[1];

      messages[locale] = locales(key);
    }
  });
  return messages;
}

/**
 * Detect interface language from navigator
 */
function detectLanguage(): string {
  const languages = navigator.languages;
  const englishPriority = languages.findIndex(lang => /en/i.test(lang));
  const russianPriority = languages.findIndex(lang => /ru/i.test(lang));

  if (russianPriority === -1) {
    return 'en';
  }
  if (englishPriority === -1) {
    return 'ru';
  }

  const distanceBetweenRussianAndEnglish = englishPriority - russianPriority;

  if (distanceBetweenRussianAndEnglish > 0) {
    return 'ru';
  } else {
    return 'en';
  }
}

export default new VueI18n({
  locale: detectLanguage(),
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
});
