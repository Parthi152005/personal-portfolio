
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight, Target, Shield, Sprout } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sales Forecasting using Machine Learning",
      description: "Advanced predictive analytics system that forecasts sales trends using machine learning algorithms for better inventory management and revenue planning.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      category: "Machine Learning",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "AI-Based Fall Detection System",
      description: "Real-time fall detection system utilizing AI and IoT sensors to provide immediate safety alerts for elderly care, enhancing healthcare monitoring.",
      tech: ["TensorFlow", "IoT", "Python", "Computer Vision"],
      category: "AI & IoT",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-green-50 to-emerald-50"
    },
    {
      title: "AI-Based Smart Integration Farming System",
      description: "Intelligent agricultural automation system leveraging machine learning and smart sensors to optimize farming operations and crop management.",
      tech: ["Machine Learning", "IoT Sensors", "Data Analytics", "Python"],
      category: "Smart Agriculture",
      icon: <Sprout className="w-8 h-8" />,
      gradient: "from-orange-50 to-yellow-50"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extralight text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-0.5 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend AI, data analytics, and creative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-24">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`overflow-hidden bg-gradient-to-br ${project.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Header */}
              <div className="h-40 bg-white/50 flex items-center justify-center relative overflow-hidden">
                <div className="text-gray-700 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>
              </div>

              <div className="p-8">
                <div className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">
                  {project.category}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/80 text-gray-600 text-xs rounded-full font-medium border border-gray-200"
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
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-white hover:scale-105 rounded-none transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-none hover:scale-105 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Working Process */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              My Working Process
            </h3>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
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
              <Card 
                key={process.step} 
                className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center group hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-medium group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">{process.title}</h4>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
