import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import bgVideo from '../src/assets/bg_video.mp4'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <video src={bgVideo} autoPlay loop muted />
    <App />
  </React.StrictMode>,
)
