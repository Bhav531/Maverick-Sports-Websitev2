import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProgramsSection() {
  const programs = [
    {
      sport: "Football",
      tagline: "Master the Beautiful Game",
      image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&auto=format&fit=crop&q=80",
      color: "from-lime-500 to-green-600",
      features: [
        "Technical ball mastery & control",
        "Tactical awareness training",
        "Position-specific coaching",
        "Match simulation & strategy",
        "Fitness & agility programs",
        "Mental conditioning"
      ],
      levels: ["Grassroots (5-8 yrs)", "Development (9-14 yrs)", "Advanced (15-18 yrs)", "Elite & Adults"]
    },
    {
      sport: "Badminton",
      tagline: "Speed, Precision, Victory",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop&q=80",
      color: "from-orange-500 to-red-600",
      features: [
        "Stroke technique mastery",
        "Footwork & court movement",
        "Singles & doubles tactics",
        "Smash & defense drills",
        "Tournament preparation",
        "Video analysis sessions"
      ],
      levels: ["Beginners (All ages)", "Intermediate", "Advanced", "Tournament Ready"]
    }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-orange-400 font-semibold tracking-wider uppercase text-sm mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Path to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-lime-400">
              Greatness
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            World-class training programs designed for all skill levels. Whether you're taking your 
            first steps or aiming for professional excellence, we have the perfect program for you.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500"
            >
              {/* Program Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={program.image}
                  alt={program.sport}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                {/* Sport Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm">
                    {program.sport}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{program.sport}</h3>
                  <p className="text-white/80 text-lg">{program.tagline}</p>
                </div>
              </div>

              {/* Program Details */}
              <div className="p-8">
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Levels */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Training Levels</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.levels.map((level, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-slate-300 text-sm">
                        {level}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full bg-gradient-to-r ${program.color} text-white rounded-full py-6 font-semibold group/btn`}
                >
                  <span>Explore {program.sport} Programs</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}