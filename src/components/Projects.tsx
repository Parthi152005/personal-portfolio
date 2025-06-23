
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight, Target, Shield, Sprout } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sales Forecasting AI",
      description: "Revolutionary machine learning system that predicts sales trends with stunning accuracy, featuring beautiful data visualizations and smart inventory optimization.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      category: "Machine Learning",
      icon: <Target className="w-10 h-10" />,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      emoji: "🎯"
    },
    {
      title: "Smart Fall Detection System",
      description: "Life-saving AI-powered fall detection using computer vision and IoT sensors, with real-time alerts and beautiful monitoring dashboards for healthcare.",
      tech: ["TensorFlow", "IoT", "Python", "Computer Vision"],
      category: "AI & IoT",
      icon: <Shield className="w-10 h-10" />,
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      emoji: "🛡️"
    },
    {
      title: "Smart Farming Revolution",
      description: "Next-generation agricultural automation with AI-powered crop monitoring, colorful data dashboards, and intelligent farming recommendations.",
      tech: ["Machine Learning","IoT Sensors", "Data Analytics", "Python"],
      category: "Smart Agriculture",
      icon: <Sprout className="w-10 h-10" />,
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      emoji: "🌱"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-green-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Colorful Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-2xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent max-w-3xl mx-auto">
            Innovative solutions painted with creativity and technology 🎨
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-24">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`overflow-hidden bg-gradient-to-br ${project.bgGradient} border-0 shadow-2xl hover:shadow-2xl transition-all duration-500 group hover:scale-110`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl mb-4">{project.emoji}</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white group-hover:scale-125 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
              </div>

              <div className="p-8">
                <div className={`text-xs font-bold mb-4 uppercase tracking-wider bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.category}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:scale-105 transition-transform">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 text-base leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-xl font-bold shadow-lg hover:scale-110 transition-transform`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white rounded-xl hover:scale-105 transition-all duration-300 font-bold shadow-lg"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </Button>
                  <Button 
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white rounded-xl hover:scale-105 transition-all duration-300 font-bold shadow-lg`}
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
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
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              My Colorful Process 🌈
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Strategic Planning",
                description: "Deep analysis and creative brainstorming to understand your vision and create the perfect colorful solution.",
                gradient: "from-blue-500 to-purple-600",
                bgGradient: "from-blue-50 to-purple-50",
                emoji: "🎯"
              },
              {
                step: "02", 
                title: "Creative Design",
                description: "Crafting beautiful, colorful interfaces and user experiences that captivate and engage your audience.",
                gradient: "from-pink-500 to-orange-600",
                bgGradient: "from-pink-50 to-orange-50",
                emoji: "🎨"
              },
              {
                step: "03",
                title: "Launch & Growth",
                description: "Deploying your vibrant solution and continuously optimizing for maximum impact and user satisfaction.",
                gradient: "from-green-500 to-teal-600",
                bgGradient: "from-green-50 to-teal-50",
                emoji: "🚀"
              }
            ].map((process, index) => (
              <Card 
                key={process.step} 
                className={`p-10 bg-gradient-to-br ${process.bgGradient} border-0 shadow-2xl hover:shadow-2xl transition-all duration-500 text-center group hover:scale-110`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-6">{process.emoji}</div>
                <div className={`w-20 h-20 bg-gradient-to-r ${process.gradient} text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-2xl font-bold group-hover:scale-125 transition-transform duration-300 shadow-xl`}>
                  {process.step}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:scale-105 transition-transform">{process.title}</h4>
                <p className="text-gray-700 leading-relaxed font-medium text-lg">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
