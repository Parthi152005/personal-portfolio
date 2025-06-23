
import { Card } from '@/components/ui/card';
import { Palette, TrendingUp, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Crafting user-friendly, visually appealing interfaces using Figma and Adobe XD. Creating intuitive designs that enhance user experience and drive engagement.",
      icon: <Palette className="w-10 h-10" />,
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
      color: "from-purple-50 to-indigo-50"
    },
    {
      title: "Data Analytics", 
      description: "Building comprehensive data dashboards and uncovering actionable insights from complex datasets to drive informed business decisions.",
      icon: <TrendingUp className="w-10 h-10" />,
      features: ["Data Visualization", "Statistical Analysis", "Dashboard Creation", "Business Intelligence", "Reporting"],
      color: "from-blue-50 to-cyan-50"
    },
    {
      title: "Machine Learning Solutions",
      description: "Developing AI models for real-world business challenges, from predictive analytics to automated decision-making systems.",
      icon: <Brain className="w-10 h-10" />,
      features: ["Predictive Modeling", "Classification", "Regression Analysis", "Neural Networks", "Model Deployment"],
      color: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extralight text-gray-900 mb-6">
            Services I Offer
          </h2>
          <div className="w-20 h-0.5 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise Services! Let's check it out
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`p-10 bg-gradient-to-br ${service.color} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-white/90 rounded-2xl text-gray-700 mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center group-hover:text-gray-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-base leading-relaxed mb-8 text-center">
                {service.description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-gray-900 text-center">Key Features:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gray-400 mr-4 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-white border-0 shadow-xl hover:shadow-2xl transition-shadow duration-500 max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-gray-900 mb-6">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's collaborate to bring your vision to life with cutting-edge technology and creative design.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 rounded-none text-base font-normal transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl tracking-wide"
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
