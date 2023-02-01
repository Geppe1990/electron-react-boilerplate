import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { useDispatch, useSelector } from 'react-redux';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SettingsForm from './SettingsForm';
import ActiveFolderForm from './ActiveFolderForm';

const Settings = () => {
  const modalSettings = useSelector((state: State) => state.modalSettings);
  const folders = useSelector((state: State) => state.folders.data);
  const activeFolder = useSelector((state: State) => state.activeFolder);
  const dispatch = useDispatch();
  const { setSettingsModalOpened, addFolder } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className={`modal ${modalSettings ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Settings</p>
          <FontAwesomeIcon
            className="is-clickable"
            icon={faClose}
            onClick={() => setSettingsModalOpened(false)}
          />
        </header>
        <section className="modal-card-body">
          <h2 className="title is-2">Cartella Principale</h2>
          {/* <div>{activeFolder}</div> */}
          <div>
            <ActiveFolderForm />
          </div>
          <h2 className="title is-2">Cartelle</h2>
          {folders.map((folder) => (
            <div key={folder.id} className={`mb-5 ${folder.id}`}>
              <SettingsForm item={folder} />
              <hr />
            </div>
          ))}
        </section>
        <footer className="modal-card-foot">
          <button
            type="button"
            className="button is-success"
            onClick={() =>
              addFolder({
                id: folders.length + 1,
                name: '',
                folder: '',
              })
            }
          >
            New Folder
          </button>
          <button
            type="button"
            className="button is-danger"
            onClick={() => setSettingsModalOpened(false)}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Settings;
