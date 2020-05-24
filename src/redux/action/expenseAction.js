import {SAVE_CATEGORY, SAVE_CATEGORY_INCOME} from '../type';

export const saveCategory = (idMain, idChild, amount) => (dispatch) => {
  const data = {idMain, idChild, amount};
  dispatch({
    type: SAVE_CATEGORY,
    payload: data,
  });
};

export const saveCategoryIncome = (idMain, amount) => (dispatch) => {
  const data = {idMain, amount};
  dispatch({
    type: SAVE_CATEGORY_INCOME,
    payload: data,
  });
};
