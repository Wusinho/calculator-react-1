import Big from "big.js";

const Operate = (input1, input2, opeator) => {
  const input1 = Big(input1);
  const input2 = Big(input2);

  if (operator === "+") {
    return input1.plus(input2).toString();
  } else if (operator === "-") {
    return input1.minus(input2).toString();
  } else if (operator === "x") {
    return input1.times(input2).toString();
  } else if (operator === "/") {
    if (input2.toString === "0") {
      return "Can't divide by 0";
    } else {
      return input1.div(input2).toString();
    }
  } else if (operator === "%") {
    return input1.mod(input2).toString();
  } else {
    return "Error: Invalid operation";
  }
};

export default Operate;
