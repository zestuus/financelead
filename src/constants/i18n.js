import { LANGUAGE } from './enums';

const translation = {
  'Welcome': {
    [LANGUAGE.UK]: 'Вітаємо',
  },
  "It's": {
    [LANGUAGE.UK]: 'Це',
  },
  'personal finance planner.': {
    [LANGUAGE.UK]: 'персональний планувальник фінансів.',
  },
  'Here will be some description.': {
    [LANGUAGE.UK]: 'Тут буде опис продукту',
  },
  'Settings': {
    [LANGUAGE.UK]: 'Налаштування',
  },
  'Sign Up': {
    [LANGUAGE.UK]: 'Зареєструватсь',
  },
  'Sign In': {
    [LANGUAGE.UK]: 'Увійти',
  },
  'Profile': {
    [LANGUAGE.UK]: 'Профіль',
  },
  'Logout': {
    [LANGUAGE.UK]: 'Вийти',
  },
  'Language': {
    [LANGUAGE.UK]: 'Мова',
  },
  'hours': {
    [LANGUAGE.UK]: 'годин',
  },
  'Cannot get your profile info': {
    [LANGUAGE.UK]: 'Не вдається отримати дані вашого профілю',
  },
  'Username': {
    [LANGUAGE.UK]: "Ім'я користувача",
  },
  'Full name': {
    [LANGUAGE.UK]: "Повне ім'я",
  },
  'Password': {
    [LANGUAGE.UK]: "Пароль",
  },
  'Repeat password': {
    [LANGUAGE.UK]: "Повторіть пароль",
  },
  'Submit': {
    [LANGUAGE.UK]: "Підтвердити",
  },
  'Create new': {
    [LANGUAGE.UK]: "Створити нову",
  },
  'Remove': {
    [LANGUAGE.UK]: "Видалити",
  },
  'Title': {
    [LANGUAGE.UK]: "Заголовок",
  },
  'Description': {
    [LANGUAGE.UK]: "Опис",
  },
  'Users': {
    [LANGUAGE.UK]: "Користувачі",
  },
  'End time should be after start time': {
    [LANGUAGE.UK]: "Час завершення повинен бути після часу початку",
  },
  'Duration': {
    [LANGUAGE.UK]: "Тривалість",
  },
  'Save': {
    [LANGUAGE.UK]: "Зберегти",
  },
};

const i18n = Object
  .keys(LANGUAGE)
  .reduce((accum, key) => ({
    ...accum,
    [key]: (value) => key === LANGUAGE.EN ? value : (translation[value] ? translation[value][key] : value),
  }), {})

export default i18n;