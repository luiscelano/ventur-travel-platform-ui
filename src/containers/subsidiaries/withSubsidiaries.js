import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'
//use state permite modificar datos dentro del dom sin que afecte la pagina

const withSubsidiaries = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
  //setSales es un evento que asigna la venta
  const [subsidiary, setSubsidiary] = useState(null)
  const subsidiaryRef = useRef(false)

  const getSubsidiaries = useCallback(async () => {
    try {
      const response = await httpClient.get('/contactos')
      if (response.status === 200) {
        setSubsidiary(response.data.contactos)
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
    if (subsidiaryRef.current) return
    subsidiaryRef.current = true
    setIsLoading(true)
    getSubsidiaries()
  }, [getSubsidiaries])

  useEffect(() => {
    if (isLoading && (subsidiary || errorState.failed)) setIsLoading(false)
  }, [subsidiary, errorState, isLoading])

  const componentProps = { ...props, subsidiary } //manda a llamar los datos

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withSubsidiaries
