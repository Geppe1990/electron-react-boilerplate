import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'renderer/state';
import Settings from '../Settings/Settings';

const Header = () => {
  const dispatch = useDispatch();
  const { setOpenSettings } = bindActionCreators(actionCreators, dispatch);

  return (
    <header className="container-fluid is-flex is-justify-content-space-between is-align-items-center">
      <h1 className="title has-text-white has-text-left">Photomanager</h1>
      <span className="is-clickable">
        <FontAwesomeIcon icon={faGear} onClick={() => setOpenSettings(true)} />
      </span>
      <Settings />
    </header>
  );
};

export default Header;
