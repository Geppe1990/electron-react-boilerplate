import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';

const Test = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt, loadPhotos } =
    bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);
  const photos = useSelector((state: State) => state.photos);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <div>
        {photos.map((photo) => (
          <div key={photo}>{photo}</div>
        ))}
      </div>

      <button type="button" onClick={() => depositMoney(1000)}>
        Deposit
      </button>
      <button type="button" onClick={() => withdrawMoney(500)}>
        Withdraw
      </button>
      <button type="button" onClick={() => bankrupt()}>
        Bankrupt
      </button>
      <button type="button" onClick={() => loadPhotos(['Foto 3', 'Foto 4'])}>
        Load Photos
      </button>
    </div>
  );
};

export default Test;
