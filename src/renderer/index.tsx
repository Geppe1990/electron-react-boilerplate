import { createRoot } from 'react-dom/client';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import allReducers from './store/reducers';
import articleReducer from './store/reducers/articleReducer';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;

// TODO: Continua da qui, cerca di capire come gestire un secondo dispatch oltre a DispatchArticleType
const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchArticleType;
} = configureStore({
  middleware: [thunk],
  reducer: articleReducer,
});

const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
