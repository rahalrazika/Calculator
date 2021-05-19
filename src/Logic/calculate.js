import operate from './operate';

const calculate = (dataObj, buttonName) => {
  const calcData = { ...dataObj };

  if (buttonName === '+/-') {
    calcData.total = (calcData.total * -1).toString();
    calcData.next = calcData.next.length >= 1 ? (calcData.next * -1).toString() : calcData.next;
  } else if (buttonName === 'AC') {
    calcData.total = '';
    calcData.next = '';
    calcData.operation = '';
  } else if (buttonName === '+' || buttonName === '-' || buttonName === '÷' || buttonName === 'X') {
    calcData.operation = calcData.total !== '' ? buttonName : calcData.operation;
  } else if (buttonName === '%') {
    calcData.total = (calcData.total * 0.01).toString();
    calcData.next = calcData.next.length >= 1 ? (calcData.next * 0.01).toString() : calcData.next;
  } else if (buttonName === '=') {
    calcData.total = operate(calcData.total * 1, calcData.next * 1, calcData.operation);
    calcData.next = '';
    calcData.operation = '';
  } else if (calcData.operation === '') {
    calcData.total += buttonName;
  } else {
    calcData.next += buttonName;
  }
  return calcData;
};
export default calculate;
