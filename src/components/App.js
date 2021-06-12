/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/Calculate';
import '../index.css';

const App = () => {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const result = calculate(value, buttonName);
    setValue({ ...result });
  };
  const { total, next, operation } = value;
  return (
    <div>
      <Display result={(next && next.toString()) || (total && total.toString()) || '0'} partialOp={operation || ''} partialTotal={total || ''} partialNext={next || ''} />
      <ButtonPanel clickHandler={(e) => handleClick(e)} />
    </div>
  );
};

export default App;
