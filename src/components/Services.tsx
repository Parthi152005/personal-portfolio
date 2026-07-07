import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, TrendingUp, Brain, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating stunning, user-centric interfaces that captivate users and deliver exceptional experiences through creative design and thorough user research.",
      icon: <Palette className="w-8 h-8 text-[#8B5CF6]" />,
      features: ["User Research", "Wireframing", "Interactive Prototyping", "Design Systems"],
    },
    {
      title: "Data Analytics",
      description: "Transforming complex data into insightful visualizations and actionable intelligence that drives smart business decisions and optimizes performance.",
      icon: <TrendingUp className="w-8 h-8 text-[#10B981]" />,
      features: ["Data Visualization", "Statistical Analysis", "Interactive Dashboards", "Smart Reporting"],
    },
    {
      title: "Machine Learning Solutions",
      description: "Building intelligent AI models that solve real-world challenges with cutting-edge algorithms and innovative, data-driven approaches.",
      icon: <Brain className="w-8 h-8 text-[#2563EB]" />,
      features: ["Predictive Modeling", "Smart Classification", "Advanced Regression", "AI Deployment"],
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#F9FAFB]"
          >
            Services & Offerings
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-20 h-1 bg-[#2563EB] mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-lg text-[#D1D5DB] max-w-3xl mx-auto"
          >
            Delivering high-quality solutions across design, data, and artificial intelligence to bring your ideas to life.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="flex"
            >
              <Card className="glass-card p-8 rounded-2xl border-[#374151] hover:border-[#2563EB]/50 transition-all duration-300 group flex flex-col w-full">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-[#111827] rounded-2xl flex items-center justify-center border border-[#374151] shadow-inner mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#F9FAFB] mb-4 group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#D1D5DB] leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-8 border-t border-[#374151]">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-[#D1D5DB]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mr-3"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass-card max-w-4xl mx-auto p-12 border-[#374151] flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] mb-6">
              Ready to Collaborate?
            </h3>
            <p className="text-[#D1D5DB] text-lg mb-8 max-w-2xl leading-relaxed">
              Let's work together to build innovative, data-driven, and user-centric solutions. Open for freelance opportunities and full-time roles.
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-10 py-6 rounded-xl font-bold transition-all shadow-lg shadow-[#2563EB]/25"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;