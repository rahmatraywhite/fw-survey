import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageUser from './pages/user/PageUser'
import PageAdmin from './pages/admin/PageAdmin'
import PageSuperAdmin from './pages/superadmin/PageSuperAdmin'
import SelectUser from './pages/user/SelectUser'
import SurveyUser from './pages/user/SurveyUser'
import PenilaianUser from './pages/user/PenilaianUser'
const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageUser />,
    },
    {
      path: '/select-user',
      element: <SelectUser />
    },
    {
      path: '/survey-user',
      element: <SurveyUser />
    },
    {
      path: '/penilaian-user',
      element: <PenilaianUser />
    },
    {
      path: '/admin',
      element: <PageAdmin />
    },
    {
      path: '/super-admin',
      element: <PageSuperAdmin />,
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App