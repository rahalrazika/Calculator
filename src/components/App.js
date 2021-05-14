import '../App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';
import calculate from '../logic /calculate';

const App = () => (
  <div className="App">

    <Display />
    <ButtonPanel onClick={calculate} />

  </div>
);

export default App;
