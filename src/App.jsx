import './App.css';
import Wallet from "./components/Wallet";
// import Withdraw from './components/Withdraw';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Withdraw from './components/Withdraw';
import Layout from './components/Layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path="/" element={<Wallet/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
      </Route>
    )
  )
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
