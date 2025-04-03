
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Mail size={28} className="text-portfolio-blue" />
          <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-between">
            <Card className="border-none shadow-lg mb-6">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> your.email@example.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Location:</strong> Your City, Country
                </p>
                <p className="text-gray-700">
                  <strong>Availability:</strong> Open to freelance opportunities and collaborations
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-portfolio-lightBlue rounded-full text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-portfolio-lightBlue rounded-full text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://twitter.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-portfolio-lightBlue rounded-full text-portfolio-blue hover:bg-portfolio-blue hover:text-white transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
