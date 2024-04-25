import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />},
      { path: 'about', element: <About />},
      { path: 'gallery', element: <Gallery />},
      { path: 'contact', element: <Contact />},
      { path: 'home', element: <Home />},  
      { path: '*', element: <Error /> }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
