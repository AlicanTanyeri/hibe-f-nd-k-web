'use client';

const ContactForm = () => {
  return (
    <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Ad Soyad</label>
        <input type="text" className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C89B5C]" placeholder="İsim Soyisim" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">E-posta</label>
        <input type="email" className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C89B5C]" placeholder="ornek@sirket.com" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Mesajınız</label>
        <textarea rows={4} className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C89B5C]" placeholder="Talebinizi buraya yazınız..."></textarea>
      </div>
      <button type="submit" className="w-full btn">
        Gönder
      </button>
    </form>
  );
};

export default ContactForm;