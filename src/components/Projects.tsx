
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "ML Image Classification",
      description: "Deep learning model for image classification using TensorFlow",
      category: "ml",
      tech: ["Python", "TensorFlow", "AWS"],
      github: "https://github.com/Jeevana52",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with React and Node.js",
      category: "web",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Jeevana52",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity design for a tech startup",
      category: "design",
      tech: ["Figma", "Illustrator", "Photoshop"],
      github: "https://github.com/Jeevana52",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>
        
        <div className="flex justify-center mb-12 space-x-4">
          {['all', 'web', 'ml', 'design'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === category 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.github} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a href={project.github} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
