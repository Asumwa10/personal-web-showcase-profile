
import React from 'react';
import { GraduationCap, Download } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-portfolio-lightGray">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap size={28} className="text-portfolio-blue" />
          <h2 className="text-3xl font-bold text-gray-900">Educational Background</h2>
        </div>
        
        <Card className="border-none shadow-lg mb-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Your Degree</h3>
            <p className="text-gray-600 mb-4">Your University • 20XX-20XX</p>
            <p className="text-gray-700">
              I hold a degree in Your Degree from Your University, where I focused on web development, software engineering, and user experience design. My education provided me with a strong foundation in both theoretical concepts and practical applications of technology.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Certifications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Web Development Certification</li>
              <li>UX/UI Design Fundamentals</li>
              <li>Advanced JavaScript Development</li>
            </ul>
            
            <Button className="gap-2 bg-portfolio-blue hover:bg-portfolio-darkBlue">
              <Download size={18} />
              Download My CV
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
