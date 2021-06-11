import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../index.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <>
      <div className="group">
        <Button clickHandler={handleClick} buttonName="AC" />
        <Button clickHandler={handleClick} buttonName="+/-" />
        <Button clickHandler={handleClick} buttonName="%" />
        <Button clickHandler={handleClick} buttonName="/" />
      </div>
      <div className="group">
        <Button clickHandler={handleClick} buttonName="7" />
        <Button clickHandler={handleClick} buttonName="8" />
        <Button clickHandler={handleClick} buttonName="9" />
        <Button clickHandler={handleClick} buttonName="X" />
      </div>
      <div className="group">
        <Button clickHandler={handleClick} buttonName="4" />
        <Button clickHandler={handleClick} buttonName="5" />
        <Button clickHandler={handleClick} buttonName="6" />
        <Button clickHandler={handleClick} buttonName="-" />
      </div>
      <div className="group">
        <Button clickHandler={handleClick} buttonName="1" />
        <Button clickHandler={handleClick} buttonName="2" />
        <Button clickHandler={handleClick} buttonName="3" />
        <Button clickHandler={handleClick} buttonName="+" />
      </div>
      <div className="group2">
        <Button clickHandler={handleClick} buttonName="0" />
        <Button clickHandler={handleClick} buttonName="." />
        <Button clickHandler={handleClick} buttonName="=" />
      </div>
    </>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
