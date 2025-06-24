
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, TrendingUp, Shield, Sprout, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sales Forecasting using Machine Learning",
      description: "Analyzes historical sales data using machine learning algorithms to predict future trends. Optimizes inventory management and demand planning for better business efficiency. Enhances revenue forecasting and decision-making with data-driven insights.",
      tech: ["Machine Learning", "Python", "Data Analytics", "Forecasting"],
      category: "Machine Learning",
      icon: <TrendingUp className="w-10 h-10" />,
      gradient: "from-blue-600 to-indigo-700",
      bgGradient: "from-blue-50 to-indigo-50",
      emoji: "📈"
    },
    {
      title: "AI-based Fall Detection System for Elderly Safety",
      description: "Uses AI and computer vision to detect falls in real-time with high accuracy. Integrates IoT sensors to monitor movement and identify sudden impacts. Sends instant alerts to caregivers for quick emergency response.",
      tech: ["AI/Computer Vision", "IoT Sensors", "Real-time Processing", "Alert Systems"],
      category: "AI & Healthcare",
      icon: <Shield className="w-10 h-10" />,
      gradient: "from-indigo-600 to-slate-700",
      bgGradient: "from-indigo-50 to-slate-50",
      emoji: "🛡️"
    },
    {
      title: "AI-Based Smart Integration Farming System",
      description: "Implements machine learning to predict crop health and optimize irrigation. Solar-powered sensors monitor soil moisture, temperature, and environmental conditions. Enhances agricultural efficiency by automating decision-making and resource management.",
      tech: ["Machine Learning", "IoT Sensors", "Solar Power", "Automation"],
      category: "Smart Agriculture",
      icon: <Sprout className="w-10 h-10" />,
      gradient: "from-slate-600 to-blue-700",
      bgGradient: "from-slate-50 to-blue-50",
      emoji: "🌱"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions leveraging AI, machine learning, and data analytics to solve real-world challenges
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`overflow-hidden bg-gradient-to-br ${project.bgGradient} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:scale-105`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Header */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-4xl mb-2">{project.emoji}</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
              </div>

              <div className="p-6">
                <div className={`text-xs font-semibold mb-3 uppercase tracking-wider bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.category}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:scale-105 transition-transform leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs rounded-lg font-medium shadow-sm hover:scale-105 transition-transform`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-lg hover:scale-105 transition-all duration-300 font-medium shadow-md text-xs"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white rounded-lg hover:scale-105 transition-all duration-300 font-medium shadow-md text-xs`}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-8">
            Upcoming Projects
          </h3>
          
          <Card className="p-8 bg-gradient-to-br from-white via-indigo-50 to-blue-50 border-2 border-indigo-100 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl mr-4">🚀</div>
              <Database className="w-12 h-12 text-indigo-600" />
            </div>
            
            <h4 className="text-2xl font-bold text-slate-800 mb-4">
              Unified Data Analytics Platform
            </h4>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-3xl mx-auto">
              An integrated application combining the power of <span className="font-semibold text-indigo-600">Python</span>, 
              <span className="font-semibold text-blue-600"> Power BI</span>, 
              <span className="font-semibold text-indigo-600"> Tableau</span>, 
              <span className="font-semibold text-slate-600"> R</span>, and 
              <span className="font-semibold text-blue-600"> SQL</span> in a single, seamless platform for comprehensive data analytics and visualization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {["Python", "Power BI", "Tableau", "R Programming", "SQL", "Data Visualization", "Analytics"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 rounded-full font-semibold text-sm">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
              Coming Soon
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
