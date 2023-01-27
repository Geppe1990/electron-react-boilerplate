import * as actionTypes from '../actionTypes';

const initialPhotosState: PhotosState = {
  photos: ['Foto 1', 'Foto 2'],
};

const photosReducer = (
  state: PhotosState = initialPhotosState,
  action: PhotosAction
): PhotosState => {
  switch (action.type) {
    case actionTypes.ADD_PHOTOS: {
      const newPhotos: string[] = action.photos;
      return {
        ...state,
        photos: newPhotos,
      };
    }
    default:
  }
  return state;
};

export default photosReducer;
