import Hero from '@/components/Hero';
import About from '@/sections/About';
import Products from '@/sections/Products';
import Quality from '@/sections/Quality';
import WhyUs from '@/sections/WhyUs';
import B2B from '@/sections/B2B';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Quality />
      <WhyUs />
      <B2B />
      
      {/* İletişim Alanı Section olarak ayrılmadıysa direkt burada veya component içinde kullanılabilir */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <span className="section-subtitle">Bize Ulaşın</span>
          <h2 className="section-title">İletişim Formu</h2>
          <p className="text-center text-gray-600 mb-10">
            Sorularınız ve sipariş talepleriniz için formu doldurabilirsiniz.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}