import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Graphic Designer Intern & Core Team Member",
      company: "GirlScript Foundation",
      period: "2022 - Present",
      description: "Led design initiatives and collaborated with the core team to create impactful visual content for tech events and workshops."
    },
    {
      title: "Designing Head",
      company: "IEEE Student Branch",
      period: "2021 - Present",
      description: "Managed design team and created cohesive visual identities for IEEE events and publications."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-200">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600" />
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 ml-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-indigo-600 mb-4">
                  <Briefcase size={16} className="mr-2" />
                  <span className="font-medium">{exp.company}</span>
                </div>
                
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
