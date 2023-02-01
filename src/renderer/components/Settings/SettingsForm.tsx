/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'renderer/state';
import { useDispatch } from 'react-redux';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SettingsFormProps = {
  item: {
    name: string;
    folder: string;
    id: number;
  };
};

type TextInputProps = {
  val: string;
  callback: React.Dispatch<React.SetStateAction<string>>;
};

const TextInput: React.FC<TextInputProps> = ({ val, callback }) => {
  return (
    <input
      className="input"
      type="text"
      value={val}
      onChange={(e) => callback(e.target.value)}
    />
  );
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

  // const getFolder = () => {
  //   test();
  // };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <TextInput val={name} callback={setName} />
        </div>
      </div>
      <label className="label">Folder</label>
      <div className="field has-addons">
        <div className="control is-expanded">
          <TextInput val={folder} callback={setFolder} />
        </div>
        {/* <div className="control">
          <button
            type="button"
            className="button is-info"
            onClick={() => getFolder()}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div> */}
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
