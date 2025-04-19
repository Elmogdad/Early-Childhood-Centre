import React from 'react'
import image from '../../../assets/11.jpg'
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-green-500 to-green-600 text-white py-16 border-b-none">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-right mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-4">نرعى أطفالكم بحب واهتمام</h2>
        <p className="text-lg mb-6">بيئة تعليمية آمنة ومحفزة لنمو طفلك</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 py-2 px-6 rounded-lg font-medium transition-colors">
            سجل الآن
          </button>
          <button className="bg-white text-green-600 hover:bg-gray-100 py-2 px-6 rounded-lg font-medium transition-colors">
            تعرف علينا
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="bg-gray-300 p-1 rounded-lg shadow-lg">
          <img 
            src={image} 
            alt="أطفال يلعبون" 
            className="rounded-lg w-full z-40  h-auto object-cover transition-transform transform hover:scale-102"
          />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-white p-0 m-0" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
  </section>
  
  )
}

export default HeroSection