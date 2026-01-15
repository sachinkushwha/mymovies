import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import Signup from './components/singup.jsx';
import  Login  from './components/login.jsx';
import MovieForm from './components/uploadmovies.jsx';
import { Profile } from './components/profile/profile.jsx';
import { Update } from './components/profile/updateform.jsx';
import { UserProfile } from './components/userprofile.jsx';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
// import { Onemovie } from './components/onemovie.jsx';

const queryClient=new QueryClient();

const router=createBrowserRouter([
  {
    path:'/',element:<App/>,children:[
      
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
      },
      {
        path:'/update', element:<Update/>
      },
      {
        path:'/userprofile/:userId', element:<UserProfile/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}/>
  </QueryClientProvider>
  </StrictMode>,
)
