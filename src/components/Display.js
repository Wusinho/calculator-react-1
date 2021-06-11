import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Display = (props) => {
  const {
    result, partialOp, partialTotal, partialNext,
  } = props;
  const partialFunction = (partialOp, partialTotal, partialNext = '') => {
    if (partialOp !== '=') {
      const partialShown = partialNext ? `${partialTotal} ${partialOp} ${partialNext}` : `${partialTotal} ${partialOp}`;
      return partialShown;
    }
    return ' ';
  };
  return (
    <div className="display">
      <h5 className="resultDisplayer">{result}</h5>
      <h5 className="partialDisplayer">{partialFunction(partialOp, partialTotal, partialNext)}</h5>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
  partialTotal: PropTypes.string,
  partialOp: PropTypes.string,
  partialNext: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  partialTotal: '0',
  partialOp: '0',
  partialNext: null,
};

export default Display;
