import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, malparido }) => {
  const handleClick = () => malparido(buttonName);
  return (
    <button type="button" onClick={handleClick}>{buttonName}</button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  malparido: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonName: null,
};

export default Button;
