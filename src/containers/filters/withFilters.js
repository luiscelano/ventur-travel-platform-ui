import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'

const withFilters = (Component) => (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [errorState, setErrorState] = useState({
      failed: false,
      message: null
    })
    //setFilters es un evento que asigna la venta
    //FILTRO PARA MES Y ANIO ---------------------------------------------------
    const [mes_filtro, setMes] = useState(null)
    const [anio_filtro, setAnio] = useState(null)
    const [sales, setSales] = useState(null)
    const mesRef = useRef(false)
  
    const getMes = useCallback(async () => {
      let path = '/Carteras'
      if (mes_filtro && anio_filtro){
        path = `/carteras?mes=${mes_filtro}&anio=${anio_filtro}`
      }
      try {
        const response = await httpClient.get(path)

        if (response.status === 200) {
          setSales(response.data.carteras)
          console.log('datos de carteras ', response.data.carteras)
          
          
        }
      } catch (error) {
        console.error('httpClient error:', error)
        setErrorState({
          failed: true,
          message: error.message
        })
      }
    }, [mes_filtro, anio_filtro])

    useEffect(() => { //tipo trigger, listeners que escuchan al componente
      if (mesRef.current) return
      mesRef.current = true
      setIsLoading(true)
      getMes()
    }, [getMes])

    useEffect(() => { //tipo trigger, listeners que escuchan al componente
      if(mes_filtro && anio_filtro){
        getMes()
      }
    }, [mes_filtro, anio_filtro])

  //---------------------------------------------------------------------------------
  //CONSULTAR A USUARIOS Y CLIENTES PARA SELECT -------------------------------------

    const [users, setUsers] = useState(null)
    const componentRef = useRef(false)
    const getUsers = useCallback(async () => {
      setIsLoading(true)
      try {
        const response = await httpClient.get('/usuarios')
        if (response.status === 200) {
          setUsers(response.data.usuarios)
        }
      } catch (error) {
        console.error('httpClient error:', error)
        setErrorState({
          failed: true,
          ...getHttpError(error)
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
      if (componentRef.current) return
      componentRef.current = true
      getUsers()
    }, [getUsers])

    useEffect(() => {
      if (clientesRef.current) return
      clientesRef.current = true
      setIsLoading(true)
      getclientes()
    }, [getclientes])
    //--------------------------------------------------------------------------------

    // FILTRO PARA VENDEDORES --------------------------------------------------------

    const [vendedor_filtro, setPorVendedor] = useState(null)
    const porvendedorRef = useRef(false)
  
    const getPorVendedor = useCallback(async () => {
      let path = '/Carteras'
      if (vendedor_filtro){
        path = `/carteras?idVendedor=${vendedor_filtro}`
      }
      try {
        const response = await httpClient.get(path)

        if (response.status === 200) {
          setSales(response.data.carteras)
          console.log('datos de carteras VENDEDOR ', response.data.carteras)
        }
      } catch (error) {
        console.error('httpClient error:', error)
        setErrorState({
          failed: true,
          message: error.message
        })
      }
    }, [vendedor_filtro])

    useEffect(() => { //tipo trigger, listeners que escuchan al componente
      if (porvendedorRef.current) return
      porvendedorRef.current = true
      setIsLoading(true)
      getPorVendedor()
    }, [getPorVendedor])

    useEffect(() => { //tipo trigger, listeners que escuchan al componente
      if(vendedor_filtro){
        getPorVendedor()
      }
    }, [vendedor_filtro])

    //---------------------------------------------------------------------------------

  // FILTRO PARA CLIENTES --------------------------------------------------------

  const [clientes_filtro, setPorCliente] = useState(null)
  const porclienteRef = useRef(false)

  const getPorCliente = useCallback(async () => {
    let path = '/Carteras'
    if (clientes_filtro){
      path = `/carteras?idCliente=${clientes_filtro}`
    }
    try {
      const response = await httpClient.get(path)

      if (response.status === 200) {
        setSales(response.data.carteras)
        console.log('datos de carteras cliente ', response.data.carteras)
      }
    } catch (error) {
      console.error('httpClient error:', error)
      setErrorState({
        failed: true,
        message: error.message
      })
    }
  }, [clientes_filtro])

  useEffect(() => { //tipo trigger, listeners que escuchan al componente
    if (porclienteRef.current) return
    porclienteRef.current = true
    setIsLoading(true)
    getPorCliente()
  }, [getPorCliente])

  useEffect(() => { //tipo trigger, listeners que escuchan al componente
    if(clientes_filtro){
      getPorCliente()
    }
  }, [clientes_filtro])

  //---------------------------------------------------------------------------------
  
    useEffect(() => {
      if (isLoading && (sales || errorState.failed) && (users || errorState.failed) && (clientes || errorState.failed)) setIsLoading(false)
    }, [sales, errorState, isLoading])

    const componentProps = { ...props, mes_filtro, anio_filtro, vendedor_filtro, clientes_filtro, sales, users, clientes, setAnio, setMes, setPorVendedor, setPorCliente } //manda a llamar los datos
  
    return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
  }
  
  export default withFilters