import { ActionType } from '../actionTypes';
import { BankAction } from '../actions';
const initialState = 0;

const reducer = (state: number = initialState, action: BankAction) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;
