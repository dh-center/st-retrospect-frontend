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
 * @return {String}
 */
function detectLanguage(): string | undefined {
  const languages = navigator.languages;
  const language = languages.find(sl =>
    ['en', 'ru'].find(l => (sl.split(new RegExp(l, 'gi')).length - 1 > 0 ? l : null)));

  return language;
}

export default new VueI18n({
  locale: detectLanguage() || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
});
