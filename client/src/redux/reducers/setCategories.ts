import { ICategory } from '../../shared/models/category-model';

const initialState = {
  items: [],
};

const categoriesItems = (categories = initialState, action: { type: string; payload: ICategory[]; }) => {
  if (action.type === 'SET_CATEGORIES') {
    return {
      items: action.payload,
    };
  }
  return categories;
};

export default categoriesItems;
