import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Mail, MapPin, Linkedin, Twitter, Github, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  timeline: string;
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
              Let's Build Something <br />
              <span className="text-slate-400">Great Together</span>
            </h2>

            <p className="text-xl text-[#64748B] mb-16 max-w-lg font-light leading-relaxed">
              Tell us about your project. We'll respond within 24 hours with honest feedback on how we can help.
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
                  <a href="https://linkedin.com/company/talentailabs" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center hover:bg-[#0F172A] hover:text-white transition-all duration-500">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com/talentailabs" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center hover:bg-[#0F172A] hover:text-white transition-all duration-500">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/talentailabs" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center hover:bg-[#0F172A] hover:text-white transition-all duration-500">
                    <Github className="w-6 h-6" />
                  </a>
               </div>

               <p className="text-sm text-[#64748B] pt-6 border-t border-slate-100">
                 We typically respond within 24 hours.<br />
                 No salespeople — you'll talk directly to our technical team.
               </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-50/50 rounded-full blur-[100px] -z-10" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              <div className="space-y-8">
                <div className="relative group">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Your Name*</label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-2xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all placeholder:text-slate-200"
                  />
                  {errors.name && <span className="absolute right-0 bottom-6 text-[10px] font-bold text-red-500 uppercase">Required</span>}
                </div>

                <div className="relative group">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Email*</label>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-2xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all placeholder:text-slate-200"
                  />
                  {errors.email && <span className="absolute right-0 bottom-6 text-[10px] font-bold text-red-500 uppercase">Invalid</span>}
                </div>

                <div className="relative group">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Company</label>
                  <input
                    {...register("company")}
                    placeholder="Your company"
                    className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-2xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all placeholder:text-slate-200"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Project Type*</label>
                    <select
                      {...register("projectType", { required: true })}
                      className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all"
                    >
                      <option value="">Select type</option>
                      <option value="blockchain">Blockchain / Smart Contracts</option>
                      <option value="ai">AI / Trading Systems</option>
                      <option value="fullstack">Web / Mobile Application</option>
                      <option value="consulting">Consulting / Advisory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Timeline</label>
                    <select
                      {...register("timeline")}
                      className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Budget Range</label>
                  <select
                    {...register("budget")}
                    className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all"
                  >
                    <option value="">Select budget</option>
                    <option value="under10k">Under €10K</option>
                    <option value="10-25k">€10K - €25K</option>
                    <option value="25-50k">€25K - €50K</option>
                    <option value="50-100k">€50K - €100K</option>
                    <option value="100k+">€100K+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className="relative group">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-4">Message*</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={4}
                    placeholder="Tell us about your project. What are you building? What problems are you trying to solve?"
                    className="w-full bg-transparent border-b-2 border-slate-100 py-6 text-2xl font-bold focus:outline-none focus:border-[#1E40AF] transition-all placeholder:text-slate-200 resize-none"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <button
                  type="submit"
                  className="group flex items-center gap-6 text-3xl font-black text-[#0F172A] hover:text-[#1E40AF] transition-all"
                >
                  Send Message
                  <div className="w-20 h-20 rounded-full bg-[#0F172A] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                     <ChevronRight className="w-8 h-8" />
                  </div>
                </button>
                <p className="text-sm text-[#64748B] flex items-center gap-2">
                  🔒 Your information is secure. We never share your data.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
