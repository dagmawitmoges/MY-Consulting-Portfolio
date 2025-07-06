import { Shield, Award, Users, Target, Building2, Briefcase } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Unwavering commitment to ethical practices and transparent communication'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering superior quality in every project through meticulous attention to detail'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to achieve shared vision and objectives'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Accurate analysis and precise execution in all engineering solutions'
    }
  ];

  const certifications = [
    'Professional Engineer (PE) Licensed',
    'LEED Accredited Professional',
    'Project Management Professional (PMP)',
    'OSHA 30-Hour Construction Safety',
    'ICC Building Inspector Certified',
    'Structural Engineering Institute Member'
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            About <span className="text-amber-600">MY Consultant</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A legacy of engineering excellence and architectural innovation spanning over eight years
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Engineering the Future of Construction
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Since 2016, MY Consultant has been at the forefront of construction consulting, 
                providing comprehensive engineering and architectural services to clients across 
                commercial, residential, and industrial sectors.
              </p>
              <p>
                Our multidisciplinary team of licensed engineers, certified architects, and 
                project management professionals brings together years of combined expertise 
                to tackle the most complex construction challenges.
              </p>
              <p>
                We pride ourselves on delivering innovative solutions that not only meet but 
                exceed industry standards, ensuring every project is completed safely, efficiently, 
                and within budget.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <Building2 className="w-8 h-8 text-amber-600 mb-3" />
                <div className="text-2xl font-bold text-slate-900">200+</div>
                <div className="text-slate-600 text-sm">Projects Delivered</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                <Briefcase className="w-8 h-8 text-amber-600 mb-3" />
                <div className="text-2xl font-bold text-slate-900">8+</div>
                <div className="text-slate-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-slate-800/20 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Professional Team"
              className="relative rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Professional Certifications & Memberships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-slate-50 rounded-lg">
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-slate-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;