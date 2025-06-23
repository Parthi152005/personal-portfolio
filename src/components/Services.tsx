
import { Card } from '@/components/ui/card';
import { Palette, TrendingUp, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating stunning, colorful interfaces that captivate users and deliver exceptional experiences through creative design and user research.",
      icon: <Palette className="w-12 h-12" />,
      features: ["User Research", "Colorful Wireframing", "Interactive Prototyping", "Design Systems", "Usability Testing"],
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      emoji: "🎨"
    },
    {
      title: "Data Analytics", 
      description: "Transforming complex data into beautiful, insightful visualizations and actionable intelligence that drives smart business decisions.",
      icon: <TrendingUp className="w-12 h-12" />,
      features: ["Data Visualization", "Statistical Magic", "Interactive Dashboards", "Business Intelligence", "Smart Reporting"],
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      emoji: "📊"
    },
    {
      title: "Machine Learning Solutions",
      description: "Building intelligent AI models that solve real-world challenges with cutting-edge algorithms and innovative approaches.",
      icon: <Brain className="w-12 h-12" />,
      features: ["Predictive Modeling", "Smart Classification", "Advanced Regression", "Neural Networks", "AI Deployment"],
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      emoji: "🤖"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-pink-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            Colorful Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-yellow-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent max-w-3xl mx-auto">
            Bringing your ideas to life with vibrant creativity! 🌈
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`p-10 bg-gradient-to-br ${service.bgGradient} border-0 shadow-2xl hover:shadow-2xl transition-all duration-500 group hover:scale-110`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{service.emoji}</div>
                <div className={`flex items-center justify-center w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-3xl text-white mx-auto group-hover:scale-125 transition-transform duration-300 shadow-xl`}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center group-hover:scale-105 transition-transform">
                {service.title}
              </h3>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center font-medium">
                {service.description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent text-center">Key Features:</h4>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors group/feature">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.gradient} mr-4 flex-shrink-0 group-hover/feature:scale-125 transition-transform`}></div>
                      <span className="font-bold text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-to-br from-white via-purple-50 to-pink-50 border-0 shadow-2xl hover:shadow-purple-300 transition-all duration-500 max-w-4xl mx-auto hover:scale-105">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Ready to Create Magic?
            </h3>
            <p className="text-2xl font-semibold text-gray-700 mb-8 leading-relaxed">
              Let's collaborate to bring your <span className="text-purple-600">colorful vision</span> to life with 
              <span className="text-pink-600"> cutting-edge technology</span> and <span className="text-cyan-600">creative brilliance</span>!
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-16 py-6 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-purple-400 tracking-wide"
            >
              Start Creating Today ✨
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
