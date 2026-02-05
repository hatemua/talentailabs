'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Brain, Landmark, Package, Scale, Wallet, Activity, Gem, Palette, CreditCard, Search, Rocket, LucideIcon } from 'lucide-react';
import { useWindowStore } from '@/lib/windowStore';
import { PROJECTS, CATEGORIES, CATEGORY_GRADIENTS, Project, ProjectCategory } from '@/lib/portfolioData';

// Icon mapping for lucide-react icons
const ICON_MAP: Record<string, LucideIcon> = {
  Brain,
  Landmark,
  Package,
  Scale,
  Wallet,
  Activity,
  Gem,
  Palette,
  CreditCard,
  Search,
  Rocket,
};

const PortfolioWindow: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const openWindow = useWindowStore((state) => state.openWindow);

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const expandedProjectData = expandedProject
    ? PROJECTS.find(p => p.id === expandedProject)
    : null;

  return (
    <div className="bg-[#F5F5F7] min-h-full">
      {/* Top Filter Bar */}
      <div className="sticky top-0 z-20 bg-[#F5F5F7] border-b border-gray-200 px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap gap-2 mb-3"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150
                ${selectedCategory === cat.id
                  ? 'bg-[#1D1D1F] text-white'
                  : 'bg-transparent border border-[#D1D5DB] text-[#6B7280] hover:bg-gray-100'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
        <p className="text-xs text-[#6B7280]">
          170+ projects delivered — here are the highlights
        </p>
      </div>

      {/* Bento Grid */}
      <div className="p-6">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  delay: index * 0.05,
                }}
                className={project.type === 'featured' ? 'sm:col-span-2' : ''}
              >
                {project.type === 'featured' && (
                  <FeaturedCard project={project} onClick={() => setExpandedProject(project.id)} />
                )}
                {project.type === 'standard' && (
                  <StandardCard project={project} onClick={() => setExpandedProject(project.id)} />
                )}
                {project.type === 'compact' && (
                  <CompactCard project={project} />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200"
        >
          <p className="text-sm text-[#6B7280]">
            170+ projects delivered — these are highlights
          </p>
          <button
            onClick={() => openWindow('contact')}
            className="px-6 py-3 bg-[#0F172A] text-white rounded-xl text-sm font-semibold hover:scale-105 active:scale-95 transition-transform flex items-center gap-2"
          >
            Start a Project
            <span className="text-lg">→</span>
          </button>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {expandedProjectData && (
          <DetailModal
            project={expandedProjectData}
            onClose={() => setExpandedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Featured Card Component
const FeaturedCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.015 }}
      className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        background: project.gradient
          ? `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`
          : 'linear-gradient(135deg, #7C3AED, #4F46E5)',
      }}
    >
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={isHovered ? { x: ['-100%', '100%'] } : {}}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Status Badge */}
        <StatusBadge status={project.status} className="self-end" />

        {/* Logo/Icon & Title */}
        <div className="flex-1">
          {/* Use logo if available, otherwise show icon */}
          {project.logo ? (
            <div className="h-[90px] w-[300px] mb-3 flex items-center justify-center">
              <img
                src={project.logo}
                alt={project.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ) : (
            <div className="w-16 h-16 mb-3 bg-white/20 rounded-2xl flex items-center justify-center">
              {ICON_MAP[project.icon] && React.createElement(ICON_MAP[project.icon], {
                className: 'w-8 h-8 text-white',
                strokeWidth: 2,
              })}
            </div>
          )}
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{project.tagline}</p>
        </div>

        {/* Stats or Tech */}
        <div className="flex flex-wrap gap-2">
          {project.keyStats ? (
            project.keyStats.slice(0, 3).map((stat, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md bg-white/20 text-white text-xs font-medium"
              >
                {stat}
              </span>
            ))
          ) : (
            project.tech.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md bg-white/20 text-white text-xs font-medium"
              >
                {tech}
              </span>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Standard Card Component
const StandardCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const IconComponent = ICON_MAP[project.icon];

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      className="h-64 bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#007AFF] p-5 cursor-pointer transition-all duration-200 hover:shadow-lg flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        {/* Gray block with white icon OR image logo */}
        {project.logo ? (
          <div className="w-[68px] h-[68px] flex items-center justify-center flex-shrink-0">
            <img
              src={project.logo}
              alt={project.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ) : (
          <div className="w-12 h-12 bg-[#D1D5DB] rounded-xl flex items-center justify-center flex-shrink-0">
            {IconComponent && <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />}
          </div>
        )}
        <div className="flex gap-2">
          <CategoryTag category={project.category} />
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-[#0F172A] mb-2">{project.title}</h3>
        <p className="text-sm text-[#64748B] leading-relaxed line-clamp-2 mb-3">{project.tagline}</p>
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <ul className="text-xs text-[#64748B] space-y-1">
            {project.keyFeatures.slice(0, 2).map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#0066FF] rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.tech.slice(0, 4).map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 rounded-md bg-black/5 text-[#6B7280] text-[11px] font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// Compact Card Component
const CompactCard: React.FC<{ project: Project }> = ({ project }) => {
  const IconComponent = ICON_MAP[project.icon];

  return (
    <motion.div
      whileHover={{ backgroundColor: '#F0F4FF' }}
      className="h-32 bg-white rounded-2xl border border-[#E5E7EB] p-4 transition-colors duration-200 flex flex-col justify-between"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        {/* Gray block with white icon */}
        <div className="w-10 h-10 bg-[#D1D5DB] rounded-lg flex items-center justify-center flex-shrink-0">
          {IconComponent && <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />}
        </div>
        <CategoryTag category={project.category} small />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-sm font-bold text-[#0F172A] mb-1">{project.title}</h3>
        <p className="text-xs text-[#64748B] line-clamp-1">{project.tagline}</p>
      </div>
    </motion.div>
  );
};

// Status Badge Component
const StatusBadge: React.FC<{ status: string; className?: string }> = ({ status, className = '' }) => {
  const styles = {
    live: 'bg-[#DCFCE7] text-[#166534]',
    beta: 'bg-[#FEF9C3] text-[#854D0E]',
    delivered: 'bg-[#DBEAFE] text-[#1E40AF]',
    development: 'bg-[#F3E8FF] text-[#6B21A8]',
  };

  const labels = {
    live: '🟢 Live',
    beta: '🟡 Beta',
    delivered: '🔵 Delivered',
    development: '🟣 In Dev',
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${styles[status as keyof typeof styles]} ${className}`}
    >
      {labels[status as keyof typeof labels]}
    </span>
  );
};

// Category Tag Component
const CategoryTag: React.FC<{ category: ProjectCategory; small?: boolean }> = ({ category, small = false }) => {
  const labels = {
    'ai-trading': 'AI',
    'defi': 'DeFi',
    'enterprise': 'Enterprise',
    'mobile': 'Mobile',
    'blockchain': 'Chain',
  };

  const gradient = CATEGORY_GRADIENTS[category];

  return (
    <span
      className={`${small ? 'px-1.5 py-0.5 text-[9px]' : 'px-2 py-1 text-[10px]'} rounded-md font-bold uppercase tracking-wide text-white`}
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      {labels[category]}
    </span>
  );
};

// Detail Modal Component
const DetailModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
          <div className="flex items-start gap-4 flex-1">
            <div className="text-4xl">{project.icon}</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-1">{project.title}</h2>
              <p className="text-sm text-[#64748B]">{project.tagline}</p>
              <div className="flex gap-2 mt-3">
                <CategoryTag category={project.category} />
                <StatusBadge status={project.status} />
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          {project.description && (
            <div>
              <h3 className="text-sm font-bold text-[#0F172A] mb-2 uppercase tracking-wide">About</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{project.description}</p>
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-[#0F172A] mb-3 uppercase tracking-wide">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {project.keyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
                    <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Stats */}
          {project.keyStats && project.keyStats.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-[#0F172A] mb-3 uppercase tracking-wide">Metrics</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.keyStats.map((stat, i) => (
                  <div key={i} className="bg-[#F5F5F7] rounded-lg p-3">
                    <p className="text-sm font-semibold text-[#0F172A]">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-bold text-[#0F172A] mb-3 uppercase tracking-wide">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-black/5 text-[#0F172A] text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Link */}
          {project.link && (
            <div>
              <a
                href={`https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] hover:underline"
              >
                Visit {project.link}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioWindow;
