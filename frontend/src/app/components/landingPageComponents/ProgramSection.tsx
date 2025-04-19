import React from 'react'
import { ChevronDown } from 'lucide-react'
import improveImage from '../../../assets/9.jpg'
import communcationImage from '../../../assets/7.jpg'
import apilityImage from '../../../assets/10.jpg'

function ProgramSection() {
  return (
    <section id="programs" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-600">برامجنا التعليمية</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Program 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src={improveImage} 
            alt="برنامج تنمية المهارات" 
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-3">
              من عمر 2-3 سنوات
            </div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">برنامج تنمية المهارات الحركية</h3>
            <p className="text-gray-600 mb-4">
              أنشطة متنوعة تساعد على تطوير المهارات الحركية الدقيقة والكبيرة لدى الأطفال في مرحلة مبكرة
            </p>
            <button className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center">
              تفاصيل أكثر <ChevronDown size={16} className="mr-1" />
            </button>
          </div>
        </div>
        
        {/* Program 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src={communcationImage}
            alt="برنامج اللغة والتواصل" 
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-3">
              من عمر 3-5 سنوات
            </div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">برنامج اللغة والتواصل</h3>
            <p className="text-gray-600 mb-4">
              أنشطة تفاعلية لتنمية مهارات اللغة والتواصل، وتعزيز القدرة على التعبير والتحدث بطلاقة
            </p>
            <button className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center">
              تفاصيل أكثر <ChevronDown size={16} className="mr-1" />
            </button>
          </div>
        </div>
        {/* Program 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src={apilityImage} 
            alt="برنامج تنمية القدرارات العقلية" 
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-3">
              من عمر 3-5 سنوات
            </div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">برنامج اللغة والتواصل</h3>
            <p className="text-gray-600 mb-4">
              أنشطة تفاعلية لتنمية مهارات اللغة والتواصل، وتعزيز القدرة على التعبير والتحدث بطلاقة
            </p>
            <button className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center">
              تفاصيل أكثر <ChevronDown size={16} className="mr-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProgramSection