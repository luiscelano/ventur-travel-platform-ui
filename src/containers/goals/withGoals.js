import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'

const withGoals = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
  const [goals, setGoals] = useState([]) 

  const getGoals = useCallback(async () => {
    try {
      const response = await httpClient.get('/metas/all') 
      if (response.status === 200) {
        setGoals(response.data.metas || []);
      }
    } catch (error) {
      console.error('httpClient error:', error)
      setErrorState({
        failed: true,
        message: error.message
      })
    }
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getGoals()
  }, [getGoals])

  useEffect(() => {
    if (isLoading || errorState.failed) setIsLoading(false)
  }, [goals, errorState, isLoading])

  const componentProps = { ...props, goals, getGoals }

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withGoals
