
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sales Forecasting using Machine Learning",
      description: "Advanced predictive analytics system that forecasts sales trends using machine learning algorithms for better inventory management and revenue planning.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      category: "Machine Learning"
    },
    {
      title: "AI-Based Fall Detection System",
      description: "Real-time fall detection system utilizing AI and IoT sensors to provide immediate safety alerts for elderly care, enhancing healthcare monitoring.",
      tech: ["TensorFlow", "IoT", "Python", "Computer Vision"],
      category: "AI & IoT"
    },
    {
      title: "AI-Based Smart Integration Farming System",
      description: "Intelligent agricultural automation system leveraging machine learning and smart sensors to optimize farming operations and crop management.",
      tech: ["Machine Learning", "IoT Sensors", "Data Analytics", "Python"],
      category: "Smart Agriculture"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend AI, data analytics, and creative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.title}
              className="overflow-hidden bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Project Header */}
              <div className="h-32 bg-gray-100 flex items-center justify-center">
                <div className="text-3xl font-light text-gray-400">
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                  {project.category}
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
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
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-none"
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
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              My Working Process
            </h3>
            <div className="w-12 h-px bg-gray-900 mx-auto"></div>
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
            ].map((process) => (
              <Card key={process.step} className="p-6 bg-white border-0 shadow-sm text-center">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-medium">
                  {process.step}
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">{process.title}</h4>
                <p className="text-gray-600">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
