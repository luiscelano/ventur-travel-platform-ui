import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './styles';

const Field = ({ type, size, color, pass, ...props }) => {
  const isPassword = pass === 'true'; // Comprueba si pass es igual a "true"
  const disabled = type === 'disable';
  return (
    <StyledInput
      type={isPassword ? 'password' : 'text'} // Establece el tipo según el valor de pass
      disabled={disabled}
      size={size}
      color={color}
      {...props}
    />
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(['noDisable', 'disable']).isRequired,
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  color: PropTypes.oneOf(['background1', 'background2']).isRequired,
  pass: PropTypes.oneOf(['true', 'false']), // Añade la validación para el atributo "pass"
};

export default Field;