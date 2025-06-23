
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          {/* Profile Image */}
          <div className="lg:order-2 animate-fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-200 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl font-light text-gray-600">
                  PS
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 flex-1 text-left space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">Welcome to my portfolio</p>
                <h1 className="text-6xl md:text-7xl font-extralight mb-6 text-gray-900 leading-tight">
                  <span className="block opacity-90">Hello, I'm</span>
                  <span className="font-normal bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Parthiban S</span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <p className="text-2xl text-gray-700 font-light tracking-wide">
                  AI & Data Analyst | UI/UX Designer
                </p>
                <div className="w-20 h-0.5 bg-gray-900"></div>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                  Combining data-driven insights with creative design to solve complex problems 
                  and deliver engaging user experiences that make a difference.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-none text-base font-normal tracking-wide hover:tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Portfolio
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-4 rounded-none text-base font-normal tracking-wide hover:tracking-wider transition-all duration-300"
                >
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                <a 
                  href="mailto:parthi15august@gmail.com"
                  className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/parthi-ban-0910152a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/Parthi152005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
