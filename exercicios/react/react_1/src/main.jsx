import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Home from './components/routes/Home';
import Contact from './components/routes/Contact';
import ErrorPage from './components/routes/ErrorPage.jsx'
import ContactDateils from './components/routes/ContactDateils.jsx'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'contact/:id',
        element: <ContactDateils />
      },
      {
        path: 'oldContact',
        element: <Navigate to='/contact' />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
