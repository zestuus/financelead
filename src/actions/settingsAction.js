import { CHANGE_LANGUAGE } from '../constants/actionTypes';

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  data: language,
});