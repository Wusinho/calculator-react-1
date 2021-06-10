import React from "react";
import Button from "./Button";

const ButtonPanel = () => {
  return (
    <div>
      <div className="group-1">
        <Button name="AC" type="sp" />
        <Button name="+/-" type="sp" />
        <Button name="%" type="sp" />
        <Button name="/" type="op" />
      </div>
      <div className="group-2">
        <Button name="7" type="num" />
        <Button name="8" type="num" />
        <Button name="9" type="num" />
        <Button name="X" type="op" />
      </div>
      <div className="group-3">
        <Button name="4" type="num" />
        <Button name="5" type="num" />
        <Button name="6" type="num" />
        <Button name="-" type="op" />
      </div>
      <div className="group-4">
        <Button name="1" type="num" />
        <Button name="2" type="num" />
        <Button name="3" type="num" />
        <Button name="+" type="op" />
      </div>
      <div className="group-5">
        <Button name="0" type="num" />
        <Button name="." type="num" />
        <Button name="=" type="op" />
      </div>
    </div>
  );
};

export default ButtonPanel;
