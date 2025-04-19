import React from 'react'
import { useState } from 'react'
import { Star, Menu, X } from 'lucide-react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-green-600 text-white sticky top-0 z-10 shadow-md">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center">
          <Star size={24} />
        </div>
        <h1 className="text-xl md:text-2xl font-bold">مركز البراعم للطفولة المبكرة</h1>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 rtl:space-x-reverse">
        <a href="#" className="hover:text-orange-300 font-medium">الرئيسية</a>
        <a href="#about" className="hover:text-orange-300 font-medium">من نحن</a>
        <a href="#programs" className="hover:text-orange-300 font-medium">برامجنا</a>
        <a href="#gallery" className="hover:text-orange-300 font-medium">معرض الصور</a>
        <a href="#contact" className="hover:text-orange-300 font-medium">اتصل بنا</a>
      </nav>
      
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