import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
// Import your pages or sections
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'

// import Auth Pages
import LoginPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'




function App(): React.ReactElement {
  return (
    <AuthProvider>
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
   
    </AuthProvider>
  )
}

export default App
