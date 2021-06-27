import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import '@/assets/scss/index.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import App from '@/App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
