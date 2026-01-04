import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Star } from 'lucide-react';

export default function CoachesSection() {
  const coaches = [
    {
      name: "Marcus Rodriguez",
      role: "Head Football Coach",
      specialty: "Technical & Tactical Training",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      achievements: ["Former Pro Player", "UEFA A License", "200+ Players Trained"]
    },
    {
      name: "Sarah Chen",
      role: "Head Badminton Coach",
      specialty: "Singles & Doubles Strategy",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
      achievements: ["National Champion", "BWF Certified", "Olympic Training Experience"]
    },
    {
      name: "David Thompson",
      role: "Youth Development Director",
      specialty: "Grassroots Football",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
      achievements: ["Child Psychology Certified", "FA Youth License", "500+ Kids Mentored"]
    },
    {
      name: "Priya Sharma",
      role: "Performance Coach",
      specialty: "Fitness & Conditioning",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&auto=format&fit=crop&q=80",
      achievements: ["Sports Science Degree", "NSCA Certified", "Strength & Conditioning Specialist"]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-lime-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4">
            Meet Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            World-Class
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-lime-500"> Coaches</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our coaching staff brings decades of professional experience, international certifications, 
            and a genuine passion for developing the next generation of champions.
          </p>
        </motion.div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative mb-6 rounded-3xl overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <span className="text-white text-sm font-medium">{coach.experience}</span>
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{coach.name}</h3>
                  <p className="text-orange-400 font-medium text-sm mb-2">{coach.role}</p>
                  <p className="text-white/70 text-sm">{coach.specialty}</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                {coach.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-slate-600 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Award, value: "50+", label: "Combined Years of Experience" },
              { icon: Users, value: "2,500+", label: "Athletes Successfully Trained" },
              { icon: Star, value: "100%", label: "Certified Professionals" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-orange-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}