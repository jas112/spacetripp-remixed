import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
    <BrowserRouter basename={"/spacetripp-remixed/"}>
      <Routes>
        <Route path="*" element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
