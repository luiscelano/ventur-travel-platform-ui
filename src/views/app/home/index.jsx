import React from 'react'
import withExampleContent from 'src/containers/withExampleContent'
import Typography from 'src/components/Typography'

const Home = () => {
  return (
    <>
      <Typography type="title" color="dark">
        Bienvenido, user
      </Typography>
      <h1></h1>
    </>
  )
}

export default withExampleContent(Home)
