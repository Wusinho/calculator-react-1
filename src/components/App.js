import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const result = '0';
const App = () => (
  <>
    <Display result={result} />
    <ButtonPanel />
  </>
);

export default App;
