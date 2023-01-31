// export const loadImages = () => {
//   window.electron.ipcRenderer.once('get-files', (arg) => {
//     loadPhotos(arg as string[]);
//   });
//   window.electron.ipcRenderer.sendMessage('get-files', [
//     'BACKEND: dato ricevuto dal front-end',
//   ]);
// };

export const movePhoto = (foto: string | undefined, folder: string) => {
  window.electron.ipcRenderer.sendMessage('move-photo', [foto, folder]);
};
