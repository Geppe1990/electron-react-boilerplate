/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'renderer/state';
import { useDispatch } from 'react-redux';

type SettingsFormProps = {
  item: {
    name: string;
    folder: string;
    id: number;
  };
};

const SettingsForm: React.FC<SettingsFormProps> = ({ item }) => {
  const [name, setName] = useState(item.name);
  const [folder, setFolder] = useState(item.folder);
  const [id] = useState(item.id);
  const dispatch = useDispatch();
  const { editFolder, deleteFolder, setSettingsModalOpened } =
    bindActionCreators(actionCreators, dispatch);

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
    <form onSubmit={(e) => handleSubmit(e)}>
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

export default SettingsForm;
