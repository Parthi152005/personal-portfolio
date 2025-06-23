
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
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Profile Image */}
          <div className="lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-4xl font-medium text-gray-600">
                  PS
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 flex-1 text-left">
            <div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
                <span className="block">Hello, I'm</span>
                <span className="font-medium">Parthiban S</span>
              </h1>
            </div>
            
            <div>
              <p className="text-xl text-gray-600 mb-6 font-light">
                AI & Data Analyst | UI/UX Designer
              </p>
              <p className="text-lg text-gray-500 mb-10 max-w-2xl leading-relaxed">
                Combining data-driven insights with creative design to solve complex problems 
                and deliver engaging user experiences.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-none text-base font-normal"
                >
                  View Portfolio
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-none text-base font-normal"
                >
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="mailto:parthi15august@gmail.com"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/parthi-ban-0910152a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Parthi152005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
