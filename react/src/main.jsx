import './index.css'
import './styles/main.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Route path = "/" component={App}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)