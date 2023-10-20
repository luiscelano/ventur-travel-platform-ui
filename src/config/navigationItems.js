import BoxIcon from 'src/assets/icons/BoxIcon'
import HomeIcon from 'src/assets/icons/HomeIcon'
import goalIcon from 'src/assets/icons/pocket'
import ProfileGroupIcon from 'src/assets/icons/ProfileGroupIcon'
import ProfileIcon from 'src/assets/icons/ProfileIcon'
import PurseIcon from 'src/assets/icons/PurseIcon'
import SecurityIcon from 'src/assets/icons/SecurityIcon'
import getUserType from 'src/utils/getUserType'
import userTypes from 'src/utils/userTypes'

const navigationItems = [
  {
    id: 1,
    label: 'Inicio',
    redirect: '/app/home',
    Icon: HomeIcon
  },
  {
    id: 2,
    label: 'Perfil',
    redirect: '/app/profile',
    Icon: ProfileIcon
  },
  {
    id: 3,
    label: 'Cartera',
    redirect: '/app/sales',
    Icon: PurseIcon
  },
  {
    id: 4,
    label: 'Paquetes',
    redirect: '/app/packages',
    Icon: BoxIcon
  },
  /* {
    id: 5,
    label: 'Metas',
    redirect: '/app/metas',
    Icon: goalIcon
  }, */
  {
    id: 5,
    label: 'Clientes',
    redirect: '/app/queryCustomer',
    Icon: ProfileGroupIcon
  }
]

const adminNavigationItems = [
  {
    id: 6,
    label: 'Permisos',
    redirect: '/app/options',
    Icon: SecurityIcon
  },
  {
    id: 7,
    label: 'Metas',
    redirect: '/app/metas',
    Icon: goalIcon
  }
]

const getNavigationItems = () => {
  let items = [...navigationItems]
  const userType = getUserType()
  if (userType === userTypes.administrador || userType === userTypes.jefe) {
    items = [...items, ...adminNavigationItems]
  }
  return items
}

export default getNavigationItems
