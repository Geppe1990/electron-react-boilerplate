import React from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import { useDispatch, useSelector } from 'react-redux';
import { movePhoto, loadImages } from 'renderer/api/api';
import SliderWrapper from '../SliderWrapper/SliderWrapper';

const Settings = () => {
  const settings = useSelector((state: State) => state.settings);
  const dispatch = useDispatch();
  const { setOpenSettings } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className={`modal ${settings ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            Settings {settings ? 'si' : 'no'} asd
          </p>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={() => setOpenSettings(false)}
          />
        </header>
        <section className="modal-card-body">Content</section>
        <footer className="modal-card-foot">
          <button type="button" className="button is-success">
            Save changes
          </button>
          <button
            type="button"
            className="button"
            onClick={() => setOpenSettings(false)}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Settings;
