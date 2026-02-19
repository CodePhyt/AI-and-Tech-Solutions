'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Home, Globe, HeartPulse, Cpu, Package, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        id: 'smart-home-lab',
        title: 'Smart Home Lab Transformation',
        subtitle: 'From Basement to Command Center',
        description:
            'Complete renovation of a Neuhaus am Rennweg basement into a fully automated IoT command center. Zigbee mesh network with 47 sensors, Home Assistant orchestration, ESPHome custom firmware, MQTT broker, and BAFA-certified energy efficiency audit saving 34% on annual costs.',
        tags: ['IoT', 'Zigbee', 'Home Assistant', 'ESPHome', 'BAFA'],
        icon: Home,
        color: '#00d4ff',
        image: '/images/projects/project-smarthome.svg',
        stats: [
            { label: 'Sensors Deployed', value: '47' },
            { label: 'Energy Saved', value: '34%' },
            { label: 'Automations', value: '120+' },
        ],
    },
    {
        id: 'cross-border-logistics',
        title: 'Cross-Border Logistics Platform',
        subtitle: 'Zero Group Packaging × S21 Battery Import',
        description:
            'Custom ERP system bridging Turkey↔Germany supply chain for Zero Group Packaging and S21 Battery imports. Real-time inventory tracking, automated customs documentation, multi-currency ledger, and predictive restocking AI reducing lead times by 40%.',
        tags: ['ERP', 'Logistics', 'Python', 'PostgreSQL', 'Docker'],
        icon: Package,
        color: '#ffd700',
        image: '/images/projects/project-logistics.svg',
        stats: [
            { label: 'Lead Time Cut', value: '40%' },
            { label: 'SKUs Tracked', value: '2.4K' },
            { label: 'Countries', value: '3' },
        ],
    },
    {
        id: 'health-tourism-bridge',
        title: 'Health Tourism Bridge',
        subtitle: 'Connecting Germany → Antalya',
        description:
            'Full-stack platform connecting German patients to vetted Antalya clinics. Multilingual booking engine, AI-powered translation for medical documents, secure video consultation rooms, and end-to-end journey coordination from airport to recovery.',
        tags: ['Health Tech', 'AI', 'Next.js', 'Telemedicine'],
        icon: Stethoscope,
        color: '#00d4ff',
        image: '/images/projects/project-health.svg',
        stats: [
            { label: 'Patients Served', value: '500+' },
            { label: 'Clinic Partners', value: '12' },
            { label: 'Languages', value: '4' },
        ],
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-[#ffd700] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">
                        Portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter font-sans">
                        Featured{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00d4ff]/70">
                            Projects
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                        Real-world case studies from our five pillars — AI, Smart Home, Global Trade, Consulting, and Digital Media.
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group"
                        >
                            <div
                                className={`crystal-card overflow-hidden bg-slate-900/40 border-white/5 hover:border-[${project.color}]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,255,0.08)]`}
                            >
                                <div className="grid lg:grid-cols-2 gap-0">
                                    {/* Image Side */}
                                    <div className="relative h-72 lg:h-auto min-h-[320px] overflow-hidden bg-slate-900">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/90 lg:block hidden" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent lg:hidden" />

                                        {/* Floating Icon */}
                                        <div className="absolute top-6 left-6">
                                            <div
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-md"
                                                style={{ backgroundColor: `${project.color}15` }}
                                            >
                                                <project.icon className="w-7 h-7" style={{ color: project.color }} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="p-10 lg:p-12 flex flex-col justify-center">
                                        <span
                                            className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 block"
                                            style={{ color: project.color }}
                                        >
                                            {project.subtitle}
                                        </span>
                                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight font-sans">
                                            {project.title}
                                        </h2>
                                        <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                                            {project.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-8">
                                            {project.stats.map((stat) => (
                                                <div key={stat.label} className="text-center py-3 bg-white/5 rounded-lg border border-white/5">
                                                    <div className="text-xl font-bold text-white">{stat.value}</div>
                                                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white/5 text-slate-400 border border-white/5"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform"
                                            style={{ color: project.color }}
                                        >
                                            <span>Discuss Similar Project</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <div className="crystal-card p-12 bg-slate-900/40 border-white/5 max-w-3xl mx-auto">
                        <Cpu className="w-10 h-10 text-[#00d4ff] mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4 font-sans">Have a Vision?</h3>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Every project starts with a conversation. Tell us about your challenge and we&apos;ll architect the solution.
                        </p>
                        <Link
                            href="/contact"
                            className="btn-glow inline-flex items-center gap-3 px-10 py-4 bg-[#00d4ff] text-[#0a0a0a] font-bold rounded-lg text-xs uppercase tracking-wider"
                        >
                            Start Your Project
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
