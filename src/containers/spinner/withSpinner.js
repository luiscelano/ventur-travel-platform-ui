import React from 'react'
import Spinner from 'src/components/Spinner'

const withSpinner = (condition) => (Component) => (props) => {
  if (condition) return <Spinner />

  return <Component {...props} />
}

export default withSpinner
