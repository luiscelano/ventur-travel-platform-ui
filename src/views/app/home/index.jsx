import React from 'react'
import { useDispatch } from 'react-redux'
import * as counterActions from 'src/redux/counter/actions'
import withExampleContent from 'src/containers/withExampleContent'
import Typography from 'src/components/Typography'

const Home = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Typography type="title" color="dark">
        Home
      </Typography>
      <button aria-label="Increment value" onClick={() => dispatch(counterActions.incrementCounter())}>
        Increment
      </button>
      <button aria-label="Decrement value" onClick={() => dispatch(counterActions.decrementCounter())}>
        Decrement
      </button>
      <button aria-label="IncrementByAmount value" onClick={() => dispatch(counterActions.incrementCounterByAmount(2))}>
        Increment by amount of 2
      </button>
    </>
  )
}

export default withExampleContent(Home)
