import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import './fonts/CaviarDreams_Bold.ttf'
import './fonts/CaviarDreams_BoldItalic.ttf'
import Router from './Router'
import './utils/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
