import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github, { gitHubInfo } from './components/Github/Github.jsx'

// method 1

// const router=createBrowserRouter([{
//   path:'/',  // main path that 
//   element:<Layout/>,
//   children:[
//     {
//       path:"", // when there is bnothing home should be appear on the webapge
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contactUs",
//       element:<ContactUs/>
//     }

//   ]
// }
// ])

//method 2

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path = '' element={<Home/>}/>
      <Route path = 'about' element={<About/>}/>
      <Route path = 'contactUs' element={<ContactUs/>}/>
      <Route path = 'user/:id' element={<User/>}/>
      <Route path = 'github' loader={gitHubInfo} element={<Github/>}/>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
