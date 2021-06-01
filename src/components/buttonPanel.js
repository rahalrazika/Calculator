import PropTypes from 'prop-types';
import Button from './button';

const ButtonPanel = ({ clickHandler }) => {
  const buttonNames = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['3', '2', '1', '+'],
    ['0', '.', '='],
  ];

  return (
    <div>
      <div>
        {buttonNames[0].map((buttonName) => (
          <Button name={buttonName} key={buttonName} clickHandler={clickHandler} className={`button ${buttonName === '÷' ? 'color' : 'greyColor'}`} />))}
      </div>
      <div>
        {buttonNames[1].map((buttonName) => (
          <Button name={buttonName} key={buttonName} clickHandler={clickHandler} className={`button ${buttonName === 'X' ? 'color' : ''}`} />))}
      </div>
      <div>
        {buttonNames[2].map((buttonName) => (
          <Button name={buttonName} key={buttonName} clickHandler={clickHandler} className={`button ${buttonName === '-' ? 'color' : ''}`} />))}
      </div>
      <div>
        {buttonNames[3].map((buttonName) => (
          <Button name={buttonName} key={buttonName} clickHandler={clickHandler} className={`button ${buttonName === '+' ? 'color' : ''}`} />))}
      </div>
      <div>
        {buttonNames[4].map((buttonName) => (
          <Button name={buttonName} key={buttonName} clickHandler={clickHandler} className={`button ${buttonName === '=' ? 'equal' : ''}`} />))}
      </div>
    </div>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
