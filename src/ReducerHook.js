import React, { useReducer, useEffect } from 'react';

const initialState = {
  loading: true,
  data: null,
  error: null,
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };

    case 'ERROR':
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };

    case 'INCREMENT':
      return { ...state, count: state.count + 1 };

    case 'DECREMENT':
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('https://picsum.photos/200/300'); // it's just a image link not api
      const data = res.url;
      dispatch({ type: 'SUCCESS', payload: data });
    } catch (error) {
      if (error) {
        dispatch({ type: 'ERROR', payload: error.message });
      }
    }
  };
  return (
    <>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <div>{state.count} </div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>


      <div className="container">
        {state.loading ? (
          <div>Loading...</div>
        ) : state.error ? (
          <div>Error...</div>
        ) : (
          <img src={state.data} alt="" />
        )}
      </div>
    </>
  );
};

export default ReducerHook;
