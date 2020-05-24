import {
  ADD_EXPENSE,
  SAVE_CATEGORY,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  SAVE_CATEGORY_INCOME,
} from '../type';
import {categories, categoryIncome} from '../component/Categories';

const initialState = {
  loading: false,
  categories: [...categories],
  categoryIncome: [...categoryIncome],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_CATEGORY:
      let idMain = action.payload.idMain;
      let idChild = action.payload.idChild;
      let amount = action.payload.amount;
      amount = parseFloat(amount);
      let tempCategories = [...categories];
      tempCategories[idMain].state = true;
      tempCategories[idMain].children[idChild].state = true;
      tempCategories[idMain].amount = +tempCategories[idMain].amount + +amount;
      tempCategories[idMain].children[idChild].amount =
        +tempCategories[idMain].children[idChild].amount + +amount;
      tempCategories[idMain].expense += 1;
      return {
        ...state,
        categories: tempCategories,
      };
    case SAVE_CATEGORY_INCOME:
      let idIncome = action.payload.idMain;
      let amountIncome = action.payload.amount;
      amountIncome = parseFloat(amountIncome);
      let tempCategoryIncome = [...categoryIncome];
      tempCategoryIncome[idIncome].state = true;
      tempCategoryIncome[idIncome].amount =
        +tempCategoryIncome[idIncome].amount + +amountIncome;
      return {
        ...state,
        categoryIncome: tempCategoryIncome,
      };
    default:
      return state;
  }
}
