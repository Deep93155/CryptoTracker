
// import { useState } from 'react';
import './App.css'
import Home from './pages/Home';
// import { currencyContext } from './Context.API/currencyContextAPI';

function App() {
  // const [currency,setCurrency] = useState('usd')
  return (
    <>
    <h1 className='font-bold text-blue-600 mt-1 text-3xl'>Welcome to CryptoTracker</h1>
    {/* <CryptoStatus text = {`the response is ${execution()}`} /> */}
    {/* <currencyContext.Provider value={{currency,setCurrency}}> */}
      <Home/>
    {/* </currencyContext.Provider> */}
    </>
  )
}

export default App
