import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Artificial Intelligence Intern",
      company: "Cavin's Infotech",
      duration: "Ongoing",
      description: "Working as an intern/trainee in the AI domain, gaining hands-on experience in AI/ML development and real-world projects. Worked on the following key areas:",
      highlights: [
        "Performed RFM (Recency, Frequency, Monetary) analysis on customer data.",
        "Developed an AI live CCTV monitoring system with custom alerts: persons outside the shop for >5 mins, groups sitting for >15 mins, employees in the dining area for >5 mins, and employees not wearing required caps or gloves.",
        "Processed and analyzed Cavin's product real-time data."
      ],
      technologies: ["AI", "Machine Learning", "Python", "Computer Vision", "Data Analytics"]
    }
  ];

  return (
    <section id="experience" className="py-32 relative bg-[#0B1220]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-space font-bold mb-6 text-[#F9FAFB] tracking-tighter"
          >
            Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-20 h-1 bg-[#2563EB] mx-auto rounded-full"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card p-8 md:p-12 rounded-2xl hover:bg-[#1F2937]/90 transition-colors">
            <div className="relative border-l-2 border-[#374151] pl-8 space-y-12 ml-4">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#2563EB] rounded-full border-4 border-[#1F2937] shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                    <h4 className="text-xl font-space font-bold text-[#F9FAFB] tracking-tight">{exp.role}</h4>
                    <span className="text-sm font-inter font-medium text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="flex items-center text-[#D1D5DB] mb-5">
                    <Briefcase className="w-4 h-4 mr-2 text-[#9CA3AF]" />
                    <span className="font-inter font-semibold text-[#3B82F6]">{exp.company}</span>
                  </div>
                  <p className="text-[#D1D5DB] font-inter leading-[1.7] mb-5 max-w-prose">
                    {exp.description}
                  </p>
                  {exp.highlights && (
                    <ul className="list-disc list-outside font-inter text-[#D1D5DB] space-y-3 mb-8 ml-4 max-w-prose">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="leading-[1.7] text-[15px]">{highlight}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-[#111827] border border-[#374151] text-[#9CA3AF] text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
