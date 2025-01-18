import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="text-indigo-600">Jeevana Maradana</span>
            </h1>
            <p className="text-xl text-gray-600">
              Tech Enthusiast & Creative Designer crafting digital experiences through code and design.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" 
                 className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                View Projects <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#contact"
                 className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
