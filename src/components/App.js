import React from 'react';
import '../App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';
import calculate from '../logic /calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { next, total, operation } = this.state;
    const prevState = { next, total, operation };
    const result = calculate(prevState, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="App">
        <Display total={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />

      </div>
    );
  }
}

export default App;
