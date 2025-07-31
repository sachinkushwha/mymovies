import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { Index } from './pages/index.jsx';
import App from './App.jsx'
import Signup from './components/singup.jsx';
import  Login  from './components/login.jsx';
import MovieForm from './components/uploadmovies.jsx';
import { Profile } from './components/profile/profile.jsx';
// import { Onemovie } from './components/onemovie.jsx';

const router=createBrowserRouter([
  {
    path:'/',element:<App/>,children:[
      {
        path:'/',element:<Index/>
      },
      {
        path:'/sinup',element:<Signup/>
      }, 
      {
        path:'/login',element:<Login/>
      },
      {
        path:'/upload',element:<MovieForm/>
      },
      // {
      //   path:'/movie/:id',element:<Onemovie/>
      // }
      {
        path:'/profile', element:<Profile/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
