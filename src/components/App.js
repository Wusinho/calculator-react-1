import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const result = '0';
const App = () => (
  <div>
    <Display result={result} />
    <ButtonPanel />
  </div>
);

export default App;
