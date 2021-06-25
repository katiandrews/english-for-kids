import { combineReducers } from 'redux';
import categories from './setCategories';
import activeCategory from './activeCategory';
import trainMode from './setMode';

const rootReducer = combineReducers({
  categories,
  activeCategory,
  trainMode
})

export default rootReducer;