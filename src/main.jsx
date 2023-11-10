import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Loading from './components/layout/Loading.jsx'
import Home from './components/pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
