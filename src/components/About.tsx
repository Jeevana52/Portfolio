import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              As a Computer Science student and graphic designer, I blend technical expertise with creative vision. 
              My journey in technology has been driven by a passion for innovation and problem-solving, 
              particularly in machine learning and web development.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Award className="text-indigo-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Achievements</h3>
                  <p className="text-gray-600">Ranked 1311 in IEEExtreme global competition</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <BookOpen className="text-indigo-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Certifications</h3>
                  <p className="text-gray-600">AWS Machine Learning & Cloud Practitioner certified</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="text-indigo-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Leadership</h3>
                  <p className="text-gray-600">Core team member at GirlScript Foundation & IEEE Student Branch</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
