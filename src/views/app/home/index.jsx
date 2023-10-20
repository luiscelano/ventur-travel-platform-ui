import React from 'react'
import withExampleContent from 'src/containers/withExampleContent'
import Typography from 'src/components/Typography'
import { getProfile } from 'src/utils/storage'

const Home = () => {
  const user = getProfile()
  console.log('user ', user)
  return (
    <>
      <Typography type="title" color="dark">
        Buen día, {user.nombre}
      </Typography>
      
    </>
  )
}

export default withExampleContent(Home)
