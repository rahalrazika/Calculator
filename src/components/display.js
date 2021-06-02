import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display">
    <p>
      {`${result.total} ${result.operation} ${result.next}`}
    </p>
  </div>
);

Display.propTypes = {

  result: PropTypes.instanceOf(Object),
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,

};

Display.defaultProps = {
  result: {
    total: '',
    next: '',
    operation: '',
  },
  total: '',
  next: '',
  operation: '',
};
export default Display;
