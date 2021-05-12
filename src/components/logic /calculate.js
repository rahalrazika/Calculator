import operate from './operate';

const calculate = (dataObj, buttonName) => {
  const calcData = { next, total, operation };
  if (buttonName === '+/-') {
    calcData.total *= -1;
    calcData.next *= -1;
  } else if (buttonName === 'AC') {
    calcData.total *= '';
    calcData.next *= '';
  } else if (buttonName === '+' || buttonName === '-' || buttonName === '/' || buttonName === '%' || buttonName === 'X') {
    calcData = '';
  } else if (buttonName === '=') {
    calcData = '';
  } else if (buttonName === '.') {
    calcData = '';
  }
};
export default calculate;
