import React, { useState, useEffect } from 'react';

const ParentComponent = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(5);
  const [data, setData] = useState({});

  // effec to fetch data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('url');
      const jsondata = await res.json();
      setData(jsondata);
      console.log(data);
    };
    fetchData();
  }, [data]);

  // effect to interval ++

  useEffect(() => {
    const interval = setInterval(() => {
      setValue2((preValue) => {
        if (preValue === 0) {
          return 5;
        } else {
          return preValue - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [value2]);

  // callback
  const handleData = (value) => {
    setValue(value);
  };
  return (
    <>
      <h1>ParentComponent</h1>
      <span> value from child component {value} </span>
      <div> time value {value2} </div>
      <ChildComponent firstValue={value} updateValue={handleData} />
    </>
  );
};

export default ParentComponent;

const ChildComponent = ({ firstValue, updateValue }) => {
  function sendData() {
    updateValue(firstValue + 1);
  }

  return (
    <>
      <div>HI</div>
      <button onClick={sendData}>sendToParent</button>
    </>
  );
};
