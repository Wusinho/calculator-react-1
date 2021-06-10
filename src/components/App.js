import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import Button from "./Button";

const result = "0";
const App = () => {
  return (
    <div>
      <Display result={result} />
      <ButtonPanel />
      <Button name={""} />
    </div>
  );
};

export default App;
