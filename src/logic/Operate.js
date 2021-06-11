import Big from 'big.js';

const Operate = (input1, input2, operation) => {
  const inpt1 = Big(input1);
  const inpt2 = Big(input2);

  if (operation === '+') {
    return inpt1.plus(inpt2).toString();
  }
  if (operation === '-') {
    return inpt1.minus(inpt2).toString();
  }
  if (operation === 'x') {
    return inpt1.times(inpt2).toString();
  }
  if (operation === '/') {
    if (inpt2.toString === '0') {
      return "Can't divide by 0";
    }
    return inpt1.div(inpt2).toString();
  }
  if (operation === '%') {
    return inpt1.mod(inpt2).toString();
  }
  return 'Error: Invalid operation';
};

export default Operate;
