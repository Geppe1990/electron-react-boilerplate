import { Dispatch } from 'redux';
import { PhotosAction } from 'renderer/state/actions';

export const movePhoto = (foto: string | undefined, folder: string) => {
  window.electron.ipcRenderer.sendMessage('move-photo', [foto, folder]);
};

export const loadImages = (
  callback: (photos: string[]) => (dispatch: Dispatch<PhotosAction>) => void
) => {
  window.electron.ipcRenderer.once('get-files', (arg) => {
    callback(arg as string[]);
  });
};
