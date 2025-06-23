
import { Card } from '@/components/ui/card';
import { Code, TrendingUp, Database, Palette, Brain, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "SQL", "Java", "R"],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: ["MongoDB", "MySQL"],
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50"
    },
    {
      title: "Analytics Tools",
      icon: <TrendingUp className="w-8 h-8" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      title: "ML Frameworks",
      icon: <Brain className="w-8 h-8" />,
      skills: ["Scikit-learn", "TensorFlow", "Keras"],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      title: "Visualization",
      icon: <BarChart className="w-8 h-8" />,
      skills: ["Tableau", "Power BI"],
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    {
      title: "Design Tools",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Figma", "Adobe XD"],
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-cyan-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent max-w-3xl mx-auto">
            A vibrant toolkit for innovation 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`p-8 bg-gradient-to-br ${category.bgGradient} border-0 shadow-2xl hover:shadow-2xl transition-all duration-500 group hover:scale-110`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl text-white group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4 group-hover:scale-105 transition-transform">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center group/skill hover:scale-105 transition-transform">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient} mr-4 flex-shrink-0 group-hover/skill:scale-125 transition-transform`}></div>
                    <span className="font-bold text-gray-800 group-hover/skill:text-gray-900">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
            Technical Superpowers ⚡
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              { name: "Machine Learning", gradient: "from-blue-500 to-purple-600" },
              { name: "Deep Learning", gradient: "from-purple-500 to-pink-600" },
              { name: "Data Mining", gradient: "from-green-500 to-teal-600" },
              { name: "Statistical Analysis", gradient: "from-orange-500 to-red-600" },
              { name: "Web Scraping", gradient: "from-cyan-500 to-blue-600" },
              { name: "API Development", gradient: "from-indigo-500 to-purple-600" },
              { name: "Cloud Computing", gradient: "from-pink-500 to-rose-600" },
              { name: "Version Control", gradient: "from-teal-500 to-green-600" },
              { name: "Agile Development", gradient: "from-yellow-500 to-orange-600" },
              { name: "Problem Solving", gradient: "from-red-500 to-pink-600" },
              { name: "Team Collaboration", gradient: "from-blue-500 to-cyan-600" },
              { name: "Project Management", gradient: "from-violet-500 to-purple-600" }
            ].map((skill, index) => (
              <span 
                key={skill.name}
                className={`px-8 py-4 bg-gradient-to-r ${skill.gradient} text-white rounded-2xl hover:scale-110 transition-all duration-300 cursor-default shadow-lg hover:shadow-xl font-bold text-lg`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
