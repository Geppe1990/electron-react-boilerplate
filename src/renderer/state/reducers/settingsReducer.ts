import { ActionType } from '../actionTypes';
import { SettingsAction } from '../actions';

const initialState = false;

const reducer = (state: boolean = initialState, action: SettingsAction) => {
  switch (action.type) {
    case ActionType.SETTINGSOPENED:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
