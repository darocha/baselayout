export const locale = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

// Split locales with a region code
export const language = locale.toLowerCase().split(/[_-]+/)[0];

// Try full locale, fallback to locale without region code, fallback to en
// export const messages = localeData[language] || localeData[locale] || localeData.en;

console.log(language, locale);