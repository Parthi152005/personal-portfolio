
import { Card } from '@/components/ui/card';
import { Code, TrendingUp, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Crafting user-friendly, visually appealing interfaces using Figma and Adobe XD. Creating intuitive designs that enhance user experience and drive engagement.",
      icon: <Database className="w-8 h-8" />,
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"]
    },
    {
      title: "Data Analytics", 
      description: "Building comprehensive data dashboards and uncovering actionable insights from complex datasets to drive informed business decisions.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Data Visualization", "Statistical Analysis", "Dashboard Creation", "Business Intelligence", "Reporting"]
    },
    {
      title: "Machine Learning Solutions",
      description: "Developing AI models for real-world business challenges, from predictive analytics to automated decision-making systems.",
      icon: <Code className="w-8 h-8" />,
      features: ["Predictive Modeling", "Classification", "Regression Analysis", "Neural Networks", "Model Deployment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Services I Offer
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise Services! Let's check it out
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="p-8 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg text-gray-700 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-base font-medium text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-white border-0 shadow-sm">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Let's collaborate to bring your vision to life with cutting-edge technology and creative design.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-none text-base font-normal transition-colors duration-200"
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
