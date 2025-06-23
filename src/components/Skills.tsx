
import { Card } from '@/components/ui/card';
import { Code, TrendingUp, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "SQL", "Java", "R"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Analytics Tools",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "ML Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: ["Scikit-learn", "TensorFlow", "Keras"]
    },
    {
      title: "Visualization",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Tableau", "Power BI"]
    },
    {
      title: "Design Tools",
      icon: <Database className="w-6 h-6" />,
      skills: ["Figma", "Adobe XD"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card 
              key={category.title}
              className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-100 rounded-lg text-gray-700">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="text-gray-600">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-light text-gray-900 mb-8">
            Technical Proficiencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Machine Learning", "Deep Learning", "Data Mining", "Statistical Analysis",
              "Web Scraping", "API Development", "Cloud Computing", "Version Control",
              "Agile Development", "Problem Solving", "Team Collaboration", "Project Management"
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
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
