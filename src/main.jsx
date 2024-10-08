import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import Layout from './Layout'
import Events from './components/Eventss/Events'
import Admin from './components/Admin/Admin'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Landing from './components/Landing/Landing'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='events' element={<Events/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='admin' element={<Admin/>}/>
      <Route path='landing' element={<Landing/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_Auth_Domain}
    clientId={import.meta.env.VITE_Auth_ClientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>,
)
