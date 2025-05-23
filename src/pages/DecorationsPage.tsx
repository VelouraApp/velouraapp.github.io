
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock product data for decorations
const products = [
  {
    id: 301,
    name: 'Arcadă Florală pentru Ceremonie',
    category: 'Decoruri',
    price: 1899,
    image: '/lovable-uploads/floral-arch.jpg',
  },
  {
    id: 302,
    name: 'Set Lumânări Decorative',
    category: 'Decoruri',
    price: 459,
    image: '/lovable-uploads/candles.jpg',
  },
  {
    id: 303,
    name: 'Aranjament de Masă Premium',
    category: 'Decoruri',
    price: 349,
    image: '/lovable-uploads/table-decor.jpg',
  },
  {
    id: 304,
    name: 'Ghirlande Luminoase LED',
    category: 'Decoruri',
    price: 279,
    image: '/lovable-uploads/string-lights.jpg',
  },
  {
    id: 305,
    name: 'Set Décor Masă Prezidiu',
    category: 'Decoruri',
    price: 1299,
    image: '/lovable-uploads/head-table.jpg',
  },
];

export default function DecorationsPage() {
  return (
    <div className="py-8">
      <div className="wedding-container">
        <h1 className="wedding-title mb-8 text-center">Decorațiuni pentru Nuntă</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4 bg-wedding-ivory rounded-lg">
          <div className="flex items-center mb-4 md:mb-0">
            <Filter size={20} className="mr-2" />
            <span className="font-medium">Filtre</span>
            <Button variant="ghost" className="ml-4 flex items-center">
              Categorie <ChevronDown size={16} className="ml-1" />
            </Button>
            <Button variant="ghost" className="flex items-center">
              Preț <ChevronDown size={16} className="ml-1" />
            </Button>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-2">Sortare după:</span>
            <select className="border p-2 rounded-md">
              <option value="featured">Recomandate</option>
              <option value="price-low">Preț: Mic la Mare</option>
              <option value="price-high">Preț: Mare la Mic</option>
              <option value="newest">Cele mai noi</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="product-card group">
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-[300px] object-cover"
                  />
                </Link>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-wedding-white p-2 rounded-full shadow-sm hover:bg-wedding-gold hover:text-white transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-wedding-gold text-white w-full py-2 rounded-md flex items-center justify-center gap-2 hover:bg-wedding-gold/90 transition-colors">
                    <ShoppingBag size={16} />
                    <span>Adaugă în coș</span>
                  </button>
                </div>
              </div>
              <CardContent className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium text-lg mb-1 hover:text-wedding-gold transition-colors">{product.name}</h3>
                </Link>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="font-medium">{product.price} Lei</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <Button variant="outline" className="w-10 h-10 p-0" disabled>
              1
            </Button>
            <Button variant="ghost" className="w-10 h-10 p-0">
              2
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
