import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, buttonNameHandler }) => {
  const handleClick = () => buttonNameHandler(buttonName);
  return (
    <button type="button" onClick={handleClick}>{buttonName}</button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  buttonNameHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonName: null,
};

export default Button;
