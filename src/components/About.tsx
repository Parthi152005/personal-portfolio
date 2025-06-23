
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <Card className="p-8 bg-white border-0 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                I'm an enthusiastic professional with a strong foundation in Artificial Intelligence, 
                Data Analytics, and UI/UX Design. I enjoy combining data-driven insights with creative 
                design to solve complex problems and deliver engaging user experiences.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                My passion lies in bridging the gap between technical analytics and human-centered 
                design, creating solutions that are both powerful and intuitive.
              </p>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-white border-0 shadow-sm text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Projects Completed</div>
              </Card>
              <Card className="p-6 bg-white border-0 shadow-sm text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </Card>
            </div>
          </div>

          {/* Education & Interests */}
          <div className="space-y-8">
            <Card className="p-8 bg-white border-0 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">
                Education
              </h3>
              <div className="border-l-2 border-gray-200 pl-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  B.Tech in Artificial Intelligence and Data Science
                </h4>
                <p className="text-gray-600 font-medium mb-1">
                  C.K. College of Engineering and Data Science
                </p>
                <p className="text-gray-500">2022 – 2026</p>
              </div>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-6">
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Machine Learning', 'Data Visualization', 'UI/UX Research', 'IoT Solutions', 'Web Development', 'Design Systems'].map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
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
