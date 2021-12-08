import { CHANGE_LANGUAGE} from '../constants/actionTypes';
import { LANGUAGE } from "../constants/enums";
import { loadStorageItem, saveItemInStorage } from '../utils/localStorage'

const initialState = {
  language: loadStorageItem('language') || LANGUAGE.EN,
};

const settingsReducer = (state= initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      saveItemInStorage('language', action.data);
      return {
        ...state,
        language: action.data,
      }
    default: return { ...state }
  }
};

export default settingsReducer;