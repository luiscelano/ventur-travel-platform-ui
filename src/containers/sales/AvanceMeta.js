import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'
//use state permite modificar datos dentro del dom sin que afecte la pagina

const withMeta = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
  //setMeta es un evento que asigna la venta
  const [metas, setMeta] = useState(null)
  const metasRef = useRef(false)

  const getmetas = useCallback(async () => {
    try {
      const response = await httpClient.get('/meta')
      if (response.status === 200) {
        setMeta(response.data.meta)
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
    if (metasRef.current) return
    metasRef.current = true
    setIsLoading(true)
    getmetas()
  }, [getmetas])

  useEffect(() => {
    if (isLoading && (metas || errorState.failed)) setIsLoading(false)
  }, [metas, errorState, isLoading])

  const componentProps = { ...props, metas } //manda a llamar los datos

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withMeta
