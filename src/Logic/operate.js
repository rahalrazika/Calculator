import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  if (operation === '+') {
    result = Big(numberOne).plus(Big(numberTwo));
  } else if (operation === '-') {
    result = Big(numberOne).minus(Big(numberTwo));
  } else if (operation === '÷') {
    if ((Big(numberTwo)).eq(0)) return 'Syntax ERROR';
    result = Big(numberOne).div(Big(numberTwo)).toString();
  } else if (operation === 'X') {
    result = Big(numberOne).times(Big(numberTwo));
  } else if (operation === '%') {
    result = Big(numberOne).mod(Big(numberTwo));
  } else {
    result = '';
  }
  return result.toString();
};
export default operate;
