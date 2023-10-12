import { createBrowserRouter, redirect } from 'react-router-dom'
// import redirectIfAuthenticated from './loaders/redirectIfAuthenticated'
import Home from 'src/views/app/home'
import Profile from 'src/views/app/profile'
import Auth from 'src/views/auth'
import AppLayout from 'src/components/AppLayout'
import Posts from 'src/views/app/posts'
import Sales from 'src/views/app/sales'
import Packages from './views/app/packages'
import Metas from './views/app/goals'
import Prueba from './views/app/prueba'
import PackagesMod from './views/app/packagesModification'
import ClientesMod from './views/app/agregarClientes'
import AssignPerm from './views/app/assignPerm'
import QueryCustomer from './views/app/queryCustomer'
import CreateProfile from './views/app/createProfile'
import SalesDetails from './views/app/sales_details'
import UserAccessView from 'src/views/app/access'

const routes = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/app')
  },
  {
    path: '/app',
    Component: AppLayout,
    // loader: redirectIfAuthenticated,
    children: [
      {
        path: '',
        loader: () => redirect('home')
      },
      {
        path: 'home',
        Component: Home
      },
      {
        path: 'profile',
        Component: Profile
      },
      {
        path: 'posts',
        Component: Posts
      },
      {
        path: 'sales',
        Component: Sales
      },
      {
        path: 'packages',
        Component: Packages
      },
      {
        path: 'metas',
        Component: Metas
      },
      {
        path: 'prueba',
        Component: Prueba
      },
      {
        path: 'packagesModification',
        Component: PackagesMod
      },
      {
        path: 'agregarClientes',
        Component: ClientesMod
      },
      {
        // Asignar un path adecuado
        path: 'assignPerm',
        Component: AssignPerm
      },
      {
        // Asignar un path adecuado
        path: 'queryCustomer',
        Component: QueryCustomer
      },
      {
        // Asignar un path adecuado
        path: 'createProfile',
        Component: CreateProfile
      },
      {
        path: 'salesdetails',
        Component: SalesDetails
      },
      {
        path: 'access',
        Component: UserAccessView
      }
    ]
  },
  { path: '/auth', Component: Auth }
])

export default routes
