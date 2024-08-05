import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'
import './index.css'

const updateSW = registerSW({
  onNeedRefresh() {
    // Notify user of new content
  },
  onOfflineReady() {
    // Notify user the app is ready to work offline
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
