
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-2xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent max-w-3xl mx-auto">
            Passionate about bridging creativity and technology 🎨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-10">
            <Card className="p-10 bg-gradient-to-br from-white via-blue-50 to-purple-50 border-0 shadow-2xl hover:shadow-blue-300 transition-all duration-500 group hover:scale-105">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 group-hover:scale-105 transition-transform">
                My Colorful Journey 🌈
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I'm an <span className="font-bold text-purple-600">enthusiastic professional</span> with a strong foundation in 
                  <span className="font-bold text-blue-600"> Artificial Intelligence</span>, 
                  <span className="font-bold text-pink-600"> Data Analytics</span>, and 
                  <span className="font-bold text-cyan-600"> UI/UX Design</span>.
                </p>
                <p className="text-lg">
                  My passion lies in creating <span className="font-bold text-orange-600">vibrant digital experiences</span> that 
                  combine <span className="font-bold text-green-600">technical excellence</span> with 
                  <span className="font-bold text-purple-600">creative innovation</span>.
                </p>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-green-400 to-blue-500 border-0 shadow-2xl hover:shadow-green-300 transition-all duration-500 text-center group hover:scale-110">
                <div className="text-5xl font-bold text-white mb-4 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-white font-bold text-lg">Colorful Projects</div>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 border-0 shadow-2xl hover:shadow-purple-300 transition-all duration-500 text-center group hover:scale-110">
                <div className="text-5xl font-bold text-white mb-4 group-hover:scale-110 transition-transform">3+</div>
                <div className="text-white font-bold text-lg">Years Creating</div>
              </Card>
            </div>
          </div>

          {/* Education & Interests */}
          <div className="space-y-10">
            <Card className="p-10 bg-gradient-to-br from-white via-cyan-50 to-blue-50 border-0 shadow-2xl hover:shadow-cyan-300 transition-all duration-500 group hover:scale-105">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-8 group-hover:scale-105 transition-transform">
                Education 🎓
              </h3>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
                <div className="pl-8">
                  <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform -translate-x-1.5"></div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    B.Tech in AI & Data Science
                  </h4>
                  <p className="text-lg font-semibold text-purple-600 mb-2">
                    C.K. College of Engineering and Data Science
                  </p>
                  <p className="text-gray-600 font-medium">2022 – 2026</p>
                </div>
              </div>
            </Card>

            <Card className="p-10 bg-gradient-to-br from-white via-pink-50 to-orange-50 border-0 shadow-2xl hover:shadow-pink-300 transition-all duration-500 group hover:scale-105">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-8 group-hover:scale-105 transition-transform">
                Colorful Interests 🎨
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'Machine Learning', color: 'from-blue-500 to-purple-600' },
                  { name: 'Data Visualization', color: 'from-green-500 to-teal-600' },
                  { name: 'UI/UX Research', color: 'from-pink-500 to-rose-600' },
                  { name: 'IoT Solutions', color: 'from-orange-500 to-red-600' },
                  { name: 'Web Development', color: 'from-cyan-500 to-blue-600' },
                  { name: 'Design Systems', color: 'from-purple-500 to-indigo-600' }
                ].map((interest) => (
                  <span 
                    key={interest.name}
                    className={`px-6 py-3 bg-gradient-to-r ${interest.color} text-white text-sm font-bold rounded-2xl hover:scale-110 transition-all duration-300 cursor-default shadow-lg`}
                  >
                    {interest.name}
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
