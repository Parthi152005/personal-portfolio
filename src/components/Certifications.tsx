import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Data Analytics Essentials",
      organization: "Cisco",
      date: "Recent",
      icon: <Award className="w-8 h-8 text-[#2563EB]" />
    },
    {
      title: "Data Analytics Masterclass (30 Days)",
      organization: "NoviTech R&D",
      date: "Recent",
      icon: <Award className="w-8 h-8 text-[#2563EB]" />
    },
    {
      title: "No SQL, AR and VR",
      organization: "NSIC Technical Service Centre",
      date: "Recent",
      icon: <Award className="w-8 h-8 text-[#2563EB]" />
    },
    {
      title: "Data Analytics Job Simulation",
      organization: "Deloitte",
      date: "Recent",
      icon: <Award className="w-8 h-8 text-[#2563EB]" />
    }
  ];

  return (
    <section id="certifications" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-space font-bold mb-6 text-[#F9FAFB] tracking-tighter"
          >
            Certifications
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-20 h-1 bg-[#2563EB] mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card p-8 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-xl bg-[#0B1220] shadow-inner mr-4">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-space font-bold text-[#F9FAFB] leading-tight tracking-tight">{cert.title}</h3>
                    <p className="text-[#3B82F6] font-inter font-medium text-sm mt-1">{cert.organization}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-[#374151]">
                  <span className="text-[#D1D5DB] font-inter text-sm">{cert.date}</span>
                  <Button variant="ghost" className="text-[#F9FAFB] font-inter font-semibold hover:text-[#2563EB] hover:bg-transparent px-0">
                    <span className="mr-2">View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
