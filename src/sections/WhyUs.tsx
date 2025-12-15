const WhyUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="section-subtitle text-left mb-2">Neden Biz?</span>
            <h2 className="text-3xl font-bold text-[#5A3A1A] mb-6">Fındıkta Güvenin Adresi</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg text-[#5A3A1A]">Hızlı Teslimat</h4>
                <p className="text-gray-600">Gelişmiş lojistik ağımız ile siparişlerinizi tam zamanında ulaştırıyoruz.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#5A3A1A]">Rekabetçi Fiyat</h4>
                <p className="text-gray-600">Üreticiden doğrudan temin gücümüzle en iyi fiyat politikasını sunuyoruz.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#5A3A1A]">Müşteri Memnuniyeti</h4>
                <p className="text-gray-600">Satış öncesi ve sonrası kesintisiz destek sağlıyoruz.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#F7F2EC] p-10 rounded-2xl">
             {/* İstatistiksel veya görsel alan */}
             <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                   <span className="block text-3xl font-bold text-[#C89B5C]">+20</span>
                   <span className="text-sm text-gray-500">Yıllık Tecrübe</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                   <span className="block text-3xl font-bold text-[#C89B5C]">+15</span>
                   <span className="text-sm text-gray-500">Ülkeye İhracat</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;