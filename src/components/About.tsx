import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Target, CheckCircle2, Compass } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-space font-bold mb-6 text-[#F9FAFB] tracking-tighter"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-20 h-1 bg-[#2563EB] mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Professional Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-8 mx-auto w-full"
          >
            <Card className="glass-card p-8 md:p-10 rounded-2xl hover:bg-[#1F2937]/90 transition-colors h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-[#0B1220] rounded-xl flex items-center justify-center shadow-inner mr-4">
                    <Target className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-2xl font-space font-bold text-[#F9FAFB] tracking-tight">Professional Summary</h3>
                </div>
                <div className="space-y-6 text-[#D1D5DB] leading-[1.7] font-inter max-w-prose">
                  <p>
                    Energetic and driven learner seeking opportunities to apply skills in AI/ML, Data Analytics, software development, and UI/UX design.
                  </p>
                  <p>
                    Strong foundation in Python, SQL, and ML, with hands-on experience in dashboards, automation tools, and user-focused interfaces, and a commitment to continuous learning, creative problem-solving, collaboration, and delivering high-quality solutions.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-[#F9FAFB] mb-4">Core Focus Areas</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Machine Learning",
                    "Data Analytics",
                    "UI/UX Design",
                    "Problem Solving"
                  ].map((area) => (
                    <div key={area} className="flex items-center text-[#D1D5DB]">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] mr-2 shrink-0" />
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;