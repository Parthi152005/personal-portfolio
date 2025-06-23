
import { Card } from '@/components/ui/card';
import { Code, Circle-Arrow-Up, Square-Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-8 h-8" />,
      color: "tech-blue",
      skills: ["Python", "SQL", "Java", "R"]
    },
    {
      title: "Databases",
      icon: <Square-Code className="w-8 h-8" />,
      color: "tech-green",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Analytics Tools",
      icon: <Circle-Arrow-Up className="w-8 h-8" />,
      color: "purple-400",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "ML Frameworks",
      icon: <Code className="w-8 h-8" />,
      color: "tech-orange",
      skills: ["Scikit-learn", "TensorFlow", "Keras"]
    },
    {
      title: "Visualization",
      icon: <Circle-Arrow-Up className="w-8 h-8" />,
      color: "tech-blue",
      skills: ["Tableau", "Power BI"]
    },
    {
      title: "Design Tools",
      icon: <Square-Code className="w-8 h-8" />,
      color: "tech-green",
      skills: ["Figma", "Adobe XD"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-green to-tech-blue bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-green to-tech-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-${category.color}/20 text-${category.color} group-hover:bg-${category.color}/30 transition-all duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-orbitron font-semibold text-white ml-4">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-300 font-poppins">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? `bg-${category.color}` : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-orbitron font-semibold text-white mb-8">
            Technical Proficiencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Machine Learning", "Deep Learning", "Data Mining", "Statistical Analysis",
              "Web Scraping", "API Development", "Cloud Computing", "Version Control",
              "Agile Development", "Problem Solving", "Team Collaboration", "Project Management"
            ].map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-full text-sm font-poppins text-gray-300 hover:from-tech-blue/20 hover:to-purple-600/20 hover:border-tech-blue/50 hover:text-tech-blue transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
