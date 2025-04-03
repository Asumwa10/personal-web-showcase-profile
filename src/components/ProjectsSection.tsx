
import React from 'react';
import { Briefcase, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A responsive e-commerce website built with React and Node.js, featuring user authentication, product filtering, and a shopping cart system.",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "https://project1.example.com",
      githubLink: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      description: "A task management application with drag-and-drop functionality, user collaboration features, and real-time updates using WebSockets.",
      tags: ["TypeScript", "Express", "Socket.io"],
      liveLink: "https://project2.example.com",
      githubLink: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 3",
      description: "A weather dashboard that integrates with multiple APIs to provide accurate forecasts, historical data, and interactive visualizations.",
      tags: ["React", "Chart.js", "API Integration"],
      liveLink: "https://project3.example.com",
      githubLink: "https://github.com/yourusername/project3"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-lightGray">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase size={28} className="text-portfolio-blue" />
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-portfolio-lightBlue text-portfolio-blue px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1 gap-2 bg-portfolio-blue hover:bg-portfolio-darkBlue" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
