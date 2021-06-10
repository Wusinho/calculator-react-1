import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';


const App = () => (
  <>
    <Display result="0" />
    <ButtonPanel />
  </>
);

export default App;
