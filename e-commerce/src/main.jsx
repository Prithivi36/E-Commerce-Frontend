/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './StateManagement/Store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <App />
  </Provider>
)
