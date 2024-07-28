import React from 'react'
import ReactDOM from 'react-dom/client'


import  './States/i18n/i18n.js';
import "./States/LanguageSwitcher.js"


import './assets/styles/bootstrap/bootstrap-grid.css'
// import './assets/styles/bootstrap/bootstrap-grid.rtl.css'
import './assets/styles/bootstrap/bootstrap-utilities.css'
// import './assets/styles/bootstrap/bootstrap-utilities.rtl.css'
import './assets/styles/others/colors.css'
import './assets/styles/others/fonts.css'
import './assets/styles/others/index.css'


import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
