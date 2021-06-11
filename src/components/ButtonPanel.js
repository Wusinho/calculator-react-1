import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../index.css';

const ButtonPanel = ({ buttonClicked }) => {
  const clickHandl = (buttonName) => {
    buttonClicked(buttonName);
  };
  return (
    <>
      <div className="group">
        <Button buttonNameHandler={clickHandl} buttonName="AC" />
        <Button buttonNameHandler={clickHandl} buttonName="+/-" />
        <Button buttonNameHandler={clickHandl} buttonName="%" />
        <Button buttonNameHandler={clickHandl} buttonName="/" />
      </div>
      <div className="group">
        <Button buttonNameHandler={clickHandl} buttonName="7" />
        <Button buttonNameHandler={clickHandl} buttonName="8" />
        <Button buttonNameHandler={clickHandl} buttonName="9" />
        <Button buttonNameHandler={clickHandl} buttonName="X" />
      </div>
      <div className="group">
        <Button buttonNameHandler={clickHandl} buttonName="4" />
        <Button buttonNameHandler={clickHandl} buttonName="5" />
        <Button buttonNameHandler={clickHandl} buttonName="6" />
        <Button buttonNameHandler={clickHandl} buttonName="-" />
      </div>
      <div className="group">
        <Button buttonNameHandler={clickHandl} buttonName="1" />
        <Button buttonNameHandler={clickHandl} buttonName="2" />
        <Button buttonNameHandler={clickHandl} buttonName="3" />
        <Button buttonNameHandler={clickHandl} buttonName="+" />
      </div>
      <div className="group2">
        <Button buttonNameHandler={clickHandl} buttonName="0" />
        <Button buttonNameHandler={clickHandl} buttonName="." />
        <Button buttonNameHandler={clickHandl} buttonName="=" />
      </div>
    </>
  );
};
ButtonPanel.propTypes = {
  buttonClicked: PropTypes.func.isRequired,
};

export default ButtonPanel;
