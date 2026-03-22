import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Radio, Wifi, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onLoginClick: () => void;
}

export function Hero({ onLoginClick }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1673798880041-bce9ccf82724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tJTIwdG93ZXIlMjBzdW5zZXR8ZW58MXx8fHwxNzcxNTgzMjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Telecom Infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-900/50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium rounded-full backdrop-blur-sm">
              Leading Telecommunications Partner
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Building the Future of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Connectivity
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            PT TELCO provides end-to-end telecommunication infrastructure solutions. 
            From FTTH deployment to network maintenance, we ensure seamless connectivity for communities and businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
            >
              Our Solutions
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onLoginClick}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all flex items-center justify-center"
            >
              Client Login
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { icon: Wifi, label: "FTTH Specialists", desc: "Fiber To The Home" },
              { icon: Radio, label: "Network Infra", desc: "Tower & BTS" },
              { icon: ShieldCheck, label: "Quality First", desc: "ISO Certified" }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <feature.icon className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">{feature.label}</h3>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
