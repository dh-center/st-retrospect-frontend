import {AvailableLanguages} from '../contexts/LanguageContext';

/**
 * Controller for user language in local storage
 */
class LanguageController {
  /**
   * User language field
   */
  public userLanguage: AvailableLanguages = AvailableLanguages.RU;

  /**
   * Key for user language in local storage
   */
  private static LS_USER_LANGUAGE_KEY = 'user-language';

  /**
   * Create instance of language controller
   */
  constructor() {
    const lsUserLanguage = window.localStorage.getItem(LanguageController.LS_USER_LANGUAGE_KEY);

    if (lsUserLanguage) {
      this.userLanguage = lsUserLanguage as AvailableLanguages;
    }
  }

  /**
   * Change user language in local storage
   *
   * @param language - new user language
   */
  public changeUserLanguage(language: AvailableLanguages): void {
    this.userLanguage = language;
    window.localStorage.setItem(LanguageController.LS_USER_LANGUAGE_KEY, language);
  }
}

export default new LanguageController();
