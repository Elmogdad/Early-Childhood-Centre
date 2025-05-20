import React from 'react'
import { Star } from 'lucide-react'

interface AuthLayoutProps {
  title: string
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-green-50 px-4">

  
      <div className="relative not-first:not-last-of-type:bg-white p-8 rounded-xl shadow-md w-full max-w-md items-center">
      <a href="/"  className="absolute top-[-50px] mx-auto flex items-center space-x-2">
      <div className="h-10 w-10 rounded-full bg-green-500 text-green-50 flex items-center justify-center">
          <Star size={24} />
        </div>
            <h1 className="text-2xl font-bold text-green-600">مركز الطفولة المبكرة</h1>
            
        </a>
        
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
