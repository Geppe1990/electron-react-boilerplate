import { ActionType } from '../actionTypes';
import { ActiveFolderAction } from '../actions';

const initialState = '/Users/geppe/Desktop/Foto/2020';

const reducer = (state: string = initialState, action: ActiveFolderAction) => {
  switch (action.type) {
    case ActionType.EDITACTIVEFOLDER:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
