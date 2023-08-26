export const increse = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrese = () => {
  return {
    type: 'DECREMENT',
  };
};

export const success = (data) => {
  return {
    type: 'SUCCESS',
    payload: data,
  };
};

export const failure = (error) => {
  return {
    type: 'ERROR',
    payload: error,
  };
};
