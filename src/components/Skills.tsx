
import { Card } from '@/components/ui/card';
import { Code, TrendingUp, Database, Palette, Brain, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-7 h-7" />,
      skills: ["Python", "SQL", "Java", "R"],
      color: "from-blue-50 to-indigo-50"
    },
    {
      title: "Databases",
      icon: <Database className="w-7 h-7" />,
      skills: ["MongoDB", "MySQL"],
      color: "from-green-50 to-emerald-50"
    },
    {
      title: "Analytics Tools",
      icon: <TrendingUp className="w-7 h-7" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      color: "from-purple-50 to-violet-50"
    },
    {
      title: "ML Frameworks",
      icon: <Brain className="w-7 h-7" />,
      skills: ["Scikit-learn", "TensorFlow", "Keras"],
      color: "from-orange-50 to-red-50"
    },
    {
      title: "Visualization",
      icon: <BarChart className="w-7 h-7" />,
      skills: ["Tableau", "Power BI"],
      color: "from-teal-50 to-cyan-50"
    },
    {
      title: "Design Tools",
      icon: <Palette className="w-7 h-7" />,
      skills: ["Figma", "Adobe XD"],
      color: "from-pink-50 to-rose-50"
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extralight text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-0.5 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data-driven innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`p-8 bg-gradient-to-br ${category.color} border-0 shadow-lg hover:shadow-xl transition-all duration-500 group hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white/80 rounded-xl text-gray-700 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 ml-4 group-hover:text-gray-700 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-gray-400 mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-3xl font-light text-gray-900 mb-12">
            Technical Proficiencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "Machine Learning", "Deep Learning", "Data Mining", "Statistical Analysis",
              "Web Scraping", "API Development", "Cloud Computing", "Version Control",
              "Agile Development", "Problem Solving", "Team Collaboration", "Project Management"
            ].map((skill, index) => (
              <span 
                key={skill}
                className="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-gray-50 hover:scale-105 transition-all duration-300 cursor-default border border-gray-200 shadow-sm hover:shadow-md font-medium"
                style={{ animationDelay: `${index * 50}ms` }}
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
