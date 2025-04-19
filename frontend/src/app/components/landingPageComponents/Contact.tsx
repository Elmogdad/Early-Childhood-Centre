import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-16 bg-green-600 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">اتصل بنا</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center">
            <Phone size={24} className="mr-4" />
            <div>
              <h4 className="font-semibold">اتصل بنا</h4>
              <p>+123-456-7890</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Mail size={24} className="mr-4" />
            <div>
              <h4 className="font-semibold">البريد الإلكتروني</h4>
              <p>info@earlychildhood.com</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <MapPin size={24} className="mr-4" />
            <div>
              <h4 className="font-semibold">العنوان</h4>
              <p>شارع الرياض، حي النرجس، المدينة</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Clock size={24} className="mr-4" />
            <div>
              <h4 className="font-semibold">ساعات العمل</h4>
              <p>الأحد - الخميس: 7:00 ص - 3:00 م</p>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-2">
          <form className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">الاسم</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">الموضوع</label>
              <input 
                type="text" 
                id="subject"
                className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">الرسالة</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
            
            <div>
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 py-2 px-6 rounded-lg font-medium transition-colors">
                إرسال الرسالة
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Contact