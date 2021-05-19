import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => (

  <button type="button" value={name} onClick={() => clickHandler(name)}>
    {name}
  </button>

);

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: ' ',
  clickHandler: null,
};

export default Button;
