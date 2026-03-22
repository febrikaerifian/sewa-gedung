import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29yayUyMGJsdWUlMjB0aGVtZXxlbnwxfHx8fDE3NzE1ODMyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
            </div>
            {/* Floating Stat Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-10 hidden lg:block bg-white p-8 rounded-xl shadow-xl border border-slate-100 max-w-xs"
            >
              <h4 className="text-4xl font-bold text-blue-600 mb-2">10+ Years</h4>
              <p className="text-slate-600 font-medium">Of Excellence in Telecommunications Infrastructure</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">About PT Telco</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Empowering Connectivity Through Innovation</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              PT Telco is a premier telecommunications infrastructure provider committed to delivering excellence. We specialize in building and maintaining the networks that connect people, businesses, and communities.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              With a focus on quality, safety, and efficiency, we have established ourselves as a trusted partner for major telecom operators. Our integrated approach combines technical expertise with advanced project management systems.
            </p>

            <div className="space-y-4">
              {[
                "ISO 9001:2015 Certified Quality Management",
                "Advanced ERP System for Real-time Project Tracking",
                "Dedicated Team of Certified Professionals",
                "Nationwide Service Coverage"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
