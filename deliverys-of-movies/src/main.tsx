import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/styles/index.scss'
import 'font-awesome/css/font-awesome.min.css'

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
