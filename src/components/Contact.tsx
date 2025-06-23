
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extralight text-gray-900 mb-6">
            Let's Connect
          </h2>
          <div className="w-20 h-0.5 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start a project or just want to chat? Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <Card className="p-10 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-500">
              <h3 className="text-2xl font-light text-gray-900 mb-8">
                Get in Touch
              </h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">Email</p>
                    <a href="mailto:parthi15august@gmail.com" className="text-gray-900 hover:text-gray-600 transition-colors duration-300 font-medium">
                      parthi15august@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">Phone</p>
                    <a href="tel:+917418484430" className="text-gray-900 hover:text-gray-600 transition-colors duration-300 font-medium">
                      +91 7418484430
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">Location</p>
                    <p className="text-gray-900 font-medium">Cuddalore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-10 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-500">
              <h3 className="text-2xl font-light text-gray-900 mb-8">
                Follow Me
              </h3>
              <div className="flex space-x-6">
                <a 
                  href="https://linkedin.com/in/parthi-ban-0910152a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </a>
                <a 
                  href="https://github.com/Parthi152005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
                </a>
                <a 
                  href="mailto:parthi15august@gmail.com"
                  className="p-4 bg-gray-50 hover:bg-red-50 rounded-xl transition-all duration-300 hover:scale-110 group"
                >
                  <Mail className="w-6 h-6 text-gray-700 group-hover:text-red-600" />
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-10 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-500">
            <h3 className="text-2xl font-light text-gray-900 mb-8">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 rounded-xl h-12 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 rounded-xl h-12 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-50 border-0 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-gray-200 resize-none rounded-xl transition-all duration-300"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-lg">
            © {new Date().getFullYear()} Parthiban S. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
