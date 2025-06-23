
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-tech-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-tech-blue to-purple-600 p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for profile picture */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-6xl font-orbitron text-tech-blue">
                    PS
                  </div>
                </div>
              </div>
              {/* Floating tech elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-tech-blue rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-tech-green rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 flex-1 text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
                <span className="text-white">Hello, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-tech-blue via-purple-400 to-tech-green bg-clip-text text-transparent animate-gradient-x">
                  Parthiban S
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-poppins">
                AI & Data Analyst | UI/UX Designer
              </p>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl font-poppins">
                Combining data-driven insights with creative design to solve complex problems 
                and deliver engaging user experiences.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-tech-blue to-purple-600 hover:from-tech-blue/80 hover:to-purple-600/80 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  View Portfolio
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                <a 
                  href="mailto:parthi15august@gmail.com"
                  className="p-3 rounded-full bg-slate-800 hover:bg-tech-blue/20 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6 text-tech-blue" />
                </a>
                <a 
                  href="https://linkedin.com/in/parthi-ban-0910152a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 hover:bg-tech-blue/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-tech-blue" />
                </a>
                <a 
                  href="https://github.com/Parthi152005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 hover:bg-tech-blue/20 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6 text-tech-blue" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-tech-blue" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
