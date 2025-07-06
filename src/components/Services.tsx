import React from 'react';
import { Building, Calculator, FileCheck, Users, Wrench, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Structural Engineering',
      description: 'Comprehensive structural analysis, design, and evaluation services for all types of construction projects.',
      features: [
        'Structural Analysis & Design',
        'Foundation Engineering',
        'Seismic & Wind Load Analysis',
        'Building Code Compliance',
        'Structural Inspections',
        'Retrofit & Rehabilitation'
      ],
      color: 'amber'
    },
    {
      icon: Calculator,
      title: 'Architectural Design',
      description: 'Innovative architectural solutions that balance functionality, aesthetics, and sustainability.',
      features: [
        'Conceptual Design',
        'Construction Documents',
        'Space Planning & Programming',
        'Sustainable Design Solutions',
        '3D Modeling & Visualization',
        'Interior Design Coordination'
      ],
      color: 'indigo'
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'End-to-end project management ensuring successful delivery within scope, schedule, and budget.',
      features: [
        'Project Planning & Scheduling',
        'Budget Management',
        'Quality Control & Assurance',
        'Risk Management',
        'Stakeholder Coordination',
        'Progress Monitoring'
      ],
      color: 'slate'
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Navigate complex regulatory requirements and ensure full compliance with all applicable codes.',
      features: [
        'Building Code Analysis',
        'Permit Application Support',
        'Zoning Compliance Review',
        'Accessibility Compliance',
        'Environmental Regulations',
        'Safety Code Compliance'
      ],
      color: 'green'
    },
    {
      icon: Wrench,
      title: 'Construction Administration',
      description: 'Professional oversight and support throughout the construction phase of your project.',
      features: [
        'Construction Observation',
        'Shop Drawing Review',
        'RFI Response',
        'Change Order Management',
        'Progress Inspections',
        'Commissioning Support'
      ],
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Forensic Engineering',
      description: 'Expert investigation and analysis of construction failures, defects, and disputes.',
      features: [
        'Failure Analysis',
        'Expert Witness Services',
        'Damage Assessment',
        'Litigation Support',
        'Insurance Claims Support',
        'Technical Reporting'
      ],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      amber: 'bg-amber-100 text-amber-600 border-amber-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
      slate: 'bg-slate-100 text-slate-600 border-slate-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200'
    };
    return colors[color as keyof typeof colors] || colors.amber;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Professional <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive engineering and architectural consulting services tailored to meet 
            the unique requirements of each project across Ethiopia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 border ${getColorClasses(service.color)}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-8 pb-8">
                <button className="w-full bg-slate-50 hover:bg-amber-50 text-slate-700 hover:text-amber-600 py-3 rounded-lg font-semibold transition-all duration-300 border border-slate-200 hover:border-amber-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Every project is unique. Let us develop a tailored approach that meets your specific requirements and objectives.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;