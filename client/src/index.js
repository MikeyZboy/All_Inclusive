// import './styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import './styles/globals.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
//import { Configuration } from '@react-md/layout'

ReactDOM.render(
    //<Configuration>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
   // </Configuration>
   ,
  document.getElementById('root')
)
