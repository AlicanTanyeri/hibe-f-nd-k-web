const Quality = () => {
  return (
    <section id="quality" className="py-20 bg-[#5A3A1A] text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Kalite Standartlarımız</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-[#C89B5C]/30 rounded-lg hover:bg-[#C89B5C]/10 transition-colors">
            <div className="text-[#C89B5C] text-4xl mb-4">ISO</div>
            <h3 className="text-xl font-bold mb-2">Uluslararası Standart</h3>
            <p className="text-gray-300 text-sm">Tüm süreçlerimiz ISO 9001 ve ISO 22000 kalite yönetim sistemlerine uygundur.</p>
          </div>
          
          <div className="p-6 border border-[#C89B5C]/30 rounded-lg hover:bg-[#C89B5C]/10 transition-colors">
            <div className="text-[#C89B5C] text-4xl mb-4">%100</div>
            <h3 className="text-xl font-bold mb-2">Doğal Üretim</h3>
            <p className="text-gray-300 text-sm">Ürünlerimizde hiçbir katkı maddesi kullanılmadan, doğallığı korunarak işlenir.</p>
          </div>
          
          <div className="p-6 border border-[#C89B5C]/30 rounded-lg hover:bg-[#C89B5C]/10 transition-colors">
            <div className="text-[#C89B5C] text-4xl mb-4">7/24</div>
            <h3 className="text-xl font-bold mb-2">Laboratuvar Analizi</h3>
            <p className="text-gray-300 text-sm">Hammadde girişinden son ürüne kadar her aşamada detaylı analizler yapılır.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;