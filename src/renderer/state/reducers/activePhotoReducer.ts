import { ActionType } from '../actionTypes';
import { ActivePhotoAction } from '../actions';

const initialState = 'Pippofranco';

const reducer = (
  state: string | undefined = initialState,
  action: ActivePhotoAction
) => {
  switch (action.type) {
    case ActionType.ACTIVEPHOTO:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
