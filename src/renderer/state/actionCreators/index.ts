import { Dispatch } from 'redux';
import { ActionType } from '../actionTypes';
import {
  ActivePhotoAction,
  BankAction,
  PhotosAction,
  SettingsAction,
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
};

export const removePhoto = (photo: string) => {
  return (dispatch: Dispatch<PhotosAction>) => {
    dispatch({
      type: ActionType.REMOVEPHOTO,
      payload: photo,
    });
  };
};

export const setActivePhoto = (activePhoto: string | undefined) => {
  return (dispatch: Dispatch<ActivePhotoAction>) => {
    dispatch({
      type: ActionType.ACTIVEPHOTO,
      payload: activePhoto,
    });
  };
};

export const setOpenSettings = (openSettings: boolean) => {
  return (dispatch: Dispatch<SettingsAction>) => {
    dispatch({
      type: ActionType.SETTINGSOPENED,
      payload: openSettings,
    });
  };
};
