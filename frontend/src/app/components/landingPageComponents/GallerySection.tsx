
import image2 from '../../../assets/2.jpg'
import image4 from '../../../assets/4.jpg'
import image5 from '../../../assets/5.jpg'
import image6 from '../../../assets/6.jpg'

function GallerySection() {
  return (
    <section id="gallery" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-600">معرض الصور</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src={image2} alt="صورة من المركز" className="rounded-lg hover:opacity-90 transition-opacity" />
        <img src={image5} alt="صورة من المركز" className="rounded-lg hover:opacity-90 transition-opacity" />
        <img src={image6} alt="صورة من المركز" className="rounded-lg hover:opacity-90 transition-opacity" />
        <img src={image4} alt="صورة من المركز" className="rounded-lg hover:opacity-90 transition-opacity" />
      </div>
    </div>
  </section>
  
  )
}

export default GallerySection