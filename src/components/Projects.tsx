
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sales Forecasting using Machine Learning",
      description: "Advanced predictive analytics system that forecasts sales trends using machine learning algorithms for better inventory management and revenue planning.",
      image: "/api/placeholder/400/250",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      category: "Machine Learning",
      color: "tech-blue"
    },
    {
      title: "AI-Based Fall Detection System",
      description: "Real-time fall detection system utilizing AI and IoT sensors to provide immediate safety alerts for elderly care, enhancing healthcare monitoring.",
      image: "/api/placeholder/400/250",
      tech: ["TensorFlow", "IoT", "Python", "Computer Vision"],
      category: "AI & IoT",
      color: "tech-green"
    },
    {
      title: "AI-Based Smart Integration Farming System",
      description: "Intelligent agricultural automation system leveraging machine learning and smart sensors to optimize farming operations and crop management.",
      image: "/api/placeholder/400/250",
      tech: ["Machine Learning", "IoT Sensors", "Data Analytics", "Python"],
      category: "Smart Agriculture",
      color: "purple-400"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-blue via-purple-400 to-tech-green bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto">
            Showcasing innovative solutions that blend AI, data analytics, and creative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/20 to-${project.color}/10 group-hover:from-${project.color}/30 group-hover:to-${project.color}/20 transition-all duration-500`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-6xl font-orbitron font-bold text-${project.color}/30 group-hover:text-${project.color}/50 transition-colors duration-500`}>
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 bg-${project.color}/90 text-white text-sm font-medium rounded-full font-poppins`}>
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-tech-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 font-poppins text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full font-poppins hover:bg-slate-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="flex-1 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className={`flex-1 bg-${project.color}/90 hover:bg-${project.color} text-white transition-all duration-300`}
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* My Working Process */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
              My Working Process
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-tech-blue to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Business Planning",
                description: "Understanding requirements, analyzing data, and creating strategic approaches for optimal solutions."
              },
              {
                step: "02", 
                title: "Design Strategy",
                description: "Developing comprehensive design systems, wireframes, and user experience frameworks."
              },
              {
                step: "03",
                title: "Grow Your Business",
                description: "Implementing scalable solutions, monitoring performance, and ensuring continuous improvement."
              }
            ].map((process, index) => (
              <Card key={process.step} className="p-6 bg-slate-800/50 border-slate-700 text-center backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-tech-blue to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-orbitron font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="text-xl font-orbitron font-semibold text-white mb-3">{process.title}</h4>
                <p className="text-gray-300 font-poppins">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
