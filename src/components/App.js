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
      operaton: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    this.setState((prevState) => calculate(prevState, buttonName));
  }

  render() {
    return (
      <div className="App">
        <Display />
        <ButtonPanel onClick={this.handleClick} />

      </div>
    );
  }
}

export default App;
