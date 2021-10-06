import '@testing-library/jest-dom/extend-expect';
import Calculate from '../Logic/calculate';

const btn1 = '+/-';
const btn2 = 'AC';
const btn3 = '+';
const btn4 = '-';
const btn5 = '÷';
const btn6 = 'X';
const btn7 = '%';
const calcData1 = { total: 10, next: 2, operation: btn1 };
const calcData2 = { total: 20, next: 20, operation: btn2 };
const calcData3 = { total: 30, next: 20, operation: btn3 };
const calcData4 = { total: 30, next: 20, operation: btn4 };
const calcData5 = { total: 20, next: 5, operation: btn5 };
const calcData6 = { total: 4, next: 5, operation: btn6 };
const calcData7 = { total: 4, next: 5, operation: btn7 };

it('expect to render a negative number', () => {
  const result = Calculate(calcData1, btn1);
  expect(result).toEqual({ total: '-10', next: 2, operation: '+/-' });
});

it('expect to not equal negative number', () => {
  const result = Calculate(calcData1, btn1);
  expect(result).not.toEqual({ total: 10, next: 2, operation: '+/-' });
});

it('expect to clear data ', () => {
  const result = Calculate(calcData2, btn2);
  expect(result).toEqual({ total: '', next: '', operation: '' });
});

it('expect to clear data ', () => {
  const result = Calculate(calcData2, btn2);
  expect(result).not.toEqual({ total: ' ', next: ' ', operation: ' ' });
});

it('expect to add values  ', () => {
  const result = Calculate(calcData3, btn3);
  const finalTotal = Calculate(result, '=');
  expect(finalTotal).toEqual({ total: '50', next: '', operation: '' });
});
it('expect to subtract values  ', () => {
  const result = Calculate(calcData4, btn4);
  const finalTotal = Calculate(result, '=');
  expect(finalTotal).toEqual({ total: '10', next: '', operation: '' });
});
it('expect to divide values  ', () => {
  const result = Calculate(calcData5, btn5);
  const finalTotal = Calculate(result, '=');
  expect(finalTotal).toEqual({ total: '4', next: '', operation: '' });
});
it('expect to multiply values  ', () => {
  const result = Calculate(calcData6, btn6);
  const finalTotal = Calculate(result, '=');
  expect(finalTotal).toEqual({ total: '20', next: '', operation: '' });
});
it('expect to divide value by 100  ', () => {
  const result = Calculate(calcData7, btn7);
  expect(result).toEqual({ total: '0.04', next: 5, operation: '%' });
});
