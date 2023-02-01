import { combineReducers } from 'redux';
import bankReducer from './bankReducer';
import photosReducer from './photosReducer';
import activePhotoReducer from './activePhotoReducer';
import settingsModalReducer from './settingsModalReducer';
import foldersReducer from './foldersReducer';
import activeFolderReducer from './activeFolderReducer';

const reducers = combineReducers({
  bank: bankReducer,
  photos: photosReducer,
  activePhoto: activePhotoReducer,
  modalSettings: settingsModalReducer,
  folders: foldersReducer,
  activeFolder: activeFolderReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
