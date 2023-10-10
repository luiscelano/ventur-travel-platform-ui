import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'

const withSales = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
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

  useEffect(() => {
    if (salesRef.current) return
    salesRef.current = true
    setIsLoading(true)
    getSales()
  }, [getSales])

  useEffect(() => {
    if (isLoading && (sales || errorState.failed)) setIsLoading(false)
  }, [sales, errorState, isLoading])

  const componentProps = { ...props, sales }

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withSales
