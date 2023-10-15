import React from 'react'
import Error from 'src/components/Error'

const withError = (condition, message, status) => (Component) => (props) => {
  if (condition) return <Error {...{ message, status }} />

  return <Component {...props} />
}

export default withError
