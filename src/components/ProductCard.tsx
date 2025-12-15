'use client';
import Image from 'next/image';

interface ProductProps {
  name: string;
  description: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, description, image, category }: ProductProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group h-full flex flex-col">
      <div className="relative h-64 w-full bg-gray-300 flex items-center justify-center overflow-hidden">
        {/* Resim varsa göster, yoksa gri kutu içinde isim yaz */}
        <div className="text-gray-500 font-bold text-center px-4">
            {image ? (
                // Eğer public'te resim varsa bu çalışır
               <Image 
                 src={image} 
                 alt={name} 
                 fill 
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
                 // Resim bulunamazsa hata vermemesi için:
                 onError={(e) => { e.currentTarget.style.display = 'none'; }} 
               />
            ) : null}
            <span className="absolute inset-0 flex items-center justify-center z-[-1]">{name}</span>
        </div>
      </div>
      <div className="p-6 flex-1">
        <span className="text-xs font-bold text-[#C89B5C] uppercase tracking-wider block mb-2">{category}</span>
        <h3 className="text-xl font-bold text-[#5A3A1A] mb-3">{name}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;