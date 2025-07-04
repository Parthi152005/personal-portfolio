
import { ArrowDown, Mail, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const downloadPortfolio = () => {
    // Create a comprehensive portfolio content in professional resume format
    const portfolioContent = `PARTHIBAN S
Data Analytics — UI|UX Designer
Sandrorplayam, Cuddalore, Tamilnadu, India                                    +91-7418484430
                                                                             parthi15august@gmail.com
                                                                             parthi-ban-0910152a5
                                                                             https://github.com/Parthi152005

Summary

Detail-oriented Data Analyst skilled in SQL, Python, Tableau, and Excel for data-driven decision-making.
Also a budding UI/UX Designer with expertise in wireframing and user research using Figma and Adobe
XD. Passionate about optimizing business performance and enhancing user engagement.

Education                                           Certifications

• B.Tech in AI and Data Science                   • Data Analytics Essentials
  CK College of Engineering and Technology,         (Cisco Networking Academy)
  Cuddalore (2022 - 2026)
                                                  • NoSQL
• Higher Secondary - 60%                           (NSICI)
  St.David Higher Secondary School,
  Cuddalore Port (2020 -2022)                    • 30-Day MasterClass in Data Analytics
                                                    (NoviTech R&D Pvt. Ltd.)

Skills                                             Competitive Programming

• Programming: Python, SQL, Java,R                - Successfully tackled over 150 challenges on Hacker-
                                                    Rank.
• Databases: MongoDB, MySQL                        -Solved more than 100 problems on LeetCode.

• Data Analytics: Pandas, NumPy,
  Tableau, Power BI, Matplotlib, Seaborn

• Machine Learning: Scikit-Learn,TensorFlow

• UI UX: Figma, Adobe XD

Achievements

- Dr.KALAM YOUNG ACHIEVER AWARD (Sep2024)

-Achieved the National Cadet Corps (NCC) 'A'
Certificate, demonstrating exemplary leadership, discipline, and teamwork through rigorous military training

Projects

• Sales Forecasting using Machine Learning
  - Analyzes historical sales data using machine learning algorithms to predict future trends.
  - Optimizes inventory management and demand planning for better business efficiency.
  - Enhances revenue forecasting and decision-making with data-driven insights.

• AI-based fall detection system for elderly safety
  -Uses AI and computer vision to detect falls in real-time with high accuracy
  -Integrates IoT sensors to monitor movement and identify sudden impacts.
  -Sends instant alerts to caregivers for quick emergency response.

• AI-Based Smart Integration Farming System
  - Implements machine learning to predict crop health and optimize irrigation.
  - Solar-powered sensors monitor soil moisture, temperature, and environmental conditions.
  - Enhances agricultural efficiency by automating decision-making and resource management.`;

    const blob = new Blob([portfolioContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Parthiban_S_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Modern geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-slate-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{
        animationDelay: '4s'
      }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Profile Image Section */}
          <div className="lg:order-2 animate-fade-in-up">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
              
              {/* Main profile container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-slate-500 p-2 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-inner">
                  <img alt="Parthiban S - AI & Data Analyst, UI/UX Designer" src="/lovable-uploads/2447a912-a404-4903-90af-2b14cff997da.jpg" className="w-full h-full rounded-full object-fill" />
                </div>
              </div>
              
              {/* Professional badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white px-6 py-2 rounded-full shadow-lg border border-slate-200">
                  <span className="text-slate-700 font-semibold text-sm">Available for Hire</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:order-1 flex-1 text-left space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                  <span className="text-sm font-medium text-blue-800 tracking-wide">👋 Welcome to my portfolio</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block text-slate-800 mb-2">Hello, I'm</span>
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">
                    Parthiban S
                  </span>
                </h1>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">
                    AI & Data Analyst | UI/UX Designer
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                </div>
                
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">AI & DS Student | Data Whisperer | Design Thinker Blending Data + Design to build human-centered tech UI/UX Designer | Data Analyst in progress | AI Explorer Creating impact through innovation & FOSS Devloper..</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={downloadPortfolio} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-base font-semibold tracking-wide hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-300">
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </Button>
                <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl text-base font-semibold tracking-wide hover:scale-105 transition-all duration-300 shadow-lg">
                  Let's Connect
                </Button>
              </div>

              {/* Professional Social Links */}
              <div className="flex gap-4">
                <a href="mailto:parthi15august@gmail.com" className="p-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-300 group" title="Email">
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>
                <a href="https://linkedin.com/in/parthi-ban-0910152a5" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-300 group" title="LinkedIn">
                  <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>
                <a href="https://github.com/Parthi152005" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-slate-400 group" title="GitHub">
                  <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>

            {/* Key Skills Preview */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {['Python', 'Figma', 'SQL', 'AI & ML', 'UI/UX'].map(skill => <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                    {skill}
                  </span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-slate-500 font-medium">Scroll to explore</span>
            <div className="p-2 bg-white rounded-full shadow-lg border border-slate-200">
              <ArrowDown className="w-5 h-5 text-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
