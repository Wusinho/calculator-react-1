import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../index.css';

const ButtonPanel = ({ putohijodeputa }) => {
  const clickHandl = (buttonName) => {
    putohijodeputa(buttonName);
  };
  return (
    <>
      <div className="group">
        <Button malparido={clickHandl} buttonName="AC" />
        <Button malparido={clickHandl} buttonName="+/-" />
        <Button malparido={clickHandl} buttonName="%" />
        <Button malparido={clickHandl} buttonName="/" />
      </div>
      <div className="group">
        <Button malparido={clickHandl} buttonName="7" />
        <Button malparido={clickHandl} buttonName="8" />
        <Button malparido={clickHandl} buttonName="9" />
        <Button malparido={clickHandl} buttonName="X" />
      </div>
      <div className="group">
        <Button malparido={clickHandl} buttonName="4" />
        <Button malparido={clickHandl} buttonName="5" />
        <Button malparido={clickHandl} buttonName="6" />
        <Button malparido={clickHandl} buttonName="-" />
      </div>
      <div className="group">
        <Button malparido={clickHandl} buttonName="1" />
        <Button malparido={clickHandl} buttonName="2" />
        <Button malparido={clickHandl} buttonName="3" />
        <Button malparido={clickHandl} buttonName="+" />
      </div>
      <div className="group2">
        <Button malparido={clickHandl} buttonName="0" />
        <Button malparido={clickHandl} buttonName="." />
        <Button malparido={clickHandl} buttonName="=" />
      </div>
    </>
  );
};
ButtonPanel.propTypes = {
  putohijodeputa: PropTypes.func.isRequired,
};

export default ButtonPanel;
