/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { useDispatch, useSelector } from 'react-redux';

type FolderFormProps = {
  item: {
    name: string;
    folder: string;
    id: number;
  };
};

const FolderForm: React.FC<FolderFormProps> = ({ item }) => {
  const [name, setName] = useState(item.name);
  const [folder, setFolder] = useState(item.folder);
  const [id] = useState(item.id);
  const dispatch = useDispatch();
  const { editFolder, deleteFolder } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const { setSettingsModalOpened } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const resetFields = () => {
    setName(item.name);
    setFolder(item.folder);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = {
      name,
      folder,
      id,
    };

    editFolder(result);
    setSettingsModalOpened(false);
  };

  return (
    <form className="mb-5" onSubmit={(e) => handleSubmit(e)}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Folder</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            value={folder}
            onChange={(e) => setFolder(e.target.value)}
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
        <div className="control">
          <button
            type="button"
            className="button is-link"
            disabled={item.name === name && item.folder === folder}
            onClick={() => resetFields()}
          >
            Cancel
          </button>
        </div>
        <div className="control">
          <button
            type="button"
            className="button is-danger"
            onClick={() => deleteFolder(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </form>
  );
};

const Settings = () => {
  const modalSettings = useSelector((state: State) => state.modalSettings);
  const folders = useSelector((state: State) => state.folders.data);
  const dispatch = useDispatch();
  const { setSettingsModalOpened } = bindActionCreators(
    actionCreators,
    dispatch
  );

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
            <div key={folder.id}>
              <FolderForm item={folder} />
              <hr />
            </div>
          ))}
        </section>
        <footer className="modal-card-foot">
          <button type="button" className="button is-success">
            Save changes
          </button>
          <button
            type="button"
            className="button"
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
