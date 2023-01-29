import { ActionType } from '../actionTypes';
import { PhotosAction } from '../actions';

const initialState: string[] = [];

const reducer = (state: string[] = initialState, action: PhotosAction) => {
  switch (action.type) {
    case ActionType.LOADPHOTOS:
      return [...state, ...action.payload];
    case ActionType.REMOVEPHOTO:
      return state.filter((photo) => photo !== action.payload);
    default:
      return state;
  }
};

export default reducer;
