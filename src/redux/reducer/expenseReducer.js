import {
  ADD_EXPENSE,
  SELECT_CATEGORY,
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
    default:
      return state;
  }
}
