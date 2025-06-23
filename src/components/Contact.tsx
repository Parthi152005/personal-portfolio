
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
    toast.success("🎉 Message sent successfully! I'll get back to you with colorful ideas soon!");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Let's Create Magic
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-2xl font-semibold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent max-w-3xl mx-auto">
            Ready to paint your digital dreams? Let's chat! 🌈
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <Card className="p-10 bg-gradient-to-br from-white via-blue-50 to-purple-50 border-0 shadow-2xl hover:shadow-blue-300 transition-all duration-500 hover:scale-105">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                Get in Touch 📱
              </h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="p-4 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold mb-2 uppercase tracking-wider">Email</p>
                    <a href="mailto:parthi15august@gmail.com" className="text-xl font-bold text-gray-900 hover:text-pink-600 transition-colors duration-300">
                      parthi15august@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="p-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold mb-2 uppercase tracking-wider">Phone</p>
                    <a href="tel:+917418484430" className="text-xl font-bold text-gray-900 hover:text-teal-600 transition-colors duration-300">
                      +91 7418484430
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="p-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold mb-2 uppercase tracking-wider">Location</p>
                    <p className="text-xl font-bold text-gray-900">Cuddalore, Tamil Nadu 🇮🇳</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-10 bg-gradient-to-br from-white via-pink-50 to-orange-50 border-0 shadow-2xl hover:shadow-pink-300 transition-all duration-500 hover:scale-105">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-8">
                Follow My Colorful Journey 🌈
              </h3>
              <div className="flex space-x-6">
                <a 
                  href="https://linkedin.com/in/parthi-ban-0910152a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl transition-all duration-300 hover:scale-125 group shadow-lg hover:shadow-blue-300"
                >
                  <Linkedin className="w-8 h-8 text-white" />
                </a>
                <a 
                  href="https://github.com/Parthi152005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black rounded-2xl transition-all duration-300 hover:scale-125 group shadow-lg hover:shadow-gray-400"
                >
                  <Github className="w-8 h-8 text-white" />
                </a>
                <a 
                  href="mailto:parthi15august@gmail.com"
                  className="p-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 rounded-2xl transition-all duration-300 hover:scale-125 group shadow-lg hover:shadow-red-300"
                >
                  <Mail className="w-8 h-8 text-white" />
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-10 bg-gradient-to-br from-white via-cyan-50 to-blue-50 border-0 shadow-2xl hover:shadow-cyan-300 transition-all duration-500 hover:scale-105">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-8">
              Send a Colorful Message ✨
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-gray-700 mb-4">
                  Your Name 👋
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-4 focus:ring-purple-300 focus:border-purple-400 rounded-2xl h-14 transition-all duration-300 text-lg font-medium"
                  placeholder="What's your awesome name?"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-gray-700 mb-4">
                  Email Address 📧
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-4 focus:ring-blue-300 focus:border-blue-400 rounded-2xl h-14 transition-all duration-300 text-lg font-medium"
                  placeholder="your.awesome@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-bold text-gray-700 mb-4">
                  Your Colorful Message 💌
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-4 focus:ring-green-300 focus:border-green-400 resize-none rounded-2xl transition-all duration-300 text-lg font-medium"
                  placeholder="Tell me about your amazing project ideas or just say a colorful hello! 🌈"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white py-6 rounded-2xl text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-400"
              >
                <Send className="w-6 h-6 mr-3" />
                Send My Colorful Message 🚀
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t-2 border-gradient-to-r from-purple-200 to-pink-200 text-center">
          <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            © {new Date().getFullYear()} Parthiban S. Crafted with 💜 passion and 🌈 colors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
