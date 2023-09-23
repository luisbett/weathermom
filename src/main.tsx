import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import LanguageSwitcher from './components/LanguageSwitcher.tsx'

import './plugins/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageSwitcher />
    <App />
  </React.StrictMode>,
)
