import React from 'react'
import withExampleContent from 'src/containers/withExampleContent'
import Typography from 'src/components/Typography'

const Home = () => {
  return (
    <>
      <Typography type="paragraph1" size="small">
        Bienvenido, user
      </Typography>
      <h1></h1>
    </>
  )
}

export default withExampleContent(Home)
