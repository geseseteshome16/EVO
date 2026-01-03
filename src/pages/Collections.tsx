import { useState } from 'react';
import { Star } from 'lucide-react';

const categories = ['All', 'Women', 'Men', 'Accessories', 'New Arrivals', 'Trending'];

const products = [
  {
    id: 1,
    name: 'Classic Leather Jacket',
    category: 'Women',
    price: 299,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    trending: true,
  },
  {
    id: 2,
    name: 'Tailored Blazer',
    category: 'Men',
    price: 249,
    image: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    new: true,
  },
  {
    id: 3,
    name: 'Summer Dress',
    category: 'Women',
    price: 159,
    image: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    trending: true,
  },
  {
    id: 4,
    name: 'Designer Handbag',
    category: 'Accessories',
    price: 399,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    new: true,
  },
  {
    id: 5,
    name: 'Casual Denim',
    category: 'Men',
    price: 129,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
  },
  {
    id: 6,
    name: 'Evening Gown',
    category: 'Women',
    price: 499,
    image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    new: true,
  },
  {
    id: 7,
    name: 'Luxury Watch',
    category: 'Accessories',
    price: 799,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    trending: true,
  },
  {
    id: 8,
    name: 'Street Style Hoodie',
    category: 'Men',
    price: 89,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    trending: true,
  },
  {
    id: 9,
    name: 'Silk Scarf',
    category: 'Accessories',
    price: 79,
    image: 'https://images.pexels.com/photos/2710/fashion-person-woman-hand.jpg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
  },
];

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'New Arrivals') return product.new;
    if (selectedCategory === 'Trending') return product.trending;
    return product.category === selectedCategory;
  });

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Collections</h1>
          <p className="text-center text-gray-600 text-lg">
            Discover timeless pieces that define your unique style
          </p>
        </div>
      </section>

      <section className="py-8 bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.new && (
                    <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      New
                    </span>
                  )}
                  {product.trending && (
                    <span className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Trending
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating ? 'fill-orange-500 text-orange-500' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
