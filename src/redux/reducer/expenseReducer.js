import {
  ADD_EXPENSE,
  SAVE_CATEGORY,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
} from '../type';
import {categories} from '../component/Categories';

const initialState = {
  loading: false,
  categories: [...categories],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_CATEGORY:
      let idMain = action.payload.idMain;
      let idChild = action.payload.idChild;
      let amount = action.payload.amount;
      let tempCategories = [...categories];
      tempCategories[idMain].state = true;
      tempCategories[idMain].children[idChild].state = true;
      tempCategories[idMain].amount += amount;
      tempCategories[idMain].children[idChild].amount = amount;
      return {
        ...state,
        categories: tempCategories,
      };
    default:
      return state;
  }
}
