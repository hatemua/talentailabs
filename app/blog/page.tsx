'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

// Placeholder data - will be replaced with actual MDX content
const blogPosts = [
  {
    slug: 'stablecoins-future-digital-finance',
    title: 'Stablecoins in 2026: The Backbone of Digital Finance',
    description: 'A deep technical analysis of stablecoin architecture, regulation, and why they\'re becoming the foundation of global digital payments.',
    author: 'Hatem Azaiez',
    authorRole: 'Co-Founder & CTO',
    date: '2026-02-01',
    category: 'Blockchain',
    readingTime: '8 min',
    image: '/images/blog/stablecoins.jpg',
  },
  {
    slug: 'ai-agents-transforming-business',
    title: 'AI Agents Are Replacing Workflows — Here\'s What That Means for Your Business',
    description: 'How autonomous AI agents are moving beyond chatbots to handle complex business processes — recruitment, trading, operations — and what companies need to know to adopt them.',
    author: 'Hatem Azaiez',
    authorRole: 'Co-Founder & CTO',
    date: '2026-01-28',
    category: 'AI',
    readingTime: '10 min',
    image: '/images/blog/ai-agents.jpg',
  },
];

const ArticleCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-500"
  >
    {/* Thumbnail Placeholder */}
    <div className="h-56 bg-gradient-to-br from-[#1E40AF] to-[#7C3AED] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
        {post.category}
      </div>
      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white bg-white/20 backdrop-blur-sm rounded-full">
        {post.category}
      </span>
    </div>

    <div className="p-8">
      {/* Meta */}
      <div className="flex items-center gap-4 mb-4 text-xs text-[#64748B]">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {post.readingTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-[#0F172A] mb-3 leading-tight group-hover:text-[#1E40AF] transition-colors">
        {post.title}
      </h3>

      {/* Description */}
      <p className="text-[#64748B] text-sm leading-relaxed mb-6">{post.description}</p>

      {/* Author & CTA */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#7C3AED] flex items-center justify-center text-white font-bold text-sm">
            {post.author.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold text-[#0F172A]">{post.author}</div>
            <div className="text-xs text-[#64748B]">{post.authorRole}</div>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#1E40AF] hover:text-white hover:bg-[#1E40AF] rounded-lg transition-all"
        >
          Read Article
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </motion.div>
);

export default function BlogPage() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1E40AF] mb-4 text-center"
          >
            Insights & Resources
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.2] tracking-tight mb-6 text-center"
          >
            Blog | TalentAI Labs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-base md:text-lg text-[#64748B] leading-relaxed text-center max-w-2xl mx-auto"
          >
            Technical deep-dives from our engineering team on blockchain, AI, and software development.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <ArticleCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">Have a project in mind?</h2>
          <p className="text-[#64748B] mb-8">
            Let's build something great together. Talk directly to our technical co-founders.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F172A] text-white rounded-xl font-semibold hover:bg-[#1E40AF] transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
