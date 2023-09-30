import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './styles'

const typographyTypes = [
  {
    type: 'title',
    component: styles.CustomTitle
  },
  {
    type: 'subtitle',
    component: styles.CustomSubtitle
  },
  {
    type: 'paragraph1',
    component: styles.CustomParagraph1
  },
  {
    type: 'paragraph2',
    component: styles.CustomParagraph2
  }
]

const Typography = ({ children, type, ...props }) => {
  const TextWrapper = typographyTypes.find((typography) => typography.type === type).component
  if (!TextWrapper) throw new Error('No matching case for type')

  return <TextWrapper {...props}>{children}</TextWrapper>
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['title', 'subtitle', 'paragraph1', 'paragraph2']).isRequired,
  color: PropTypes.oneOf(['light', 'dark', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge'])
}

Typography.defaultProps = {
  type: 'paragraph'
}

export default Typography
