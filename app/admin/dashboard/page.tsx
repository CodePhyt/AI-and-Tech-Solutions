import React from 'react';
import { protectAdmin } from '@/lib/auth';
import { getLeads } from '@/services/dal';
import { Users, FileText, Settings, LogOut, Search, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default async function AdminDashboard() {
    // Ironclad DAL Security
    await protectAdmin();
    const leads = await getLeads();

    return (
        <div className="min-h-screen bg-[#0a0e1a] text-white flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-slate-950/50 p-6 flex flex-col">
                <div className="mb-12">
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-[#C5A059]">
                        Coordinator Pro
                    </h1>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Agency Management</p>
                </div>

                <nav className="flex-1 space-y-2">
                    <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#C5A059]/10 text-[#C5A059] rounded-xl font-medium">
                        <Users className="w-5 h-5" />
                        Leads
                    </Link>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                        <FileText className="w-5 h-5" />
                        Assessments
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
                        <Settings className="w-5 h-5" />
                        Global Setup
                    </button>
                </nav>

                <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors mt-auto">
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold">Incoming Requests</h2>
                        <p className="text-slate-400">Manage your patient coordination pipeline</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search patients..."
                                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 focus:border-[#C5A059] outline-none transition-all text-sm w-64"
                            />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center font-bold text-slate-900 border-2 border-slate-900 shadow-xl">
                            AD
                        </div>
                    </div>
                </header>

                {/* Lead Table */}
                <div className="crystal-card overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/[0.02]">
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Assigned</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Submitted</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Level</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {!leads || leads.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                        <div className="flex flex-col items-center gap-2">
                                            <Clock className="w-8 h-8 opacity-20" />
                                            No requests waiting for your expert eye.
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                leads.map((lead: any) => (
                                    <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-white">{lead.name}</div>
                                            <div className="text-sm text-slate-500">{lead.phone}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                                                Analyzing
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-300">Safiye AI</td>
                                        <td className="px-6 py-4 text-sm text-slate-500">{new Date(lead.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-1">
                                                <div className="w-1 h-3 bg-[#C5A059] rounded-full"></div>
                                                <div className="w-1 h-3 bg-[#C5A059] rounded-full"></div>
                                                <div className="w-1 h-3 bg-white/10 rounded-full"></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 hover:bg-white/5 rounded-lg text-slate-500 hover:text-white transition-all">
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
