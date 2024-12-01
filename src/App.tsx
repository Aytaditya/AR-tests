import React from 'react';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Home/Hero';
import { ARViewer } from './components/AR/ARViewer';
import { ProductCard } from './components/Products/ProductCard';

function App() {
  const products = [
    {
      title: "Modern Sofa",
      description: "Visualize this elegant sofa in your living room",
      imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80"
    },
    {
      title: "Dining Table",
      description: "Perfect centerpiece for your dining room",
      imageUrl: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80"
    },
    {
      title: "Reading Lamp",
      description: "Illuminate your space with style",
      imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience AR</h2>
          <ARViewer />
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AR Vision</h3>
              <p className="text-gray-400">Experience the future of shopping today</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-white">Experience</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">info@arvision.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;