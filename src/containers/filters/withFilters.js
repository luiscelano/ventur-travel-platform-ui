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
    const [mes_filtro, setMes] = useState(null)
    const [anio_filtro, setAnio] = useState(null)
    const [sales, setSales] = useState(null)
    const mesRef = useRef(false)
  
    const getMes = useCallback(async () => {
      let path = '/Carteras'
      if (mes_filtro && anio_filtro){
        path = `/carteras?mes=${mes_filtro}&anio=${anio_filtro}`
      }
      console.log('path ', path)
      console.log('mes ', mes_filtro)
      console.log('anio ', anio_filtro)
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
        console.log('mes1 ', mes_filtro)
        console.log('anio1 ', anio_filtro)
        console.log('funcionoooo')
      }
    }, [mes_filtro, anio_filtro])
  
    useEffect(() => {
      if (isLoading && (sales || errorState.failed)) setIsLoading(false)
    }, [sales, errorState, isLoading])
  
    const componentProps = { ...props, mes_filtro, anio_filtro, sales, setAnio, setMes } //manda a llamar los datos
  
    return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
  }
  
  export default withFilters