import React, { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'
import exportCSVFile from 'src/utils/exportCSVFile'

const withSummary = (Component) => (props) => {
  const [filters, setFilters] = useState({
    group: 'anio'
  })

  const headers = {
    numeroVentas: 'numeroVentas',
    totalVendido: 'totalVendido',
    totalTuristas: 'totalTuristas',
    totalPaquetes: 'totalPaquetes',
    anio: 'anio'
  }
  const getFilters = Object.keys(filters)
    .map((key) => `${key}=${filters[key]}`)
    .join('&')
  const getSalesSummary = useCallback(async () => {
    const today = new Date()
    const filename = `sales-summary-${today.toISOString()}`
    try {
      const response = await httpClient.get('/carteras/summary?' + getFilters)
      if (response.status === 200) {
        exportCSVFile(headers, response.data.carteras, filename)
      }
    } catch (error) {
      console.error('httpClient error:', error)
      console.log('error en cliente')
    }
  }, [getFilters])

  useEffect(() => {
    // getSalesSummary()
  }, [])

  //---------------------------------------------------------------------------------

  const componentProps = { ...props, getSalesSummary } //manda a llamar los datos

  return <Component {...componentProps} />
}

export default withSummary
