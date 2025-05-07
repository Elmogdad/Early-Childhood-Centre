import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import your pages or sections
import HomePage from './app/pages/HomePage'
import AboutPage from './app/pages/AboutPage'
import ProgramsPage from './app/pages/ProgramsPage'

// import Auth Pages
import LoginPage from './app/auth/LoginPage'
import RegisterPage from './app/auth/RegisterPage'



function App(): React.ReactElement {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        {/* Add more routes as needed */}
      </Routes>
   
    </Router>
  )
}

export default App
