import Button from './button';

const ButtonPanel = () => {
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
        {buttonNames[0].map((buttonName) => <Button name={buttonName} key={buttonName} />)}
      </div>
      <div>
        {buttonNames[1].map((buttonName) => <Button name={buttonName} key={buttonName} />)}
      </div>
      <div>
        {buttonNames[2].map((buttonName) => <Button name={buttonName} key={buttonName} />)}
      </div>
      <div>
        {buttonNames[3].map((buttonName) => <Button name={buttonName} key={buttonName} />)}
      </div>
      <div>
        {buttonNames[4].map((buttonName) => <Button name={buttonName} key={buttonName} />)}
      </div>
    </div>
  );
};

export default ButtonPanel;
