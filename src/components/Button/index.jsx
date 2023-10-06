import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

const Button = ({ size, color, children, ...props }) => {
  return <StyledButton size={size} color={color} {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']).isRequired,
  color: PropTypes.oneOf(['background1', 'background2']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
