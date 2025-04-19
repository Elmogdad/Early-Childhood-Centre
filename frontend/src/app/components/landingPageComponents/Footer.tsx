import React from 'react'
import { Star } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                <Star size={16} />
              </div>
              <span className="text-lg font-bold">مركز البراعم للطفولة المبكرة</span>
            </div>
            
            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة - مركز البراعم للطفولة المبكرة</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer