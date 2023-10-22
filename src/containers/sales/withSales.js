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
        setMeta(response.data.meta || [])
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
        setPaquetes(response.data.paquetes || {})
      }
    } catch (error) {
      console.error('httpClient error:', error)
      setErrorState({
        failed: true,
        message: error.message
      })
    }
  }, [])

  const [clientes, setClientes] = useState(null)
  const clientesRef = useRef(false)

  const getclientes = useCallback(async () => {
    try {
      const response = await httpClient.get('/clientes')
      if (response.status === 200) {
        setClientes(response.data.clientes || {})
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
  }, [getmetas]) //estos son elementos a los que debe escuchar, si se deja vacio solo se va a activar la primera vez que el elemento se cargue

  useEffect(() => {
    if (paquetesRef.current) return
    paquetesRef.current = true
    setIsLoading(true)
    getpaquetes()
  }, [getpaquetes])

  useEffect(() => {
    if (clientesRef.current) return
    clientesRef.current = true
    setIsLoading(true)
    getclientes()
  }, [getclientes])

  useEffect(() => {
    if (isLoading && (sales || errorState.failed) && (metas || errorState.failed) && (paquetes || errorState.failed) && (clientes || errorState.failed)) setIsLoading(false)
  }, [sales, metas, paquetes, clientes, errorState, isLoading])

  const componentProps = { ...props, sales, metas, paquetes, clientes } //manda a llamar los datos

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withSales
