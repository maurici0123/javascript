import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import About from './pages/Test.tsx'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router> */}
  </StrictMode>,
)
