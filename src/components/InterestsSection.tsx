
import React from 'react';
import { Lightbulb, Code, Laptop, Compass } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const InterestsSection = () => {
  const interests = [
    {
      icon: Code,
      title: "Web Development",
      description: "Exploring modern frameworks and best practices for creating responsive, accessible web applications."
    },
    {
      icon: Laptop,
      title: "Tech Innovations",
      description: "Keeping up with emerging trends in technology and how they're shaping the future of digital experiences."
    },
    {
      icon: Compass,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and meaningful experiences that solve real problems."
    }
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Lightbulb size={28} className="text-portfolio-blue" />
          <h2 className="text-3xl font-bold text-gray-900">Interests</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="p-4 bg-portfolio-lightBlue rounded-full mb-6">
                  <interest.icon size={28} className="text-portfolio-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{interest.title}</h3>
                <p className="text-gray-700">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
