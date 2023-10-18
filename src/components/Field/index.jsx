import React from 'react'
import PropTypes from 'prop-types'
import StyledInput from './styles'

const Field = ({ type, size, color, ...props }) => {
  return <StyledInput size={size} color={color} {...props} />
}

Field.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  color: PropTypes.oneOf(['background1', 'background2']).isRequired
}

export default Field
