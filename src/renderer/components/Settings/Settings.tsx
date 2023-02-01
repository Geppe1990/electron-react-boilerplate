import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { useDispatch, useSelector } from 'react-redux';
import SettingsForm from './SettingsForm';

const Settings = () => {
  const modalSettings = useSelector((state: State) => state.modalSettings);
  const folders = useSelector((state: State) => state.folders.data);
  const dispatch = useDispatch();
  const { setSettingsModalOpened, addFolder } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // const addFolder = () => {
  //   console.log('Aggiungo Folder');
  // };

  return (
    <div className={`modal ${modalSettings ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Settings</p>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={() => setSettingsModalOpened(false)}
          />
        </header>
        <section className="modal-card-body">
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
                name: 'ciccio',
                folder: 'ciccia',
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
