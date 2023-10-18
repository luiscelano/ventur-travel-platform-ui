import React from 'react'
import PropTypes from 'prop-types'
import Styledblock from './styles'

const info = ({ type, size, color, ...props }) => {
  return <Styledblock size={size} color={color} {...props} />
}

info.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  color: PropTypes.oneOf(['background1', 'background2']).isRequired
}

export default info
