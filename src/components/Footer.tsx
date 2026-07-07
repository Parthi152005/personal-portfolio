import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] py-12 border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-space font-bold text-[#F9FAFB] mb-2 tracking-tight">Parthiban S</h3>
            <p className="text-[#9CA3AF] text-sm font-inter">AI Engineer & Data Analyst</p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/parthi-ban-0910152a5" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#2563EB] hover:-translate-y-1 transition-all duration-300" title="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Parthi152005" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#F9FAFB] hover:-translate-y-1 transition-all duration-300" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://leetcode.com/u/Parthiban_Dev/" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#F59E0B] hover:-translate-y-1 transition-all duration-300" title="LeetCode">
              <Code2 className="w-5 h-5" />
            </a>
            <a href="mailto:parthi15august@gmail.com" className="text-[#9CA3AF] hover:text-[#EF4444] hover:-translate-y-1 transition-all duration-300" title="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-end gap-4">
            <p className="text-[#6B7280] text-sm font-inter">
              © {new Date().getFullYear()} Parthiban S. All rights reserved.
            </p>
            <Button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              variant="ghost"
              className="text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#1F2937] font-inter font-medium"
            >
              Back to top
            </Button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
