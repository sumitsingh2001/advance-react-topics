import React from 'react';
import { useDataOfContext } from '../context';

const SendAndGetContext = () => {
  const { stateValue, setStateValue } = useDataOfContext();

  const handleSetName = () => {
    setStateValue({ name: 'Sumit Singh' });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {stateValue?.name || 'N/A'}</p>
      <button onClick={handleSetName}>Set Name</button>
    </div>
  );
};

export default SendAndGetContext;
