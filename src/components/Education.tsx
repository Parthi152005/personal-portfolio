import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: "B.Tech in AI & Data Science",
      college: "C.K.College of Engineering and Technology, Cuddalore",
      year: "2022 - 2026",
    },
    {
      degree: "Higher Secondary",
      college: "St. David Hr. Sec. School, Cuddalore",
      year: "2020 - 2022",
    }
  ];

  return (
    <section id="education" className="py-32 relative bg-[#0B1220]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-space font-bold mb-6 text-[#F9FAFB] tracking-tighter"
          >
            Education
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
              {educationList.map((edu, index) => (
                <div key={index} className="relative">
                  <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[#1F2937] ${index === 0 ? 'bg-[#2563EB] shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'bg-[#374151]'}`}></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h4 className="text-xl font-space font-bold text-[#F9FAFB] tracking-tight">{edu.degree}</h4>
                    <span className="text-sm font-inter font-medium text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full w-fit">
                      {edu.year}
                    </span>
                  </div>
                  <div className="flex items-center text-[#D1D5DB] mt-2">
                    <BookOpen className="w-4 h-4 mr-2 text-[#9CA3AF]" />
                    <span className="font-inter font-medium text-[#9CA3AF]">{edu.college}</span>
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

export default Education;
