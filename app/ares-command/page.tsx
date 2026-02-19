import { PrismaClient } from '@prisma/client';
import { ShieldAlert, Terminal, Lock, Database } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function AresCommandPage({
    searchParams,
}: {
    searchParams: Promise<{ key?: string }>;
}) {
    // 1. Simple Security Check
    const params = await searchParams;
    const isAuthorized = params.key === process.env.ARES_SWARM_KEY;

    if (!isAuthorized) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-[#ff0000] font-mono gap-4">
                <ShieldAlert className="w-16 h-16 animate-pulse" />
                <h1 className="text-3xl font-bold tracking-widest uppercase">Access Denied</h1>
                <p className="text-sm opacity-50">Bio-Metric Signature Invalid.</p>
                <div className="w-64 h-1 bg-[#ff0000]/20 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-[#ff0000] animate-progress"></div>
                </div>
            </div>
        );
    }

    // 2. Fetch Data
    const leads = await prisma.lead.findMany({
        orderBy: { createdAt: 'desc' },
        take: 50,
    });

    return (
        <div className="min-h-screen bg-[#050505] text-[#00d4ff] font-mono p-8 md:p-12">
            {/* Header */}
            <header className="flex items-center justify-between mb-12 border-b border-[#00d4ff]/20 pb-6">
                <div className="flex items-center gap-4">
                    <Terminal className="w-8 h-8" />
                    <div>
                        <h1 className="text-2xl font-bold tracking-[0.2em] uppercase text-white">
                            ARES COMMAND <span className="text-[#00d4ff] text-sm">v1.0</span>
                        </h1>
                        <p className="text-xs text-[#00d4ff]/50">Global Surveillance // Lead Intelligence</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 text-xs">
                    <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        DATABASE ONLINE
                    </span>
                    <span className="flex items-center gap-2">
                        <Lock className="w-3 h-3" />
                        ENCRYPTED
                    </span>
                </div>
            </header>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
                {/* Stat 1 */}
                <div className="bg-[#0a0a0a] border border-[#00d4ff]/20 p-6 rounded-lg">
                    <h3 className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Total Targets</h3>
                    <div className="text-4xl font-bold text-white">{leads.length}</div>
                </div>
                {/* Stat 2 */}
                <div className="bg-[#0a0a0a] border border-[#00d4ff]/20 p-6 rounded-lg">
                    <h3 className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Active Swarm Nodes</h3>
                    <div className="text-4xl font-bold text-[#ffd700]">2</div>
                </div>
            </div>

            {/* Data Table */}
            <div className="border border-[#00d4ff]/20 rounded-lg overflow-hidden bg-[#0a0a0a]">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#00d4ff]/10 text-white border-b border-[#00d4ff]/20">
                            <tr>
                                <th className="p-4 uppercase tracking-wider text-[10px]">ID</th>
                                <th className="p-4 uppercase tracking-wider text-[10px]">Captured At</th>
                                <th className="p-4 uppercase tracking-wider text-[10px]">Email Contact</th>
                                <th className="p-4 uppercase tracking-wider text-[10px]">Intent Signal</th>
                                <th className="p-4 uppercase tracking-wider text-[10px]">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#00d4ff]/10">
                            {leads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-[#00d4ff]/5 transition-colors">
                                    <td className="p-4 font-mono text-white/50 text-xs">{lead.id.slice(0, 8)}...</td>
                                    <td className="p-4 text-white/70">
                                        {new Date(lead.createdAt).toLocaleDateString()} <span className="text-white/30">{new Date(lead.createdAt).toLocaleTimeString()}</span>
                                    </td>
                                    <td className="p-4 font-bold text-white">{lead.email}</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 bg-[#00d4ff]/10 text-[#00d4ff] rounded text-[10px] uppercase tracking-wide border border-[#00d4ff]/20">
                                            {lead.intent || 'GENERAL_INQUIRY'}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="flex items-center gap-1.5 text-xs text-[#ffd700]">
                                            <div className="w-1.5 h-1.5 bg-[#ffd700] rounded-full" />
                                            {lead.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {leads.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="p-12 text-center text-white/30 italic">
                                        No active signals detected. Swarm is scanning...
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-8 text-center text-[10px] text-white/20 uppercase tracking-[0.5em]">
                System Override Authorization: GAMMA-7
            </div>
        </div>
    );
}
