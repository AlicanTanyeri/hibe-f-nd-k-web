import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-[#F7F2EC]">
      <div className="container">
        <span className="section-subtitle">Lezzetlerimiz</span>
        <h2 className="section-title">Ürün Çeşitlerimiz</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;