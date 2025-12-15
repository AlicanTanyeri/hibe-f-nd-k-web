import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  // Site ana URL'si (SEO hatası almamak için)
  metadataBase: new URL('https://www.hibefindik.com'), 
  
  title: 'HibeFındık | Premium Fındık Üreticisi',
  description: 'Türkiye\'nin en kaliteli fındıklarını işliyor, dünyaya sunuyoruz. HibeFındık ile doğallığı keşfedin.',
  keywords: ['fındık', 'hazelnut', 'giresun fındığı', 'toptan fındık', 'fındık fabrikası'],
  
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.hibefindik.com',
    siteName: 'HibeFındık',
  },
};