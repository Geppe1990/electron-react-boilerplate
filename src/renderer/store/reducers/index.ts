import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import photosReducer from './photosReducer';

const allReducers = combineReducers({
  photosReducer,
  articleReducer,
});
export default allReducers;
