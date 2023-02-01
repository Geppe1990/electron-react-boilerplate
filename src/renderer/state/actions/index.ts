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

interface IRemovePhotoAction {
  type: ActionType.REMOVEPHOTO;
  payload: string;
}

interface IActivePhotoAction {
  type: ActionType.ACTIVEPHOTO;
  payload: string | undefined;
}

interface ISettingsModalOpenedAction {
  type: ActionType.SETTINGSMODALOPENED;
  payload: boolean;
}

interface IAddFolderAction {
  type: ActionType.ADDFOLDER;
  payload: {
    id: number;
    name: string;
    folder: string;
  };
}
interface IEditFolderAction {
  type: ActionType.EDITFOLDER;
  payload: {
    id: number;
    name: string;
    folder: string;
  };
}
interface IDeleteFolderAction {
  type: ActionType.DELETEFOLDER;
  payload: number;
}

export type BankAction = IDepositAction | IWithDrawAction | IBankruptAction;
export type PhotosAction = ILoadPhotosAction | IRemovePhotoAction;
export type ActivePhotoAction = IActivePhotoAction;
export type SettingsModalAction = ISettingsModalOpenedAction;
export type FolderAction =
  | IAddFolderAction
  | IEditFolderAction
  | IDeleteFolderAction;
