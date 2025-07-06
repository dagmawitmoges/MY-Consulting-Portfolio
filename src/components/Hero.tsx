import { ArrowRight, CheckCircle, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  const achievements = [
    { icon: Award, text: '8+ Years Experience' },
    { icon: Users, text: '200+ Projects Completed' },
    { icon: Clock, text: 'On-Time Delivery' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <img
          src="https://images.pexels.com/photos/3862143/pexels-photo-3862143.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Modern Architecture and Engineering"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium backdrop-blur-sm">
                Professional Engineering & Architecture
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Excellence in
              <span className="block text-amber-400">Engineering &</span>
              <span className="block">Architecture</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Delivering innovative engineering solutions and architectural excellence 
              for complex construction projects across Ethiopia. Your trusted partner from concept to completion.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Structural Engineering & Analysis',
                'Architectural Design & Planning',
                'Project Management & Oversight',
                'Regulatory Compliance & Permitting'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              >
                View Our Work
              </a>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <achievement.icon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-sm text-slate-300 font-medium">{achievement.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="lg:ml-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Why Choose MY Consultant?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-slate-300">Projects Completed</span>
                  <span className="text-2xl font-bold text-amber-400">200+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-slate-300">Years of Experience</span>
                  <span className="text-2xl font-bold text-amber-400">8+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-slate-300">Client Satisfaction</span>
                  <span className="text-2xl font-bold text-amber-400">100%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-slate-300">Licensed Engineers</span>
                  <span className="text-2xl font-bold text-amber-400">10+</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-slate-300 text-center text-sm">
                  "Trusted by leading developers and contractors across Ethiopia"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;