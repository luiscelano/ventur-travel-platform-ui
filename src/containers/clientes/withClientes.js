import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'

const withClientes = (Component) => (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [errorState, setErrorState] = useState({
      failed: false,
      message: null
    })

  //---------------------------------------------------------------------------------
  //CONSULTAR A CLIENTES PARA SELECT -------------------------------------
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
        console.log('error en cliente')
        setErrorState({
          failed: true,
          message: error.message
        })
      }
    }, [])

    useEffect(() => {
      if (clientesRef.current) return
      clientesRef.current = true
      setIsLoading(true)
      getclientes()
    }, [getclientes])

  //---------------------------------------------------------------------------------
  
    useEffect(() => {
      if (isLoading && (clientes || errorState.failed)) setIsLoading(false)
    }, [clientes, errorState, isLoading])

    const componentProps = { ...props, clientes} //manda a llamar los datos
  
    return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
  }
  
  export default withClientes