import { combineReducers } from 'redux';
import bankReducer from './bankReducer';
import photosReducer from './photosReducer';
import activePhotoReducer from './activePhotoReducer';
import settingsReducer from './settingsReducer';

const reducers = combineReducers({
  bank: bankReducer,
  photos: photosReducer,
  activePhoto: activePhotoReducer,
  settings: settingsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
