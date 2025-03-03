// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import {  BrowserRouter} from "react-router-dom";

const queryCLient  = new QueryClient()
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryCLient}>
    <App />
    </QueryClientProvider>
  </BrowserRouter>
  
)
