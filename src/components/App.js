import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import Button from "./Button";

const result = "0";
const App = () => {
  return (
    <React.Fragment>
      <Display result={result} />
      <ButtonPanel />
      <Button name={""} />
    </React.Fragment>
  );
};

export default App;
