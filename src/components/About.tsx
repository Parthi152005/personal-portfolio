
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-blue to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="p-8 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <h3 className="text-2xl font-orbitron font-semibold text-tech-blue mb-4">
                My Journey
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-poppins">
                I'm an enthusiastic professional with a strong foundation in Artificial Intelligence, 
                Data Analytics, and UI/UX Design. I enjoy combining data-driven insights with creative 
                design to solve complex problems and deliver engaging user experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-poppins mt-4">
                My passion lies in bridging the gap between technical analytics and human-centered 
                design, creating solutions that are both powerful and intuitive.
              </p>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-slate-800/50 border-slate-700 text-center backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <div className="text-3xl font-orbitron font-bold text-tech-blue mb-2">15+</div>
                <div className="text-gray-300 font-poppins">Projects Completed</div>
              </Card>
              <Card className="p-6 bg-slate-800/50 border-slate-700 text-center backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <div className="text-3xl font-orbitron font-bold text-tech-green mb-2">3+</div>
                <div className="text-gray-300 font-poppins">Years Experience</div>
              </Card>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <Card className="p-8 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <h3 className="text-2xl font-orbitron font-semibold text-tech-green mb-6">
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-tech-blue pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    B.Tech in Artificial Intelligence and Data Science
                  </h4>
                  <p className="text-tech-blue font-medium mb-1">
                    C.K. College of Engineering and Data Science
                  </p>
                  <p className="text-gray-400">2022 – 2026</p>
                </div>
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-8 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <h3 className="text-2xl font-orbitron font-semibold text-purple-400 mb-6">
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Machine Learning', 'Data Visualization', 'UI/UX Research', 'IoT Solutions', 'Web Development', 'Design Systems'].map((interest) => (
                  <span 
                    key={interest}
                    className="px-4 py-2 bg-gradient-to-r from-tech-blue/20 to-purple-600/20 border border-tech-blue/30 rounded-full text-sm font-poppins text-tech-blue hover:from-tech-blue/30 hover:to-purple-600/30 transition-all duration-300"
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
