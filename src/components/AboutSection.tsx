
import React from 'react';
import { User } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <User size={28} className="text-portfolio-blue" />
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        </div>
        
        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi! I'm <span className="font-semibold">Your Name</span>, a passionate web developer with a love for creating functional and beautiful web experiences. I specialize in modern web technologies and enjoy solving complex problems with elegant solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              With several years of experience in the field, I've worked on a variety of projects ranging from small business websites to complex web applications. I'm constantly learning and expanding my skillset to stay up-to-date with the latest trends and technologies in web development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Beyond coding, I enjoy collaborating with teams to turn ideas into reality and bring creative visions to life. I believe in clean, maintainable code and user-centric design that creates exceptional experiences.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
