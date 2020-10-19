import React from 'react';
import PropTypes from 'prop-types';

export default function Type({ nextInput }) {
  return <div>type</div>;
}

Type.propTypes = {
  nextInput: PropTypes.func.isRequired,
};
