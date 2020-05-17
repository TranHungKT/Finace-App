import {SAVE_CATEGORY} from '../type';

export const saveCategory = (idMain, idChild, amount) => (dispatch) => {
  const data = {idMain, idChild, amount};
  dispatch({
    type: SAVE_CATEGORY,
    payload: data,
  });
};
