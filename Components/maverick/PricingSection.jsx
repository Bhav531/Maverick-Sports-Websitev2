import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      icon: Star,
      price: 49,
      period: "month",
      description: "Perfect for beginners looking to learn the basics and build a strong foundation.",
      color: "from-slate-600 to-slate-700",
      features: [
        "2 sessions per week",
        "Group training (max 12)",
        "Basic equipment provided",
        "Progress tracking",
        "Access to practice courts",
        "Monthly skill assessment"
      ],
      popular: false
    },
    {
      name: "Pro",
      icon: Zap,
      price: 99,
      period: "month",
      description: "For serious athletes ready to take their game to the next level.",
      color: "from-orange-500 to-orange-600",
      features: [
        "4 sessions per week",
        "Small groups (max 6)",
        "Premium equipment access",
        "Video analysis sessions",
        "Nutrition guidance",
        "Tournament preparation",
        "1 private session/month",
        "Priority booking"
      ],
      popular: true
    },
    {
      name: "Elite",
      icon: Crown,
      price: 199,
      period: "month",
      description: "Comprehensive training for athletes with professional aspirations.",
      color: "from-lime-500 to-green-600",
      features: [
        "Unlimited sessions",
        "1-on-1 coaching",
        "Personal training plan",
        "Sports psychology access",
        "Physiotherapy sessions",
        "Competition sponsorship",
        "International camp access",
        "24/7 coach support"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4">
            Membership Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Invest in Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-lime-500">
              Athletic Future
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Flexible plans designed to match your goals and budget. All plans include access to 
            both Football and Badminton programs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                plan.popular 
                  ? 'shadow-2xl shadow-orange-500/20 scale-105 border-2 border-orange-500/20' 
                  : 'shadow-lg hover:shadow-xl border border-slate-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                  </div>
                </div>

                <p className="text-slate-500 mb-6 h-12">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                    <span className="text-slate-500">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">Billed monthly. Cancel anytime.</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-6 rounded-full font-semibold text-lg transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-4">
            All plans include a <span className="text-orange-500 font-semibold">7-day free trial</span>. 
            No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-lime-500" /> Free uniform included
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-lime-500" /> Family discounts available
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-lime-500" /> Annual plans save 20%
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}