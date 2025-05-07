import React from 'react' // Required for TypeScript JSX type resolution
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import improveImage from '../../../assets/9.jpg'
import communcationImage from '../../../assets/7.jpg'
import apilityImage from '../../../assets/10.jpg'

interface Program {
  img: string
  age: string
  title: string
  desc: string
}

const programs: Program[] = [
  {
    img: improveImage,
    age: 'من عمر 2-3 سنوات',
    title: 'برنامج تنمية المهارات الحركية',
    desc: 'أنشطة متنوعة تساعد على تطوير المهارات الحركية الدقيقة والكبيرة لدى الأطفال في مرحلة مبكرة',
  },
  {
    img: communcationImage,
    age: 'من عمر 3-5 سنوات',
    title: 'برنامج اللغة والتواصل',
    desc: 'أنشطة تفاعلية لتنمية مهارات اللغة والتواصل، وتعزيز القدرة على التعبير والتحدث بطلاقة',
  },
  {
    img: apilityImage,
    age: 'من عمر 3-5 سنوات',
    title: 'برنامج تنمية القدرات العقلية',
    desc: 'أنشطة ذهنية محفزة تساعد في تطوير التفكير وحل المشكلات وتعزيز التركيز',
  },
]

const ProgramSection: React.FC = () => {
  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl font-bold text-center mb-12 text-green-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          برامجنا التعليمية
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: -20 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={program.img}
                alt={program.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-3">
                  {program.age}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-700">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.desc}</p>
                <button className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center">
                  تفاصيل أكثر <ChevronDown size={16} className="mr-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramSection
