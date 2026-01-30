import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Mail, MapPin, Linkedin, Twitter, Github, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

type ContactFormData = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    toast.success("Inquiry received. We'll contact you within 24 hours.");
    reset();
  };

  return (
    <section id="contact" className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-40 items-start">
          <div className="w-full lg:w-1/2">
             <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-black uppercase tracking-[0.4em] text-[#1E40AF] mb-10"
            >
              Inquiries
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-bold text-[#0F172A] mb-12 tracking-tighter leading-[0.95]">
              Let's build <br />
              <span className="text-slate-400">the Future.</span>
            </h2>
            
            <p className="text-xl text-[#64748B] mb-16 max-w-lg font-light leading-relaxed">
              Whether you're looking for a technical co-founder or a specialized development team, we're ready to architect your vision.
            </p>

            <div className="space-y-12">
               <div className="group">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-2 group-hover:text-[#1E40AF] transition-colors">Direct Contact</div>
                  <a href="mailto:hello@talentailabs.com" className="text-2xl md:text-3xl font-bold text-[#0F172A] hover:underline underline-offset-8">hello@talentailabs.com</a>
               </div>
               
               <div className="group">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-2 group-hover:text-[#1E40AF] transition-colors">HQ Location</div>
                  <div className="text-2xl md:text-3xl font-bold text-[#0F172A]">Vilnius, Lithuania 🇱🇹</div>
               </div>

               <div className="flex gap-6 pt-6">
                  {[Linkedin, Twitter, Github].map((Icon, i) => (
                    <a key={i} href="#" className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center hover:bg-[#0F172A] hover:text-white transition-all duration-500">
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
               </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-50/50 rounded-full blur-[100px] -z-10" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              <div className="space-y-8">
                <div className="relative group">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Your Identity</label>
                  <input 
                    {...register("name", { required: true })}
                    placeholder="Name or Organization" 
                    className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-2xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all placeholder:text-slate-200"
                  />
                  {errors.name && <span className="absolute right-0 bottom-6 text-[10px] font-bold text-red-500 uppercase">Required</span>}
                </div>

                <div className="relative group">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Communication</label>
                  <input 
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-2xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all placeholder:text-slate-200"
                  />
                  {errors.email && <span className="absolute right-0 bottom-6 text-[10px] font-bold text-red-500 uppercase">Invalid</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Project Scope</label>
                    <select 
                      {...register("projectType")}
                      className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all"
                    >
                      <option value="">Select Service</option>
                      <option value="blockchain">Blockchain</option>
                      <option value="ai">Artificial Intelligence</option>
                      <option value="fullstack">Full-Stack Development</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Investment Range</label>
                    <select 
                      {...register("budget")}
                      className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all"
                    >
                      <option value="">Select Budget</option>
                      <option value="10-50k">€10k - €50k</option>
                      <option value="50-100k">€50k - €100k</option>
                      <option value="100k+">€100k+</option>
                    </select>
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Vision Details</label>
                  <textarea 
                    {...register("message", { required: true })}
                    rows={4}
                    placeholder="Describe the challenge..."
                    className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-2xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all placeholder:text-slate-200 resize-none"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="group flex items-center gap-6 text-3xl font-black text-[#0F172A] hover:text-[#1E40AF] transition-all"
              >
                Send Message
                <div className="w-20 h-20 rounded-full bg-[#0F172A] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                   <ChevronRight className="w-8 h-8" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
