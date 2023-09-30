import BoxIcon from 'src/assets/icons/BoxIcon'
import HomeIcon from 'src/assets/icons/HomeIcon'
import ProfileGroupIcon from 'src/assets/icons/ProfileGroupIcon'
import ProfileIcon from 'src/assets/icons/ProfileIcon'
import PurseIcon from 'src/assets/icons/PurseIcon'

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
  {
    id: 5,
    label: 'Sucursales',
    redirect: '/app/subsidiaries',
    Icon: ProfileGroupIcon
  }
]

export default navigationItems
