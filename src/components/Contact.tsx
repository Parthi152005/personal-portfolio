
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-green to-tech-blue bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-green to-tech-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto">
            Ready to start a project or just want to chat? Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-tech-blue/20 rounded-lg">
                    <Mail className="w-6 h-6 text-tech-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-poppins">Email</p>
                    <a href="mailto:parthi15august@gmail.com" className="text-white hover:text-tech-blue transition-colors duration-200 font-poppins">
                      parthi15august@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-tech-green/20 rounded-lg">
                    <Phone className="w-6 h-6 text-tech-green" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-poppins">Phone</p>
                    <a href="tel:+917418484430" className="text-white hover:text-tech-green transition-colors duration-200 font-poppins">
                      +91 7418484430
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-400/20 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-poppins">Location</p>
                    <p className="text-white font-poppins">Cuddalore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/parthi-ban-0910152a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-700 hover:bg-tech-blue/20 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-tech-blue" />
                </a>
                <a 
                  href="https://github.com/Parthi152005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-700 hover:bg-tech-green/20 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6 text-tech-green" />
                </a>
                <a 
                  href="mailto:parthi15august@gmail.com"
                  className="p-4 bg-slate-700 hover:bg-purple-400/20 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6 text-purple-400" />
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-poppins">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-tech-blue focus:ring-tech-blue"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-poppins">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-tech-blue focus:ring-tech-blue"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-poppins">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-tech-blue focus:ring-tech-blue resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-tech-blue to-purple-600 hover:from-tech-blue/80 hover:to-purple-600/80 text-white py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 font-poppins"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400 font-poppins">
            © {new Date().getFullYear()} Parthiban S. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
