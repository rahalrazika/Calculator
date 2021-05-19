import React from 'react';
import '../App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';
import calculate from '../logic /calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState((prevState) => ({ ...calculate(prevState, buttonName) }));
  }

  render() {
    const { next, total, operation } = this.state;
    const result = { next, total, operation };
    return (
      <div className="App">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />

      </div>
    );
  }
}

export default App;
