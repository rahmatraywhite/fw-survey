import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageUser from './pages/user/PageUser'
import PageAdmin from './pages/admin/PageAdmin'
import PageSuperAdmin from './pages/superadmin/PageSuperAdmin'
import SelectUser from './pages/user/SelectUser'
import SurveyUser from './pages/user/SurveyUser'
import PenilaianUser from './pages/user/PenilaianUser'
import DashboardAdmin from './pages/admin/DashboardAdmin'
import StatDosen from './pages/admin/StatDosen'
import StatistikPengguna from './pages/admin/StatistikPengguna'
import StatMahasiwa from './pages/admin/StatMahasiwa'
import StatTendik from './pages/admin/StatTendik'
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
    },
    {
      path: '/dashboard',
      element: <DashboardAdmin />,
      children: [
        {
          index: true,
          path: 'statistik',
          element: <StatistikPengguna />,
        },
        {
          path: 'statistik/mahasiswa',
          element: <StatMahasiwa />,
        },
        {
          path: 'statistik/dosen',
          element: <StatDosen />,
        },
        {
          path: 'statistik/tendik',
          element: <StatTendik />,
        }
      ]
    }

  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App