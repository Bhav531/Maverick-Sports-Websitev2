import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, Calendar } from 'lucide-react';

export default function WallOfGlory() {
  const championships = [
    {
      title: "National Youth Football Championship",
      year: "2024",
      position: "1st Place",
      category: "Football",
      icon: Trophy,
      color: "from-yellow-400 to-amber-500",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "State Badminton Open",
      year: "2024",
      position: "Champions",
      category: "Badminton",
      icon: Trophy,
      color: "from-yellow-400 to-amber-500",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Inter-Academy Football Cup",
      year: "2023",
      position: "Gold Medal",
      category: "Football",
      icon: Medal,
      color: "from-orange-400 to-red-500",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Regional Badminton Championship",
      year: "2023",
      position: "Winners",
      category: "Badminton",
      icon: Award,
      color: "from-lime-400 to-green-500",
      image: "https://images.unsplash.com/photo-1613918431703-aa50889e3be9?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Junior Football League",
      year: "2023",
      position: "Champions",
      category: "Football",
      icon: Trophy,
      color: "from-yellow-400 to-amber-500",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "All-India Badminton Juniors",
      year: "2022",
      position: "Runner Up",
      category: "Badminton",
      icon: Medal,
      color: "from-slate-300 to-slate-400",
      image: "https://images.unsplash.com/photo-1599391398131-cd12dfc6b77f?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const stats = [
    { value: "85+", label: "Championships Won" },
    { value: "200+", label: "Medals Earned" },
    { value: "15", label: "State Champions" },
    { value: "3", label: "National Champions" }
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 px-5 py-2 rounded-full mb-6">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold tracking-wide text-sm">Our Achievements</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Wall of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> Glory</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A legacy of excellence. Every trophy represents countless hours of dedication, 
            teamwork, and the relentless pursuit of greatness.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Championships Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {championships.map((championship, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-yellow-500/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={championship.image}
                  alt={championship.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                {/* Trophy Icon */}
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${championship.color} flex items-center justify-center shadow-lg`}>
                    <championship.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    championship.category === 'Football' 
                      ? 'bg-lime-500/20 text-lime-400' 
                      : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {championship.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{championship.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {championship.title}
                </h3>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${championship.color}`}>
                  <Star className="w-4 h-4 text-white" />
                  <span className="text-white font-semibold text-sm">{championship.position}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-300 hover:scale-105">
            View Complete Achievement History
          </button>
        </motion.div>
      </div>
    </section>
  );
}