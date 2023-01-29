import { ActionType } from '../actionTypes';
import { Dispatch } from 'redux';
import {
  BankAction,
  PhotosAction
} from '../actions';

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankrupt = () => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};

export const loadPhotos = (photos: string[]) => {
  return (dispatch: Dispatch<PhotosAction>) => {
    dispatch({
      type: ActionType.LOADPHOTOS,
      payload: photos,
    });
  };
}
