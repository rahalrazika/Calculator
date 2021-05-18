import operate from './operate';

const calculate = (dataObj, buttonName) => {
  let calcData = { ...dataObj };

  if (buttonName === '+/-') {
    calcData.total *= -1;
    calcData.next *= -1;
  } else if (buttonName === 'AC') {
    calcData.total *= '';
    calcData.next *= '';
  } else if (buttonName === '+' || buttonName === '-' || buttonName === '/' || buttonName === '%' || buttonName === 'X') {
    calcData.next = operate(
      Number(calcData.next),
      Number(calcData.total),
      Number(calcData.operation),
    );
  } else if (buttonName === '=') {
    calcData.total = operate(
      Number(calcData.next),
      Number(calcData.total),
      Number(calcData.operation),
    );
  } else {
    calcData = '';
  }
  return calcData;
};
export default calculate;
