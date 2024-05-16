import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
 
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact us/Contact.jsx'
import Project from './components/Project/Project.jsx'
import Cards from './components/Cards/Cards.jsx'
import User from './components/User/User.jsx'
import LogIn from './components/Log In/LogIn.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
 

// const router =createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     childern:[
//      {
//        path:"",
//        element:<Home/>
       
//     },

//     {
//       path:"about",
//       element:<About/>
//     }
//     ]
//   }
// ])


//  this is a second way to create react router 
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='Contact' element={<Contact />} />
    <Route path='Project' element={<Project />} >
         <Route path='Cards' element={<Cards />} />
           </Route>
    <Route path='user/:userid' element={<User />} />
    {/* <Route path='LogIn' element={<LogIn/>} /> */}
    <Route 
    loader={githubInfoLoader}
    path='github' 
    element={<Github />}
     />
     </Route>
     
 )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
