import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Trophy, Star, Code, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Dr. Kalam Young Achiever Award",
      date: "2024",
      description: "Participated and recognized for outstanding young talent.",
      icon: <Trophy className="w-6 h-6 text-[#10B981]" />
    },
    {
      title: "NCC 'A' Certificate",
      date: "Recent",
      description: "Demonstrated exemplary leadership, discipline, and teamwork through rigorous military training.",
      icon: <Star className="w-6 h-6 text-[#3B82F6]" />
    },
    {
      title: "Open-Source Initiatives",
      date: "Ongoing",
      description: "Participated in FOSS United and other open-source initiatives.",
      icon: <Code className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      title: "Arweave India 2025",
      date: "Recent",
      description: "Attended at Bangalore Science Gallery, exploring decentralized storage, Web3 innovations, and the impact of permanent data on industries.",
      icon: <Target className="w-6 h-6 text-[#EF4444]" />
    },
    {
      title: "Competitive Programming",
      date: "Ongoing",
      description: "100+ problems solved on LeetCode focusing on SQL and DSA.",
      icon: <Code className="w-6 h-6 text-[#8B5CF6]" />
    }
  ];

  return (
    <section id="achievements" className="py-32 relative bg-[#0B1220]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-space font-bold mb-6 text-[#F9FAFB] tracking-tighter"
          >
            Achievements
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
              {achievements.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[#1F2937] ${index === 0 ? 'bg-[#2563EB] shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'bg-[#374151]'}`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-[#0B1220] shadow-inner shrink-0 hidden md:block">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-space font-bold text-[#F9FAFB] tracking-tight">{item.title}</h4>
                    </div>
                    <span className="text-sm font-inter font-medium text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full w-fit">
                      {item.date}
                    </span>
                  </div>
                  
                  <p className="text-[#D1D5DB] font-inter leading-[1.7] max-w-prose">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
