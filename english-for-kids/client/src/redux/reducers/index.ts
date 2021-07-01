import { combineReducers } from 'redux';
import categories from './setCategories';
import activeCategory from './activeCategory';
import trainMode from './setMode';
import pointsScale from './pointsScale';

const rootReducer = combineReducers({
  categories,
  activeCategory,
  trainMode,
  pointsScale,
});

export default rootReducer;
