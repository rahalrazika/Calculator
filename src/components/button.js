import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => {
  <h1>
    {name}
  </h1>;
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
