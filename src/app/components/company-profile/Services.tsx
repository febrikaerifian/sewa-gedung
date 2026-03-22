import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Network, Settings, HardHat, Truck, Users } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Network,
      title: "FTTH Deployment",
      description: "Comprehensive Fiber To The Home solutions including survey, design, and installation for residential and commercial areas."
    },
    {
      icon: Settings,
      title: "Network Maintenance",
      description: "24/7 maintenance services ensuring network reliability and minimal downtime for our partners."
    },
    {
      icon: HardHat,
      title: "Civil Works",
      description: "Infrastructure development including ducting, manhole construction, and pole erection with high safety standards."
    },
    {
      icon: Truck,
      title: "Logistics & Supply",
      description: "Efficient management of telecommunication materials and equipment distribution across project sites."
    },
    {
      icon: LayoutGrid,
      title: "Project Management",
      description: "End-to-end project management services using our advanced ERP system for real-time tracking and reporting."
    },
    {
      icon: Users,
      title: "Manpower Supply",
      description: "Providing skilled and certified technicians for various telecommunication project needs."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Comprehensive Telecom Solutions</h2>
          <p className="text-slate-600 text-lg">
            We deliver high-quality infrastructure services tailored to meet the evolving needs of the telecommunications industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
