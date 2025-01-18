import React from 'react';
import { Code, PenTool, Cloud, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Code,
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 75 },
        { name: "Scikit-learn", level: 80 },
        { name: "Python", level: 90 }
      ]
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 70 }
      ]
    },
    {
      title: "Design",
      icon: PenTool,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Illustrator", level: 80 },
        { name: "Photoshop", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <category.icon className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center space-x-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img 
              src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?auto=format&fit=crop&w=800&q=80" 
              alt="AWS Certification"
              className="w-24 h-24 mx-auto mb-4 rounded-lg object-cover"
            />
            <h4 className="font-semibold">AWS Machine Learning</h4>
            <p className="text-gray-600">Certified Professional</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
              alt="AWS Cloud Practitioner"
              className="w-24 h-24 mx-auto mb-4 rounded-lg object-cover"
            />
            <h4 className="font-semibold">AWS Cloud Practitioner</h4>
            <p className="text-gray-600">Certified Professional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
