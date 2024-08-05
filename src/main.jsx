import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom'

const updateSW = registerSW({
  onNeedRefresh() {
    // Notify user of new content
  },
  onOfflineReady() {
    // Notify user the app is ready to work offline
  }
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/spacetripp-remixed/" replace />} />
      <Route path="/spacetripp-remixed/" element={<App />} />
    </>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
