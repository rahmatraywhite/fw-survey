import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageUser from './pages/user/PageUser'
import PageAdmin from './pages/admin/PageAdmin'
import PageSuperAdmin from './pages/superadmin/PageSuperAdmin'
const App = () => {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageUser/>
    },
    {
      path: '/admin',
      element: <PageAdmin/>
    },
    {
      path: '/super-admin',
      element: <PageSuperAdmin/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App