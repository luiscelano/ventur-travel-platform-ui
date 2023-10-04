import { createBrowserRouter, redirect } from 'react-router-dom'
// import redirectIfAuthenticated from './loaders/redirectIfAuthenticated'
import Home from 'src/views/app/home'
import Profile from 'src/views/app/profile'
import Auth from 'src/views/auth'
import AppLayout from 'src/components/AppLayout'
import Posts from 'src/views/app/posts'
import Sales from 'src/views/app/sales'
import Packages from './views/app/packages'
import Subsidiaries from './views/app/subsidiaries'
import Prueba from './views/app/prueba'
import PackagesMod from './views/app/packagesModification'
import ClientesMod from './views/app/agregarClientes'

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
        path: 'subsidiaries',
        Component: Subsidiaries
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
      }
    ]
  },
  { path: '/auth', Component: Auth }
])

export default routes
