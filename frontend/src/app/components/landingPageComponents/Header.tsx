
import { useState } from 'react'
import {  Menu, X,  } from 'lucide-react'
import Logo from '../Logo'


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-green-600 text-white sticky top-0 z-10 shadow-md">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
     
    <Logo /> 
      {/* Desktop Navigation */}
      <nav className="hidden md:flex  space-x-6 rtl:space-x-reverse">
        <a href="#" className="hover:text-orange-300 font-small">الرئيسية</a>
        <a href="#about" className="hover:text-orange-300 font-small">من نحن</a>
        <a href="#programs" className="hover:text-orange-300 font-normal">برامجنا</a>
        <a href="#gallery" className="hover:text-orange-300 font-normal">معرض الصور</a>
        <a href="#contact" className="hover:text-orange-300 font-normal mr-4">اتصل بنا</a>
      </nav>
      
      <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
       <div>
       <a href="/login" className="hidden md:inline-block bg-orange-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-orange-600 transition duration-200">
          تسجيل الدخول  
        </a>
       </div>
        <div>
          <a href="/register" className="hidden md:inline-block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-200">
            تسجيل جديد
          </a>
  </div>
      </div>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    
    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden bg-green-700 py-4 px-4">
        <nav className="flex flex-col space-y-3">
          <a href="#" className="hover:text-orange-300 font-medium">الرئيسية</a>
          <a href="#about" className="hover:text-orange-300 font-medium">من نحن</a>
          <a href="#programs" className="hover:text-orange-300 font-medium">برامجنا</a>
          <a href="#gallery" className="hover:text-orange-300 font-medium">معرض الصور</a>
          <a href="#contact" className="hover:text-orange-300 font-medium">اتصل بنا</a>
        </nav>
      </div>
    )}
  </header>
  )
}

export default Header