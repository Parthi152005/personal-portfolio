
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-40 w-64 h-64 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          {/* Profile Image */}
          <div className="lg:order-2 animate-fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 animate-pulse-glow"></div>
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-cyan-500 border-4 border-white shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-500 to-cyan-500 flex items-center justify-center text-6xl font-bold text-white">
                  PS
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 flex-1 text-left space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-purple-600 font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Welcome to my colorful world</p>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                  <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">Hello, I'm</span>
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">Parthiban S</span>
                </h1>
              </div>
              
              <div className="space-y-6">
                <p className="text-3xl font-bold tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI & Data Analyst | UI/UX Designer
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                  Creating <span className="font-bold text-purple-600">amazing digital experiences</span> with 
                  <span className="font-bold text-pink-600"> data-driven insights</span> and 
                  <span className="font-bold text-cyan-600"> creative design</span>
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-2xl text-lg font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-300"
                >
                  View Portfolio ✨
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 rounded-2xl text-lg font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-300"
                >
                  Contact Me 🚀
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                <a 
                  href="mailto:parthi15august@gmail.com"
                  className="p-4 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-300"
                >
                  <Mail className="w-7 h-7" />
                </a>
                <a 
                  href="https://linkedin.com/in/parthi-ban-0910152a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-300"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <a 
                  href="https://github.com/Parthi152005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-gray-400"
                >
                  <Github className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-sm text-purple-600 uppercase tracking-wider font-bold">Scroll Down</span>
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <ArrowDown className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
