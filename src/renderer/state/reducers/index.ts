import { combineReducers } from 'redux';
import bankReducer from './bankReducer';
import photosReducer from './photosReducer';
import activePhotoReducer from './activePhotoReducer';

const reducers = combineReducers({
  bank: bankReducer,
  photos: photosReducer,
  activePhoto: activePhotoReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
