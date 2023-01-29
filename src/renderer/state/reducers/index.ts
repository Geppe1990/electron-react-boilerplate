import { combineReducers } from 'redux';
import bankReducer from './bankReducer';
import photosReducer from './photosReducer';

const reducers = combineReducers({
  bank: bankReducer,
  photos: photosReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
