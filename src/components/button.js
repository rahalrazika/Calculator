import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler, className }) => (

  <button type="button" value={name} onClick={() => clickHandler(name)} className={className}>
    {name}
  </button>

);

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  name: ' ',
  clickHandler: null,
  className: 'button',

};

export default Button;
