import React, { useEffect } from 'react';
import { success, failure } from './actions';
import { useSelector, useDispatch } from 'react-redux';

const ReducerFromRedux = () => {
  const apiData = useSelector((state) => state.api);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://picsum.photos/200/300');
        const data = res.url;
        dispatch(success(data));
      } catch (error) {
        dispatch(failure(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className='container'>
      {apiData.loading ? (
        <div>Loading...</div>
      ) : apiData.error ? (
        <div>Error...</div>
      ) : (
        <img src={apiData.data} alt='' />
      )}
    </div>
  );
};

export default ReducerFromRedux;
