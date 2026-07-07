import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, Download, ChevronRight, Terminal, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Artificial Intelligence Engineer",
    "Data Analyst",
    "Machine Learning Engineer",
    "Generative AI Developer",
    "Python Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const downloadPortfolio = () => {
    const link = document.createElement('a');
    link.href = '/Parthiban_S_resume.pdf';
    link.download = 'Parthiban_S_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B1220]">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#2563EB]/10 blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#10B981]/5 blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Content Section */}
          <div className="lg:w-1/2 text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-3 py-1 bg-[#1F2937] border border-[#374151] rounded-full">
                <span className="text-xs font-semibold text-[#D1D5DB] uppercase tracking-wider font-inter">Hello, I'm</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-space font-bold leading-tight text-[#F9FAFB] tracking-tighter">
                Parthiban S
              </h1>
              
              <div className="h-[40px] text-2xl md:text-3xl font-space font-semibold text-[#2563EB] flex items-center tracking-tight">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRole}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {roles[currentRole]}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <p className="text-lg text-[#D1D5DB] leading-[1.7] max-w-prose font-inter font-medium">
                Energetic and driven learner seeking opportunities to apply skills in AI/ML, Data Analytics, software development, and UI/UX design, with a strong foundation in Python, SQL, and ML, hands-on experience in dashboards, automation tools, and user-focused interfaces.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button onClick={downloadPortfolio} className="bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 text-white px-6 py-6 rounded-xl font-inter font-semibold shadow-lg shadow-[#2563EB]/25 transition-all duration-300">
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
              <Button onClick={() => scrollToSection('projects')} variant="outline" className="border-[#374151] bg-[#1F2937] hover:bg-[#374151] hover:-translate-y-0.5 text-[#F9FAFB] px-6 py-6 rounded-xl font-inter font-semibold transition-all duration-300">
                View Projects
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="mailto:parthi15august@gmail.com" className="p-3 bg-[#1F2937] hover:bg-[#2563EB] border border-[#374151] text-[#D1D5DB] hover:text-white rounded-lg transition-colors" title="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/parthi-ban-0910152a5" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1F2937] hover:bg-[#2563EB] border border-[#374151] text-[#D1D5DB] hover:text-white rounded-lg transition-colors" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Parthi152005" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1F2937] hover:bg-[#2563EB] border border-[#374151] text-[#D1D5DB] hover:text-white rounded-lg transition-colors" title="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/u/Parthiban_Dev/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1F2937] hover:bg-[#2563EB] border border-[#374151] text-[#D1D5DB] hover:text-white rounded-lg transition-colors" title="LeetCode">
                <Code2 className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Graphic Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] to-[#0B1220] rounded-2xl border border-[#374151] shadow-2xl transform rotate-3 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#374151 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <Terminal className="w-24 h-24 text-[#2563EB] opacity-50" />
                
                {/* Floating code snippets mock */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-1/4 left-8 bg-[#111827] border border-[#374151] p-3 rounded-lg shadow-lg"
                >
                  <div className="w-24 h-2 bg-[#10B981] rounded mb-2 opacity-80"></div>
                  <div className="w-16 h-2 bg-[#3B82F6] rounded opacity-80"></div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute bottom-1/4 right-8 bg-[#111827] border border-[#374151] p-3 rounded-lg shadow-lg"
                >
                  <div className="w-32 h-2 bg-[#2563EB] rounded mb-2 opacity-80"></div>
                  <div className="w-20 h-2 bg-[#D1D5DB] rounded opacity-80"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs text-[#D1D5DB] font-medium mb-2 uppercase tracking-wider">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="p-2 border border-[#374151] rounded-full bg-[#1F2937]"
          >
            <ArrowDown className="w-4 h-4 text-[#F9FAFB]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
