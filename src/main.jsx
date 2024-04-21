import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Hero from './assets/Components/Hero/Hero.jsx'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)
