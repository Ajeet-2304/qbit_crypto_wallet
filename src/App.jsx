
// import { useState } from 'react';
import './App.css';
import Wallet from "./components/Wallet";
// import Withdraw from './components/Withdraw';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Withdraw from './components/Withdraw';
import Layout from './components/Layout';
import Notification from './components/Notification';
import Chart from './components/Chart';
import Profile from './components/Profile';

function App() {
  // const [isMobile, setIsMobile] = useState(document.body.style.maxWidth='400px');
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path="/" element={<Wallet/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/chart' element={<Chart/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Route>
    )
  )
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* {
        setIsMobile(isMobile ? <RouterProvider router={router}/> : document.write(<div style={{width:'100vw',height:'100vh',margin:'auto'}}><h1>Please set your screen resolution to mobile devices 🙂 </h1></div>))
      } */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
