import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Building2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Structural Engineering',
    'Architectural Design',
    'Project Management',
    'Regulatory Compliance',
    'Construction Administration',
    'Forensic Engineering'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#careers' },
    { name: 'Privacy Policy', href: '#privacy' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/image copy.png" 
                alt="MY Consultant" 
                className="h-10 w-auto brightness-0 invert"
              />
              <div className="ml-3">
                <div className="text-slate-400 text-xs">Engineers & Architects</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Professional engineering and architectural consulting services with over 8 years of experience in delivering exceptional construction solutions across Ethiopia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">+251 911 490 208</p>
                  <p className="text-slate-400 text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">info@myconsultant.com</p>
                  <p className="text-slate-400 text-sm">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Golagol Building, 8th Floor</p>
                  <p className="text-slate-400 text-sm">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Licenses */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-white font-semibold mb-4">Professional Certifications</h4>
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="flex items-center">
                  <Building2 className="w-4 h-4 mr-2" />
                  Licensed Engineers
                </span>
                <span>LEED AP</span>
                <span>PMP Certified</span>
                <span>OSHA 30</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">
                Licensed & Insured | Equal Opportunity Employer
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} MY Consultant. All rights reserved. | 
            <a href="#privacy" className="hover:text-amber-400 transition-colors ml-1">Privacy Policy</a> | 
            <a href="#terms" className="hover:text-amber-400 transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;