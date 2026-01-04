import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Zap } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Precision Training",
      description: "Every drill, every session is designed with scientific precision to maximize your potential and accelerate your growth."
    },
    {
      icon: Heart,
      title: "Passion First",
      description: "We believe champions are born from genuine love for the sport. We nurture that flame and turn it into excellence."
    },
    {
      icon: Zap,
      title: "Peak Performance",
      description: "Cutting-edge techniques, world-class facilities, and personalized coaching to help you reach your absolute best."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Building Champions<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-lime-500">
                Since 2018
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Maverick Sports Academy was founded with a singular vision: to create a world-class 
              training ground where aspiring athletes could transform their dreams into reality. 
              What started as a small coaching center has grown into a premier sports institution.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our holistic approach combines technical excellence, mental fortitude, and physical 
              conditioning. We don't just train athletes – we sculpt champions who excel both on 
              and off the field.
            </p>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=80" 
                  alt="Football training"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop&q=80" 
                  alt="Badminton training"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group bg-slate-50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 p-8 rounded-3xl transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-orange-500 group-hover:bg-white rounded-2xl flex items-center justify-center transition-colors duration-500">
                    <value.icon className="w-7 h-7 text-white group-hover:text-orange-500 transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors duration-500">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}