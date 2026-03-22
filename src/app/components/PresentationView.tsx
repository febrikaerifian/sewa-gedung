import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  MonitorPlay, 
  X, 
  PieChart, 
  FileText, 
  Users, 
  DollarSign,
  Layers,
  Code
} from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  icon?: React.ElementType;
  bgGradient: string;
}

interface PresentationViewProps {
  onClose: () => void;
}

export function PresentationView({ onClose }: PresentationViewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 0,
      title: "ERP System Update v16",
      subtitle: "Comprehensive Solutions for PT TRSJ",
      bgGradient: "from-blue-600 to-indigo-900",
      icon: MonitorPlay,
      content: (
        <div className="space-y-6 text-center text-white/90">
          <p className="text-xl">Presentation of New Modules & Features</p>
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mt-12">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <h3 className="font-bold text-lg">Project Management</h3>
              <p className="text-sm opacity-80">End-to-end tracking</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <h3 className="font-bold text-lg">Finance & PO</h3>
              <p className="text-sm opacity-80">Automated workflows</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <h3 className="font-bold text-lg">HR Management</h3>
              <p className="text-sm opacity-80">Workforce analytics</p>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <h3 className="font-bold text-lg">Reporting</h3>
              <p className="text-sm opacity-80">Real-time insights</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "System Overview",
      subtitle: "A modern, integrated ERP platform",
      bgGradient: "from-slate-800 to-slate-900",
      icon: Layers,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
          <div className="space-y-4 text-white">
            <h3 className="text-2xl font-bold text-blue-400">Key Objectives</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Centralized data management for telecom projects</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Automated PO creation and invoice tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Real-time financial health monitoring</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
             <div className="space-y-4">
               <div className="h-2 bg-blue-500/20 rounded-full w-3/4 overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }} 
                   animate={{ width: "75%" }} 
                   transition={{ duration: 1, delay: 0.5 }}
                   className="h-full bg-blue-500" 
                 />
               </div>
               <div className="h-2 bg-purple-500/20 rounded-full w-1/2 overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }} 
                   animate={{ width: "50%" }} 
                   transition={{ duration: 1, delay: 0.7 }}
                   className="h-full bg-purple-500" 
                 />
               </div>
               <div className="h-2 bg-emerald-500/20 rounded-full w-5/6 overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }} 
                   animate={{ width: "83%" }} 
                   transition={{ duration: 1, delay: 0.9 }}
                   className="h-full bg-emerald-500" 
                 />
               </div>
             </div>
             <p className="mt-4 text-sm text-slate-400">System Efficiency Metrics</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "PO Creation Module",
      subtitle: "Streamlined Procurement Process",
      bgGradient: "from-blue-700 to-blue-900",
      icon: FileText,
      content: (
        <div className="text-white space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold text-blue-300 mb-2">Smart Forms</h4>
              <p className="text-sm">Auto-calculation of totals, taxes (11% PPN), and grand totals.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold text-blue-300 mb-2">Visual Workflow</h4>
              <p className="text-sm">Clear approval status tracking: Draft → Manager → Finance.</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-bold text-blue-300 mb-2">Item Management</h4>
              <p className="text-sm">Dynamic add/remove items with instant subtotal updates.</p>
            </div>
          </div>
          <div className="mt-8 p-4 bg-white text-slate-900 rounded-lg shadow-lg">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <span className="font-bold">PO-2024-001</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Draft</span>
            </div>
            <div className="space-y-2 text-sm opacity-50">
              <div className="h-2 bg-slate-200 rounded w-full"></div>
              <div className="h-2 bg-slate-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "HR Dashboard",
      subtitle: "Workforce Analytics & Attendance",
      bgGradient: "from-indigo-700 to-purple-900",
      icon: Users,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Features</h3>
            <ul className="space-y-2 text-indigo-100">
              <li>• Real-time employee status (Active, On Leave)</li>
              <li>• Departmental distribution charts</li>
              <li>• Weekly attendance monitoring (Present/Late/Absent)</li>
              <li>• Employee directory with quick filters</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <path className="text-indigo-900" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                <motion.path 
                  className="text-indigo-400" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeDasharray="100, 100"
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={{ strokeDasharray: "75, 100" }}
                  transition={{ duration: 1.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold">1,248</span>
                <span className="text-xs uppercase opacity-70">Employees</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Finance Dashboard",
      subtitle: "Revenue, Expenses & Cash Flow",
      bgGradient: "from-emerald-700 to-teal-900",
      icon: DollarSign,
      content: (
        <div className="text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
             <div className="bg-white/10 p-3 rounded text-center">
               <div className="text-xs opacity-70">Revenue</div>
               <div className="text-lg font-bold text-emerald-300">Rp 2.4B</div>
             </div>
             <div className="bg-white/10 p-3 rounded text-center">
               <div className="text-xs opacity-70">Expenses</div>
               <div className="text-lg font-bold text-rose-300">Rp 1.1B</div>
             </div>
             <div className="bg-white/10 p-3 rounded text-center">
               <div className="text-xs opacity-70">Profit</div>
               <div className="text-lg font-bold text-blue-300">Rp 1.3B</div>
             </div>
             <div className="bg-white/10 p-3 rounded text-center">
               <div className="text-xs opacity-70">Cash</div>
               <div className="text-lg font-bold text-purple-300">Rp 850M</div>
             </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Financial Modules</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-white/5 border-l-2 border-emerald-400">
                Revenue vs Expense Analysis Chart
              </div>
              <div className="p-3 bg-white/5 border-l-2 border-emerald-400">
                Expense Categorization (Materials, Subcont, etc.)
              </div>
              <div className="p-3 bg-white/5 border-l-2 border-emerald-400">
                Recent Transaction Ledger
              </div>
              <div className="p-3 bg-white/5 border-l-2 border-emerald-400">
                Automated Financial Reporting
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Technology Stack",
      subtitle: "Built for Performance & Scalability",
      bgGradient: "from-slate-800 to-black",
      icon: Code,
      content: (
        <div className="grid grid-cols-2 gap-6 text-white">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded text-blue-400 font-bold">React 18</div>
              <span className="text-sm opacity-80">Component-based UI architecture</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded text-cyan-400 font-bold">Tailwind CSS</div>
              <span className="text-sm opacity-80">Utility-first styling for speed</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500/20 rounded text-orange-400 font-bold">Recharts</div>
              <span className="text-sm opacity-80">Data visualization library</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded text-green-400 font-bold">Supabase</div>
              <span className="text-sm opacity-80">Database & Real-time features (Ready)</span>
            </div>
          </div>
          <div className="flex items-center justify-center opacity-30">
            <Code size={120} />
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(curr => curr + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(curr => curr - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient} transition-all duration-700`}></div>
      
      {/* Controls */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-20 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-20">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-full text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(slide.id)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === slide.id ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 rounded-full text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Content */}
      <div className="relative z-10 w-full max-w-4xl px-8 h-[600px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="flex items-center gap-4 mb-6">
              {slides[currentSlide].icon && (
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                   {React.createElement(slides[currentSlide].icon!, { className: "w-8 h-8 text-white" })}
                </div>
              )}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  {slides[currentSlide].title}
                </h2>
                {slides[currentSlide].subtitle && (
                  <p className="text-xl text-blue-200 mt-2 font-light">
                    {slides[currentSlide].subtitle}
                  </p>
                )}
              </div>
            </div>
            
            <div className="mt-8">
              {slides[currentSlide].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 right-6 text-white/30 text-sm z-20 font-mono">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}