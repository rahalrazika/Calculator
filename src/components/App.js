import { useState } from 'react';
import '../App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';
import calculate from '../Logic/calculate';

const App = () => {
  const [state, setState] = useState({ next: '', total: '', operation: '' });
  const { next } = state;
  const { total } = state;
  const { operation } = state;

  const handleClick = (buttonName) => {
    setState((prevState) => ({ ...calculate(prevState, buttonName) }));
  };

  const result = { next, total, operation };
  return (
    <div className="App">
      <Display result={result} />
      <ButtonPanel clickHandler={handleClick} />

    </div>
  );
};

export default App;
