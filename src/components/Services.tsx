
import { Card } from '@/components/ui/card';
import { Code, Circle-Arrow-Up, Square-Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Crafting user-friendly, visually appealing interfaces using Figma and Adobe XD. Creating intuitive designs that enhance user experience and drive engagement.",
      icon: <Square-Code className="w-12 h-12" />,
      color: "tech-blue",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"]
    },
    {
      title: "Data Analytics",
      description: "Building comprehensive data dashboards and uncovering actionable insights from complex datasets to drive informed business decisions.",
      icon: <Circle-Arrow-Up className="w-12 h-12" />,
      color: "tech-green",
      features: ["Data Visualization", "Statistical Analysis", "Dashboard Creation", "Business Intelligence", "Reporting"]
    },
    {
      title: "Machine Learning Solutions",
      description: "Developing AI models for real-world business challenges, from predictive analytics to automated decision-making systems.",
      icon: <Code className="w-12 h-12" />,
      color: "purple-400",
      features: ["Predictive Modeling", "Classification", "Regression Analysis", "Neural Networks", "Model Deployment"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-tech-green bg-clip-text text-transparent">
              Services I Offer
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-tech-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto">
            Expertise Services! Let's check it out
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-8 bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 via-transparent to-${service.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-${service.color}/20 text-${service.color} mb-6 group-hover:bg-${service.color}/30 transition-all duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-orbitron font-bold text-white mb-4 group-hover:text-tech-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 font-poppins text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white font-poppins">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300 font-poppins">
                        <div className={`w-2 h-2 rounded-full bg-${service.color} mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600 backdrop-blur-sm">
            <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-xl text-gray-300 font-poppins mb-6">
              Let's collaborate to bring your vision to life with cutting-edge technology and creative design.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-tech-blue to-purple-600 hover:from-tech-blue/80 hover:to-purple-600/80 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 font-poppins"
            >
              Get Started Today
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
