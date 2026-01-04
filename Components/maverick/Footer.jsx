import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <span className="text-3xl font-black text-white">MAVERICK</span>
              <span className="text-3xl font-light text-orange-500"> SPORTS</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Where passion meets precision. Training champions in Football and Badminton since 2018.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Programs", "Pricing", "Coaches", "Achievements", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {[
                "Football - Grassroots",
                "Football - Development",
                "Football - Elite",
                "Badminton - Beginners",
                "Badminton - Advanced",
                "Private Coaching"
              ].map((program, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-300">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-slate-400">123 Champion Way, Sports City, SC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-slate-400">hello@mavericksports.com</span>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-6 p-4 bg-slate-800 rounded-xl">
              <h5 className="text-white font-medium mb-2">Training Hours</h5>
              <p className="text-slate-400 text-sm">Mon - Sat: 6:00 AM - 9:00 PM</p>
              <p className="text-slate-400 text-sm">Sunday: 7:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Maverick Sports Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}