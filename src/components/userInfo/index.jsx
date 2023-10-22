import React from 'react'
import PropTypes from 'prop-types'
import Styledblock from './styles'

const InfoField = ({ type, size, color, ...props }) => {
  return <Styledblock size={size} color={color} {...props} />
}

InfoField.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  color: PropTypes.oneOf(['background1', 'background2']).isRequired
}

export default InfoField
