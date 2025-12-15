import Link from 'next/link';
import Image from 'next/image'; // Image bileşenini import ettik
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C1810] text-white pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Brand / Logo Alanı */}
        <div>
          {/* Logo Görseli - Yazı yerine bu alan eklendi */}
          <div className="relative w-48 h-14 mb-6">
            <Image 
              src="/images/logo/logo.png" 
              alt="HibeFındık Logo" 
              fill 
              // object-left: Logonun sola hizalı durmasını sağlar
              // brightness-0 invert: Eğer logonuz koyu renkse, koyu arka planda beyaz görünmesi için bu filtreleri ekleyebilirsiniz. Logo zaten açıksa bunları silin.
              className="object-contain object-left" 
            />
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Doğallıktan ödün vermeden, en kaliteli fındıkları sofralarınıza ve endüstriye kazandırıyoruz.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Hızlı Erişim</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/" className="hover:text-[#C89B5C]">Ana Sayfa</Link></li>
            <li><Link href="#products" className="hover:text-[#C89B5C]">Ürünlerimiz</Link></li>
            <li><Link href="#b2b" className="hover:text-[#C89B5C]">Kurumsal / B2B</Link></li>
            <li><Link href="#contact" className="hover:text-[#C89B5C]">İletişim</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">İletişim</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin size={20} className="text-[#C89B5C] shrink-0" />
              <span>Ordu / Türkiye</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#C89B5C] shrink-0" />
              <span>+90 555 000 00 00</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#C89B5C] shrink-0" />
              <span>info@hibefindik.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HibeFındık. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;