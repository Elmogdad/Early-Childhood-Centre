
import { Star } from 'lucide-react'

function FeaturesSection() {
  return (
    <div>
              <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-green-600">لماذا تختار مركزنا؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-600">كادر تعليمي متميز</h3>
              <p className="text-gray-600">
                معلمون مؤهلون ومتخصصون في تعليم الطفولة المبكرة يهتمون بتطوير مهارات طفلك
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-600">بيئة آمنة وصحية</h3>
              <p className="text-gray-600">
                مرافق حديثة ومساحات آمنة صممت خصيصًا لتناسب احتياجات الأطفال الصغار
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-600">برامج تعليمية متنوعة</h3>
              <p className="text-gray-600">
                أنشطة تفاعلية وبرامج تعليمية شاملة تساعد على تنمية مهارات طفلك الإبداعية والاجتماعية
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesSection