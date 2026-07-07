import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, FolderGit2, Brain, Shield, Sprout } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Agriculture AI",
      description: "Developed a Smart Agriculture AI web application for crop recommendation and leaf disease detection using AI/ML techniques. Built a responsive multilingual platform with image upload, weather-based analysis, and automated PDF report generation.",
      tech: ["Python", "Machine Learning", "Web Technologies"],
      category: "Smart Agriculture",
      icon: <Sprout className="w-16 h-16 text-[#F59E0B]" />,
      gradient: "from-[#1F2937] to-[#111827]",
      githubUrl: "https://github.com/Parthi152005/Crop_Rcommand",
      liveUrl: "https://crop-recommand-h2gm.onrender.com/",
      features: ["Crop recommendation", "Leaf disease detection", "Weather-based analysis", "PDF report generation"],
      results: "Improved farming decision-making with automated insights."
    },
    {
      title: "Gen AI Data Quality Analyzer",
      description: "Built an automated data quality analysis tool that generates reports on missing values, outliers, duplicates, and inconsistencies using Pandas and Gen AI. Implemented a Streamlit-based interface for interactive insights and rapid dataset evaluation.",
      tech: ["Streamlit", "Python", "Pandas", "LLMs", "NumPy"],
      category: "Data Engineering",
      icon: <Brain className="w-16 h-16 text-[#3B82F6]" />,
      gradient: "from-[#1F2937] to-[#111827]",
      githubUrl: "https://github.com/Parthi152005",
      liveUrl: "#",
      features: ["Automated quality reports", "Missing values detection", "Outlier identification", "Interactive UI"],
      results: "Reduced data cleaning time and improved dataset reliability."
    },
    {
      title: "AI-Based Fall Detection System",
      description: "Developed a real-time fall detection system integrating computer vision and IoT. Leveraged ML models and camera-based monitoring to detect falls and trigger instant alerts, enhancing safety and emergency response efficiency.",
      tech: ["Python", "OpenCV", "Machine Learning", "IoT Sensors"],
      category: "AI & ML",
      icon: <Shield className="w-16 h-16 text-[#10B981]" />,
      gradient: "from-[#1F2937] to-[#111827]",
      githubUrl: "https://github.com/Parthi152005",
      liveUrl: "#",
      features: ["Real-time monitoring", "Computer vision integration", "Instant alerts", "IoT connectivity"],
      results: "Enhanced safety and emergency response times for monitored individuals."
    }
  ];

  return (
    <section id="projects" className="py-32 relative bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-space font-bold mb-6 text-[#F9FAFB] tracking-tighter"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-20 h-1 bg-[#2563EB] mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="flex flex-col gap-12 mb-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="flex w-full"
            >
              <Card className="glass-card rounded-2xl border-[#374151] hover:border-[#2563EB]/50 transition-all duration-300 group w-full p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Minimal Icon Block */}
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${project.gradient} border border-[#374151] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[#0B1220]/40 group-hover:bg-transparent transition-colors duration-300"></div>
                    <div className="relative z-10 scale-75">
                      {project.icon}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col flex-1">
                    <div className="text-xs font-inter font-bold tracking-wider text-[#2563EB] uppercase mb-3">
                      {project.category}
                    </div>
                    
                    <h3 className="text-2xl font-space font-bold text-[#F9FAFB] mb-4 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-[#D1D5DB] font-inter leading-[1.7] mb-6 max-w-prose">
                      {project.description}
                    </p>

                    <div className="mb-6 space-y-2">
                      <h4 className="text-[#F9FAFB] font-inter font-semibold text-sm">Key Features:</h4>
                      <ul className="list-disc list-inside font-inter text-[#D1D5DB] text-[15px] space-y-1 leading-[1.7]">
                        {project.features.map(feature => <li key={feature}>{feature}</li>)}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-[#F9FAFB] font-inter font-semibold text-sm mb-1">Impact:</h4>
                      <p className="text-[#10B981] font-inter text-sm font-medium">{project.results}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto pt-6 border-t border-[#374151]">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-[#111827] border border-[#374151] text-[#D1D5DB] text-xs rounded-full font-inter font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="flex-1 bg-[#111827] hover:bg-[#374151] hover:-translate-y-0.5 border border-[#374151] text-[#F9FAFB] font-inter font-semibold transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button 
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 text-white font-inter font-semibold transition-all duration-300 shadow-lg shadow-[#2563EB]/20"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass-card max-w-3xl mx-auto p-10 border-[#374151] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 text-left">
              <div className="p-4 bg-[#111827] rounded-2xl border border-[#374151]">
                <FolderGit2 className="w-10 h-10 text-[#2563EB]" />
              </div>
              <div>
                <h4 className="text-2xl font-space font-bold text-[#F9FAFB] mb-2 tracking-tight">Explore More Projects</h4>
                <p className="text-[#D1D5DB] font-inter leading-[1.7]">Check out my GitHub for more open-source contributions and personal projects.</p>
              </div>
            </div>
            <Button 
              onClick={() => window.open('https://github.com/Parthi152005', '_blank')}
              className="bg-[#F9FAFB] text-[#0B1220] hover:bg-[#D1D5DB] hover:-translate-y-0.5 px-8 py-6 rounded-xl font-inter font-semibold transition-all duration-300 shrink-0"
            >
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
