import { Card } from '@/components/ui/card';
const About = () => {
  return <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Passionate AI & Data Science professional dedicated to creating innovative solutions.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="space-y-8">
            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                Professional Journey
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I'm a dedicated <span className="font-semibold text-blue-600">AI & Data Science</span> professional 
                  with expertise in <span className="font-semibold text-indigo-600">Machine Learning</span>, 
                  <span className="font-semibold text-purple-600"> Data Analytics</span>, and 
                  <span className="font-semibold text-cyan-600"> UI/UX Design</span>.
                </p>
                <p className="text-lg">
                  My focus is on delivering <span className="font-semibold text-green-600">data-driven solutions</span> that 
                  create measurable business impact through <span className="font-semibold text-orange-600">innovative technology</span> 
                  and <span className="font-semibold text-pink-600">user-centered design</span>.
                </p>
              </div>
            </Card>

            {/* Key Strengths */}
            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                Key Strengths
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[{
                name: 'Problem Solving',
                color: 'from-blue-500 to-cyan-500'
              }, {
                name: 'Team Leadership',
                color: 'from-purple-500 to-pink-500'
              }, {
                name: 'Innovation',
                color: 'from-green-500 to-teal-500'
              }, {
                name: 'Communication',
                color: 'from-orange-500 to-red-500'
              }].map(strength => <div key={strength.name} className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${strength.color} mr-3`}></div>
                    <span className="font-semibold text-gray-800">{strength.name}</span>
                  </div>)}
              </div>
            </Card>
          </div>

          {/* Education & Professional Development */}
          <div className="space-y-8">
            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-3"></div>
                Education
              </h3>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-teal-600"></div>
                <div className="pl-8">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full transform -translate-x-1.5"></div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    B.Tech in AI & Data Science
                  </h4>
                  <p className="text-lg font-semibold text-blue-600 mb-1">C.K. College of Engineering and technology</p>
                  <p className="text-gray-600 font-medium">2022 – 2026</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-3">
                {[{
                name: 'Machine Learning',
                color: 'from-blue-500 to-purple-600'
              }, {
                name: 'Data Analysis',
                color: 'from-green-500 to-teal-600'
              }, {
                name: 'UI/UX Design',
                color: 'from-pink-500 to-rose-600'
              }, {
                name: 'Python Development',
                color: 'from-orange-500 to-red-600'
              }, {
                name: 'Database Management',
                color: 'from-cyan-500 to-blue-600'
              }, {
                name: 'Project Management',
                color: 'from-purple-500 to-indigo-600'
              }].map(competency => <span key={competency.name} className={`px-4 py-2 bg-gradient-to-r ${competency.color} text-white text-sm font-semibold rounded-full hover:scale-105 transition-transform cursor-default shadow-md`}>
                    {competency.name}
                  </span>)}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;