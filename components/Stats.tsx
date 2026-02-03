import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2500;
      const startTime = Date.now();

      const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        const current = Math.floor(easeOutExpo(progress) * (end - start) + start);
        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

export const StatsBar = () => {
  const stats = [
    { label: "Years Building Production Systems", value: 12, suffix: "+" },
    { label: "Projects Shipped to Mainnet", value: 170, suffix: "+" },
    { label: "Users on Our Platform", value: 45000, suffix: "+" },
    { label: "Blockchain Networks Mastered", value: 6, suffix: "+" },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="text-6xl md:text-8xl font-black text-[#0F172A] mb-6 tracking-tighter tabular-nums flex items-center gap-1">
                <Counter value={stat.value} suffix={stat.suffix} />
                <div className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-black text-[#1E40AF] uppercase tracking-[0.4em] mb-1">
                  {stat.label}
                </div>
                <div className="h-[2px] w-8 bg-slate-100 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
