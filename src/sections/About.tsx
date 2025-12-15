import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* RESİM ALANI (Güncellendi) */}
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl group">
           <Image 
             src="/images/about/fabrika.jpg"  // Resminizin yolu
             alt="HibeFındık Üretim Tesisi" 
             fill 
             className="object-cover group-hover:scale-105 transition-transform duration-700" 
             priority // Sayfanın üstlerinde olduğu için hızlı yüklemesi için
           />
           
           {/* İsteğe bağlı: Resmin üzerine hafif bir karartma (overlay) eklersek yazı daha şık durur diye kaldırdım, resim net görünsün. */}
        </div>
        
        {/* YAZI ALANI */}
        <div>
          <span className="text-[#C89B5C] font-bold tracking-widest uppercase text-sm">Hikayemiz</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5A3A1A] mt-2 mb-6">Nesillerdir Süren Fındık Tutkusu</h2>
          <p className="text-gray-600 mb-6">
            HibeFındık olarak, Karadeniz’in kalbinde, en verimli topraklarda yetişen fındıkları işliyoruz. 
            Geleneksel tarım yöntemlerini modern teknoloji ile birleştirerek, hem yerel üreticiyi destekliyor 
            hem de global standartlarda üretim yapıyoruz.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C89B5C] rounded-full"></span>
              Yıllık 5000+ Ton İşleme Kapasitesi
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C89B5C] rounded-full"></span>
              Uluslararası Gıda Sertifikaları
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C89B5C] rounded-full"></span>
              Sürdürülebilir Tarım Politikası
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;