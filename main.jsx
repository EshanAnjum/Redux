import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import { MyStore } from './redux/Store.js'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={MyStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
