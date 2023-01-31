import { ActionType } from '../actionTypes';
import { SettingsModalAction } from '../actions';

const initialState = false;

const reducer = (
  state: boolean = initialState,
  action: SettingsModalAction
) => {
  switch (action.type) {
    case ActionType.SETTINGSMODALOPENED:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
