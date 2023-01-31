import { useState } from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Settings from '../Settings/Settings';

const Header = () => {
  const test = () => {
    console.log('Test');
  };

  return (
    <header className="container-fluid is-flex is-justify-content-space-between is-align-items-center">
      <h1 className="title has-text-white has-text-left">Photomanager</h1>
      <span className="is-clickable">
        <FontAwesomeIcon icon={faGear} onClick={() => test()} />
      </span>
      <Settings />
    </header>
  );
};

export default Header;
