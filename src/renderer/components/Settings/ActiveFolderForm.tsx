import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { useDispatch, useSelector } from 'react-redux';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActiveFolderForm = () => {
  const activeFolder = useSelector((state: State) => state.activeFolder);
  const [folder, setFolder] = useState(activeFolder);
  const dispatch = useDispatch();
  const { editActiveFolder } = bindActionCreators(actionCreators, dispatch);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editActiveFolder(folder);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="field">
        <label className="label">Active Folder</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={folder}
            onChange={(e) => setFolder(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ActiveFolderForm;
