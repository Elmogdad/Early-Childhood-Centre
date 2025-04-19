import React from 'react'

function TestimonialsSection() {
  return (
    <section className="py-16 bg-green-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-600">آراء أولياء الأمور</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-orange-200 flex items-center justify-center text-orange-500 mr-4">
              <span className="font-bold">س</span>
            </div>
            <div>
              <h4 className="font-semibold ">سارة محمد</h4>
              <p className="text-gray-500 text-sm">والدة أحمد</p>
            </div>
          </div>
          <p className="text-gray-600">
            "لقد لاحظت تطورًا كبيرًا في مهارات ابني اللغوية والاجتماعية منذ التحاقه بالمركز. المعلمون رائعون ويهتمون فعلًا بالأطفال."
          </p>
        </div>
        
        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4 space-x-4 rtl:space-x-reverse">
            <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-500 mr-4">
              <span className="font-bold">م</span>
            </div>
            <div>
              <h4 className="font-semibold">محمد علي</h4>
              <p className="text-gray-500 text-sm">والد ليلى</p>
            </div>
          </div>
          <p className="text-gray-600">
            "المركز يوفر بيئة آمنة ومحفزة لابنتي. الأنشطة متنوعة وممتعة وأرى تقدمها يوميًا في جميع المجالات."
          </p>
        </div>
        
        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-500 mr-4">
              <span className="font-bold">ن</span>
            </div>
            <div>
              <h4 className="font-semibold">نورة عبدالله</h4>
              <p className="text-gray-500 text-sm">والدة سلمى</p>
            </div>
          </div>
          <p className="text-gray-600">
            "أحب الاهتمام الشخصي الذي يتلقاه كل طفل في المركز. المعلمون يهتمون بفهم احتياجات كل طفل وتلبيتها."
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TestimonialsSection