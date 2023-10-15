import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'
import getHttpError from 'src/utils/getHttpError'
import { getProfile } from 'src/utils/storage'

const withUsers = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
  const [users, setUsers] = useState(null)
  const [userPermissions, setUserPermissions] = useState(null)
  const componentRef = useRef(false)
  const profile = getProfile() || {}

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
        ...getHttpError(error)
      })
    }
  }, [])

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

  useEffect(() => {
    if (componentRef.current) return
    componentRef.current = true
    getUsers()
    getUserPermissions()
  }, [getUsers, getUserPermissions])

  useEffect(() => {
    if (isLoading && (users || errorState.failed)) setIsLoading(false)
  }, [users, errorState, isLoading])

  const filteredUsers = Array.from(users || []).filter((user) => user.idUsuario !== profile.idUsuario)
  const componentProps = { ...props, usuarios: filteredUsers, permisos: userPermissions, refetchUsers: getUsers }

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message, errorState.status)(Component))(
    componentProps
  )
}

export default withUsers
