import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  if (operation === '+') {
    result = Big(numberOne).plus(Big(numberTwo));
  } else if (operation === '-') {
    result = Big(numberOne).minus(Big(numberTwo));
  } else if (operation === '/') {
    result = Big(numberOne).div(Big(numberTwo));
  } else if (operation === 'X') {
    result = Big(numberOne).times(Big(numberTwo));
  } else if (operation === '%') {
    result = (Big(numberOne).times(Big(numberTwo))) / 100;
  } else {
    result = '';
  }
  return result;
};
export default operate;
