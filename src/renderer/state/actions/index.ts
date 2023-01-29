import { ActionType } from '../actionTypes';

interface IDepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface IWithDrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface IBankruptAction {
  type: ActionType.BANKRUPT;
}

interface ILoadPhotosAction {
  type: ActionType.LOADPHOTOS;
  payload: string[];
}

interface IActivePhotoAction {
  type: ActionType.ACTIVEPHOTO;
  payload: string | undefined;
}

export type BankAction = IDepositAction | IWithDrawAction | IBankruptAction;
export type PhotosAction = ILoadPhotosAction;
export type ActivePhotoAction = IActivePhotoAction;
