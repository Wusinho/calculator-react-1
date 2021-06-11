/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/Calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const clickEventHandler = (buttonName) => {
      const result = calculate(this.state, buttonName);
      this.setState({ ...result });
    };
    const { next, total, operation } = this.state;
    return (
      <div>
        <Display result={(next && next.toString()) || (total && total.toString()) || '0'} partialOp={operation || ''} partialTotal={total || ''} partialNext={next || ''} />
        <ButtonPanel buttonClicked={(e) => clickEventHandler(e)} />
      </div>
    );
  }
}

export default App;
