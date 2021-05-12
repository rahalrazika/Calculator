import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  if (operation === '+') {
    result = Big(numberOne) + Big(numberTwo);
  } else if (operation === '-') {
    result = Big(numberOne) - Big(numberTwo);
  } else if (operation === '/') {
    result = Big(numberOne) / Big(numberTwo);
  } else if (operation === 'X') {
    result = Big(numberOne) * Big(numberTwo);
  } else if (operation === '%') {
    result = (Big(numberOne) * Big(numberTwo)) / 100;
  } else {
    result = '';
  }
  return result;
};
export default operate;
