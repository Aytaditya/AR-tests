import React from 'react';
import { Camera } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Camera className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">AR Vision</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#about">About</NavLink>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Try AR Now
          </button>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-600 hover:text-indigo-600 transition-colors">
    {children}
  </a>
);