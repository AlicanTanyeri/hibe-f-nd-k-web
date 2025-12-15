import Link from 'next/link';

const B2B = () => {
  return (
    <section id="b2b" className="py-20 bg-[#F7F2EC]">
      <div className="container text-center max-w-4xl">
        <h2 className="section-title">Kurumsal Çözümler</h2>
        <p className="text-lg text-gray-600 mb-8">
          Pastane zincirleri, çikolata fabrikaları ve gıda endüstrisi için
          tonajlı fındık tedariğinde profesyonel çözüm ortağınızız.
          Özel kesim, kavurma derecesi ve paketleme seçenekleri için bizimle görüşün.
        </p>
        <Link href="#contact" className="btn">
          Toptan Fiyat Listesi İste
        </Link>
      </div>
    </section>
  );
};

export default B2B;