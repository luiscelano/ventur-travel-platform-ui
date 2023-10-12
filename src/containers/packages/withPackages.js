import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'

const withPackages = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
  const [packages, setPackages] = useState(null)
  const packagesRef = useRef(false)

  const getPackages = useCallback(async () => {
    try {
      const response = await httpClient.get('/paquetes')
      if (response.status === 200) {
        setPackages(response.data.paquetes)
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
    if (packagesRef.current) return
    packagesRef.current = true
    setIsLoading(true)
    getPackages()
  }, [getPackages])

  useEffect(() => {
    if (isLoading && (packages || errorState.failed)) setIsLoading(false)
  }, [packages, errorState, isLoading])

  const componentProps = { ...props, packages }

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withPackages