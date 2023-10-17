import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'
//use state permite modificar datos dentro del dom sin que afecte la pagina

const withSales = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
  //setSales es un evento que asigna la venta
  const [sales, setSales] = useState(null)
  const salesRef = useRef(false)

  const getSales = useCallback(async () => {
    try {
      const response = await httpClient.get('/carteras')
      if (response.status === 200) {
        setSales(response.data.carteras)
      }
    } catch (error) {
      console.error('httpClient error:', error)
      setErrorState({
        failed: true,
        message: error.message
      })
    }
  }, [])

  const [metas, setMeta] = useState(null)
  const metasRef = useRef(false)

  const getmetas = useCallback(async () => {
    try {
      const response = await httpClient.get('/metas')
      if (response.status === 200) {
        setMeta(response.data.meta || {})
      }
    } catch (error) {
      console.error('httpClient error:', error)
      setErrorState({
        failed: true,
        message: error.message
      })
    }
  }, [])

  const [paquetes, setPaquetes] = useState(null)
  const paquetesRef = useRef(false)

  const getpaquetes = useCallback(async () => {
    try {
      const response = await httpClient.get('/paquetes')
      if (response.status === 200) {
        setPaquetes(response.data.meta || {})
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
    if (salesRef.current) return
    salesRef.current = true
    setIsLoading(true)
    getSales()
  }, [getSales])

  useEffect(() => {
    if (metasRef.current) return
    metasRef.current = true
    setIsLoading(true)
    getmetas()
  }, [getmetas])

  useEffect(() => {
    if (paquetesRef.current) return
    paquetesRef.current = true
    setIsLoading(true)
    getpaquetes()
  }, [getpaquetes])

  useEffect(() => {
    if (isLoading && (sales || errorState.failed) && (metas || errorState.failed) && (paquetes || errorState.failed)) setIsLoading(false)
  }, [sales, metas, paquetes, errorState, isLoading])

  const componentProps = { ...props, sales, metas, paquetes } //manda a llamar los datos

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withSales
