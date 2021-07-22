import { ICategory } from '../../shared/models/category-model';

const setCategories = (categories: ICategory[]) => ({
  type: 'SET_CATEGORIES',
  payload: categories,
});

export default setCategories;
