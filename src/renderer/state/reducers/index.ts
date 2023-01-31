import { combineReducers } from 'redux';
import bankReducer from './bankReducer';
import photosReducer from './photosReducer';
import activePhotoReducer from './activePhotoReducer';
import settingsModalReducer from './settingsModalReducer';

const reducers = combineReducers({
  bank: bankReducer,
  photos: photosReducer,
  activePhoto: activePhotoReducer,
  settings: settingsModalReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
