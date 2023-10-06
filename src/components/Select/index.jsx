import React from 'react';
import PropTypes from 'prop-types';
import StyledSelect from './styles';

const Select = ({ size, color, ...props }) => {
  return <StyledSelect size={size} color={color} {...props} />;
};

Select.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  color: PropTypes.oneOf(['background1', 'background2']).isRequired,
};

export default Select;
