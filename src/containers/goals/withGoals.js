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
  const [goals, setGoals] = useState(null)
  const goalsRef = useRef(false)

  const getGoals = useCallback(async () => {
    try {
      const response = await httpClient.get('/metas')
      if (response.status === 200) {
        setGoals(response.data.meta)
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
    if (goalsRef.current) return
    goalsRef.current = true
    setIsLoading(true)
    getGoals()
  }, [getGoals])

  useEffect(() => {
    if (isLoading && (goals || errorState.failed)) setIsLoading(false)
  }, [goals, errorState, isLoading])

  const componentProps = { ...props, goals }

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withGoals
