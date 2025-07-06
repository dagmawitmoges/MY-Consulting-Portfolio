import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, Building, Users, DollarSign } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Commercial', 'Residential', 'Industrial', 'Healthcare', 'Educational'];

  const projects = [
    {
      title: 'Addis Ababa Cultural Center',
      category: 'Cultural',
      location: 'Addis Ababa, Ethiopia',
      year: '2025',
      value: '$50M',
      size: '900,000 sq ft',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A multi-purpose cultural center that showcases Ethiopian art, music, and history. It features exhibition halls, performance spaces, and community areas.',
      services: ['Architectural Design', 'Cultural Consulting', 'Project Management'],
      highlights: [
        'Sustainable building practices',
        'Local material usage',
        'Community engagement initiatives',
        'Innovative acoustic design'
      ]
    },
    {
      title: 'Bole International Airport Expansion',
      category: 'Transportation',
      location: 'Addis Ababa, Ethiopia',
      year: '2024',
      value: '$70M',
      size: '600,000 sq ft',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Expansion and modernization of the main airport in Ethiopia to accommodate increased passenger traffic and enhance facilities.',
      services: ['Structural Engineering', 'Transportation Planning', 'Sustainability Consulting'],
      highlights: [
        'Expanded runway capacity',
        'Enhanced passenger experience',
        'Energy-efficient systems',
        'Cultural integration in design'
      ]
    },
    {
      title: 'Ethiopian Renewable Energy Project',
      category: 'Energy',
      location: 'Various Locations, Ethiopia',
      year: '2023',
      value: '$30M',
      size: '500,000 sq ft',
      image: 'https://images.pexels.com/photos/3862141/pexels-photo-3862141.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A comprehensive renewable energy initiative focusing on solar and wind energy solutions to power rural communities across Ethiopia.',
      services: ['Energy Consulting', 'Sustainable Design', 'Project Management'],
      highlights: [
        'Community solar initiatives',
        'Wind farm developments',
        'Energy storage solutions',
        'Job creation for local communities'
      ]
    },
    {
      title: 'Gondar Health Complex',
      category: 'Healthcare',
      location: 'Gondar, Ethiopia',
      year: '2022',
      value: '$45M',
      size: '300,000 sq ft',
      image: 'https://images.pexels.com/photos/3862142/pexels-photo-3862142.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A modern healthcare facility designed to provide comprehensive medical services, including emergency and maternity care.',
      services: ['Healthcare Design', 'MEP Coordination', 'Project Management'],
      highlights: [
        'Advanced medical technology',
        'Patient-centered design',
        'Emergency preparedness systems',
        'Community health programs'
      ]
    },
    {
      title: 'Addis Ababa University Research Institute',
      category: 'Educational',
      location: 'Addis Ababa, Ethiopia',
      year: '2023',
      value: '$25M',
      size: '200,000 sq ft',
      image: 'https://images.pexels.com/photos/3862143/pexels-photo-3862143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A state-of-the-art research facility aimed at fostering innovation and scientific research in various disciplines.',
      services: ['Laboratory Design', 'Environmental Systems', 'Research Coordination'],
      highlights: [
        'Flexible lab spaces',
        'Collaboration areas for students',
        'Sustainable technologies',
        'Community engagement initiatives'
      ]
    },
    {
      title: 'Ethiopian Corporate Headquarters',
      category: 'Commercial',
      location: 'Addis Ababa, Ethiopia',
      year: '2021',
      value: '$40M',
      size: '500,000 sq ft',
      image: 'https://images.pexels.com/photos/3862144/pexels-photo-3862144.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A modern corporate headquarters featuring workspace designs that promote collaboration and innovation while incorporating local architectural styles.',
      services: ['Architectural Design', 'Sustainability Consulting', 'Project Management'],
      highlights: [
        'Eco-friendly materials',
        'Open workspace layouts',
        'Advanced building technologies',
        'Cultural design elements'
      ]
    }
];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing our expertise through successful project deliveries across diverse sectors and scales
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-slate-800 text-sm font-semibold rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-slate-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-slate-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>{project.value}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{project.size}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Highlights:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
                  View Project Details
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Let us bring our expertise to your next construction project. Contact us today to discuss your requirements and objectives.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;