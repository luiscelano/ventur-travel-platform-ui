import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'

const withUserAccessList = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
  const [accessList, setAccessList] = useState(null)
  const [userPermissions, setUserPermissions] = useState(null)
  const componentRef = useRef(false)

  const getUserPermissions = useCallback(async () => {
    try {
      const response = await httpClient.get('/usuarios/permisos')
      if (response.status === 200) {
        setUserPermissions(response.data.permisos)
      }
    } catch (error) {
      console.error('httpClient error:', error)
      setErrorState({
        failed: true,
        message: (error.response && error.response.data && error.response.data.message) || error.message
      })
    }
  }, [])

  const getAccessList = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await httpClient.get('/auth/access')
      if (response.status === 200) {
        setAccessList(response.data.accesos)
      }
    } catch (error) {
      console.error('httpClient error:', error)
      setErrorState({
        failed: true,
        message: (error.response && error.response.data && error.response.data.message) || error.message
      })
    }
  }, [])

  useEffect(() => {
    if (componentRef.current) return
    componentRef.current = true
    getAccessList()
    getUserPermissions()
  }, [getAccessList, getUserPermissions])

  useEffect(() => {
    if (isLoading && (accessList || errorState.failed)) setIsLoading(false)
  }, [accessList, errorState, isLoading])

  const componentProps = { ...props, accesos: accessList, permisos: userPermissions, getAccessList }

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withUserAccessList
