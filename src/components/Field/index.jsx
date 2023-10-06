import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './styles';

const Field = ({ type, size, color, ...props }) => {
  const disabled = type === 'disable';
  return <StyledInput type="text" disabled={disabled} size={size} color={color} {...props} />;
};

Field.propTypes = {
  type: PropTypes.oneOf(['noDisable', 'disable']).isRequired,
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  color: PropTypes.oneOf(['background1', 'background2']).isRequired,
};

export default Field;