
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extralight text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-20 h-0.5 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about bridging the gap between data and design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-10">
            <Card className="p-10 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-500 group">
              <h3 className="text-2xl font-light text-gray-900 mb-6 group-hover:text-gray-700 transition-colors">
                My Journey
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  I'm an enthusiastic professional with a strong foundation in Artificial Intelligence, 
                  Data Analytics, and UI/UX Design. I enjoy combining data-driven insights with creative 
                  design to solve complex problems and deliver engaging user experiences.
                </p>
                <p className="text-lg">
                  My passion lies in bridging the gap between technical analytics and human-centered 
                  design, creating solutions that are both powerful and intuitive.
                </p>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center group hover:scale-105">
                <div className="text-4xl font-extralight text-gray-900 mb-3 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </Card>
              <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 text-center group hover:scale-105">
                <div className="text-4xl font-extralight text-gray-900 mb-3 group-hover:scale-110 transition-transform">3+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </Card>
            </div>
          </div>

          {/* Education & Interests */}
          <div className="space-y-10">
            <Card className="p-10 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-500 group">
              <h3 className="text-2xl font-light text-gray-900 mb-8 group-hover:text-gray-700 transition-colors">
                Education
              </h3>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-100"></div>
                <div className="pl-8">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-gray-900 rounded-full transform -translate-x-0.75"></div>
                  <h4 className="text-xl font-medium text-gray-900 mb-3">
                    B.Tech in Artificial Intelligence and Data Science
                  </h4>
                  <p className="text-gray-600 font-medium mb-2">
                    C.K. College of Engineering and Data Science
                  </p>
                  <p className="text-gray-500">2022 – 2026</p>
                </div>
              </div>
            </Card>

            <Card className="p-10 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-500 group">
              <h3 className="text-2xl font-light text-gray-900 mb-8 group-hover:text-gray-700 transition-colors">
                Interests
              </h3>
              <div className="flex flex-wrap gap-4">
                {['Machine Learning', 'Data Visualization', 'UI/UX Research', 'IoT Solutions', 'Web Development', 'Design Systems'].map((interest) => (
                  <span 
                    key={interest}
                    className="px-4 py-2 bg-gray-50 text-gray-700 text-sm rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-default border border-gray-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
