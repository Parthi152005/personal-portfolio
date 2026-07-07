import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, BarChart3, Brain, Eye, Sparkles, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6 text-[#2563EB]" />,
      skills: ["Python", "Java 8", "SQL", "R", "JavaScript", "HTML"],
    },
    {
      title: "Data Analytics",
      icon: <BarChart3 className="w-6 h-6 text-[#10B981]" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau"],
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6 text-[#F59E0B]" />,
      skills: ["Scikit-Learn", "Regression", "Classification", "Clustering"],
    },
    {
      title: "Deep Learning",
      icon: <Brain className="w-6 h-6 text-[#EF4444]" />,
      skills: ["TensorFlow", "Neural Networks"],
    },
    {
      title: "Computer Vision",
      icon: <Eye className="w-6 h-6 text-[#8B5CF6]" />,
      skills: ["OpenCV", "Image Processing"],
    },
    {
      title: "Generative AI",
      icon: <Sparkles className="w-6 h-6 text-[#EC4899]" />,
      skills: ["LLMs", "RAG", "Prompt Engineering"],
    },
    {
      title: "Databases",
      icon: <Brain className="w-6 h-6 text-[#14B8A6]" />,
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-[#6366F1]" />,
      skills: ["GitHub", "VS Code", "Streamlit", "React", "Penpot", "UI/UX Design"],
    }
  ];

  return (
    <section id="skills" className="py-32 relative bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-space font-bold mb-6 text-[#F9FAFB] tracking-tighter"
          >
            Technical Expertise
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-20 h-1 bg-[#2563EB] mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card p-8 h-full rounded-2xl hover:bg-[#1F2937]/90 transition-all duration-300">
                <div className="flex items-center mb-8 border-b border-[#374151] pb-4">
                  <div className="p-3 bg-[#0B1220] rounded-xl shadow-inner mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-space font-bold text-[#F9FAFB] tracking-tight">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="px-4 py-2 bg-[#111827] border border-[#374151] text-[#D1D5DB] hover:text-[#F9FAFB] hover:border-[#2563EB] hover:bg-[#2563EB]/10 rounded-lg text-sm font-inter font-medium transition-all cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;