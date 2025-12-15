'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  // Mobile menü için state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex justify-between items-center h-20 px-4">
        
        {/* LOGO KISMI */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-40 h-12">
            <Image 
              src="/images/logo/logo.png" 
              alt="HibeFındık Logo" 
              fill 
              className="object-contain" // Logonun bozulmadan sığmasını sağlar
              priority // Logonun hızlı yüklenmesini sağlar
            />
          </div>
        </Link>

        {/* MASAÜSTÜ MENÜ */}
        <nav className="hidden md:flex gap-8 font-medium text-[#5A3A1A]">
          <Link href="#about" className="hover:text-[#C89B5C] transition-colors">Hakkımızda</Link>
          <Link href="#products" className="hover:text-[#C89B5C] transition-colors">Ürünler</Link>
          <Link href="#quality" className="hover:text-[#C89B5C] transition-colors">Kalite</Link>
          <Link href="#contact" className="hover:text-[#C89B5C] transition-colors">İletişim</Link>
        </nav>

        {/* BUTTON */}
        <Link href="#contact" className="hidden md:inline-block btn text-sm">
          Teklif Al
        </Link>
        
        {/* MOBİL MENÜ BUTONU (Hamburger) */}
        <button 
          className="md:hidden text-[#5A3A1A]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBİL MENÜ AÇILIR KUTUSU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t absolute w-full left-0 top-20 shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>Hakkımızda</Link>
          <Link href="#products" onClick={() => setIsMobileMenuOpen(false)}>Ürünler</Link>
          <Link href="#quality" onClick={() => setIsMobileMenuOpen(false)}>Kalite</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>İletişim</Link>
        </div>
      )}
    </header>
  );
};

export default Header;