import React, { useState } from 'react';
import '../style/App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';
import calculate from '../Logic/calculate';

const App = () => {
  const [state, setState] = useState({ next: '', total: 0, operation: '' });
  const { next } = state;
  const { total } = state;
  const { operation } = state;

  const handleClick = (buttonName) => {
    setState((prevState) => ({ ...calculate(prevState, buttonName) }));
  };

  const result = { next, total, operation };
  return (
    <div>
      <div className="App">
        <Display result={result} />
        <ButtonPanel clickHandler={handleClick} />

      </div>
    </div>
  );
};

export default App;
