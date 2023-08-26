import React, { useState, useMemo } from 'react';

const calculateFibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

const UseMemo = () => {
  const [number, setNumber] = useState(0);

  const fibonacci = useMemo(() => {
    return calculateFibonacci(number);
  }, [number]);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Number: {number}</p>
      <p>Fibonacci: {fibonacci}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseMemo;
