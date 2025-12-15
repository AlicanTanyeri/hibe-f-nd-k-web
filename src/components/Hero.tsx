import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    // min-h-screen: Ekranı tam kaplaması için
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* 1. ARKA PLAN RESMİ VE KAHVERENGİ PERDE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg" // Resim yolunuzun doğru olduğundan emin olun
          alt="HibeFındık Ana Kapak"
          fill // Resmi tüm alana yayar
          className="object-cover" // Resmi bozmadan kırparak sığdırır
          priority // İlk açılışta hemen yüklenir
        />
        
        {/* --- GÜNCELLENEN KISIM BURASI --- */}
        {/* Kahverengi Perde (Overlay) */}
        {/* bg-[#5A3A1A]: Sitenin koyu kahve ana rengi */}
        {/* /70: %70 opaklık (Daha koyu isterseniz /80 yapabilirsiniz) */}
        <div className="absolute inset-0 bg-[#5A3A1A]/70"></div>
        {/* -------------------------------- */}
      </div>

      {/* 2. ORTA YAZI ALANI (Beyaz renkli) */}
      <div className="relative z-10 container text-center px-4">
        {/* Üstteki küçük etiket */}
        <span className="inline-block py-1 px-3 rounded-full bg-[#C89B5C]/20 border border-[#C89B5C] text-[#C89B5C] text-sm font-semibold mb-6 backdrop-blur-sm">
          🌱 Doğadan Sofranıza %100 Doğal
        </span>
        
        {/* Ana Başlık */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Karadeniz'in En Seçkin <br />
          <span className="text-[#C89B5C]">Fındık Mahsulleri</span>
        </h1>
        
        {/* Alt Açıklama */}
        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md font-medium">
          Giresun ve Ordu'nun bereketli topraklarından toplanan, 
          özenle işlenen ve dünyaya sunulan premium fındık kalitesi.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="#products" 
            className="btn bg-[#C89B5C] hover:bg-[#b0864e] text-white border-none px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
          >
            Ürünlerimizi İnceleyin
          </Link>
          
          <Link 
            href="#contact" 
            className="px-8 py-4 rounded-full text-white border-2 border-white/40 hover:bg-white hover:text-[#5A3A1A] transition-all text-lg backdrop-blur-sm font-semibold"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;