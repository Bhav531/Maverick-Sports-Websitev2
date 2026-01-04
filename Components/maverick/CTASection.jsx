import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
        </div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Begin<br />
              Your Champion<br />
              <span className="text-yellow-300">Journey?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of athletes who have transformed their potential into excellence. 
              Your path to greatness starts with a single step.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "hello@mavericksports.com" },
                { icon: MapPin, text: "123 Champion Way, Sports City, SC 12345" },
                { icon: Clock, text: "Mon-Sat: 6:00 AM - 9:00 PM" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/90">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Book a Free Trial</h3>
            <p className="text-slate-500 mb-8">Experience our world-class training firsthand.</p>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500 py-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500 py-6"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <Input 
                  type="email"
                  placeholder="john@example.com" 
                  className="rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500 py-6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <Input 
                  type="tel"
                  placeholder="+1 (555) 000-0000" 
                  className="rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500 py-6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Interested In</label>
                <select className="w-full rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-orange-500 py-3 px-4 text-slate-700">
                  <option value="">Select a program</option>
                  <option value="football">Football Training</option>
                  <option value="badminton">Badminton Training</option>
                  <option value="both">Both Programs</option>
                </select>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 rounded-xl font-semibold text-lg shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Claim Your Free Trial</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>

            <p className="text-center text-slate-400 text-sm mt-6">
              No commitment required. Start your journey today.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}