import { combineReducers } from 'redux';
import categories from './setCategories';
import activeCategory from './activeCategory';
import trainMode from './setMode';
import pointsScale from './pointsScale';
import words from './setWords';

const rootReducer = combineReducers({
  categories,
  activeCategory,
  trainMode,
  pointsScale,
  words,
});

export default rootReducer;
