import { PrismaClient } from '@prisma/client';
import { ShieldAlert, Terminal, Lock, Database, FileText, Activity, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { approveQuote, deployOutboundLead } from './actions';
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

    const outboundLeads = await prisma.outboundLead.findMany({
        orderBy: { createdAt: 'desc' },
        take: 50,
    });

    const pendingQuotes = await prisma.message.findMany({
        where: { syncStatus: 'REQUIRES_OSMAN_APPROVAL' },
        include: { ChatSession: { include: { Lead: true } } },
        orderBy: { createdAt: 'desc' }
    });

    const liveFeed = await prisma.message.findMany({
        orderBy: { createdAt: 'desc' },
        take: 15,
        include: { ChatSession: { include: { Lead: true } } }
    });

    return (
        <div className="min-h-screen bg-[#050505] text-[#00d4ff] font-mono p-8 md:p-12">
            {/* Header */}
            <header className="flex items-center justify-between mb-12 border-b border-[#00d4ff]/20 pb-6">
                <div className="flex items-center gap-4">
                    <Terminal className="w-8 h-8" />
                    <div>
                        <h1 className="text-xl md:text-2xl font-black tracking-tighter text-[#e5e5e5] flex items-center gap-3">
                            SHACO COMMAND <span className="text-[#00d4ff] text-sm">v1.0</span>
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
                    <h3 className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Inbound Signals</h3>
                    <div className="text-4xl font-bold text-white">{leads.length}</div>
                </div>
                {/* Stat 2 */}
                <div className="bg-[#0a0a0a] border border-[#ff0000]/20 p-6 rounded-lg">
                    <h3 className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Outbound Intel</h3>
                    <div className="text-4xl font-bold text-[#ff0000]">{outboundLeads.length}</div>
                </div>
                {/* Stat 3 */}
                <div className="bg-[#0a0a0a] border border-[#00d4ff]/20 p-6 rounded-lg">
                    <h3 className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Active Swarm Nodes</h3>
                    <div className="text-4xl font-bold text-[#ffd700]">2</div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                {/* INBOUND SIGNALS */}
                <div>
                    <h2 className="text-white font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#00d4ff]" /> Inbound Signals
                    </h2>
                    <div className="border border-[#00d4ff]/20 rounded-lg overflow-hidden bg-[#0a0a0a]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#00d4ff]/10 text-white border-b border-[#00d4ff]/20">
                                    <tr>
                                        <th className="p-4 uppercase tracking-wider text-[10px]">Captured At</th>
                                        <th className="p-4 uppercase tracking-wider text-[10px]">Email Contact</th>
                                        <th className="p-4 uppercase tracking-wider text-[10px]">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#00d4ff]/10">
                                    {leads.map((lead) => (
                                        <tr key={lead.id} className="hover:bg-[#00d4ff]/5 transition-colors">
                                            <td className="p-4 text-white/70">
                                                {new Date(lead.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="p-4 font-bold text-white">{lead.email}</td>
                                            <td className="p-4">
                                                <span className="flex items-center gap-1.5 text-xs text-[#ffd700]">
                                                    <div className="w-1.5 h-1.5 bg-[#ffd700] rounded-full" />
                                                    {lead.sentiment || 'N/A'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {leads.length === 0 && (
                                        <tr>
                                            <td colSpan={3} className="p-12 text-center text-white/30 italic">
                                                No inbound signals detected.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* OUTBOUND INTEL */}
                <div>
                    <h2 className="text-white font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-[#ff0000]" /> ZeroClaw Hunter (Outbound)
                    </h2>
                    <div className="border border-[#ff0000]/20 rounded-lg overflow-hidden bg-[#0a0a0a]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#ff0000]/10 text-white border-b border-[#ff0000]/20">
                                    <tr>
                                        <th className="p-4 uppercase tracking-wider text-[10px]">Target</th>
                                        <th className="p-4 uppercase tracking-wider text-[10px]">Intel / Vector</th>
                                        <th className="p-4 uppercase tracking-wider text-[10px]">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#ff0000]/10">
                                    {outboundLeads.map((intel: any) => (
                                        <tr key={intel.id} className="hover:bg-[#ff0000]/5 transition-colors">
                                            <td className="p-4 text-white">
                                                <div className="font-bold">{intel.name}</div>
                                                <div className="text-xs text-white/50">{intel.phone}</div>
                                            </td>
                                            <td className="p-4">
                                                <div className="text-[10px] text-[#ff0000] uppercase border border-[#ff0000]/30 px-2 py-1 rounded inline-block mb-2">
                                                    {intel.queryKeyword}
                                                </div>
                                                <div className="text-xs text-white/70 italic line-clamp-2">
                                                    "{intel.generatedPitch}"
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex gap-4">
                                                    {intel.status === 'DEPLOYING' ? (
                                                        <span className="flex-1 bg-[#0a0a0a] border border-[#ff0000]/30 text-[#ff0000] py-2 rounded-lg text-[10px] font-bold tracking-widest text-center animate-pulse block">
                                                            DEPLOYING...
                                                        </span>
                                                    ) : intel.status === 'CONTACTED' ? (
                                                        <span className="flex-1 bg-[#0a0a0a] border border-green-500/30 text-green-500 py-2 rounded-lg text-[10px] font-bold tracking-widest text-center block">
                                                            CONTACTED ✓
                                                        </span>
                                                    ) : intel.status === 'FAILED' ? (
                                                        <span className="flex-1 bg-[#0a0a0a] border border-red-500/30 text-red-500 py-2 rounded-lg text-[10px] font-bold tracking-widest text-center block">
                                                            FAILED ✗
                                                        </span>
                                                    ) : (
                                                        <form action={deployOutboundLead.bind(null, intel.id)} className="flex-1 w-full">
                                                            <button type="submit" className="w-full bg-[#0a0a0a] border border-[#00d4ff]/30 hover:border-[#00d4ff] text-[#e5e5e5] py-2 px-1 rounded-lg text-[11px] font-bold tracking-widest transition-all text-center">
                                                                Deploy SHACO
                                                            </button>
                                                        </form>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {outboundLeads.length === 0 && (
                                        <tr>
                                            <td colSpan={3} className="p-12 text-center text-white/30 italic">
                                                No outbound targets identified. Run Scout script.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* LIVE SWARM FEED & QUOTES */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 mt-12">

                {/* GENERATED QUOTES (HITL) */}
                <div>
                    <h2 className="text-white font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#ffd700]" /> Pending High-Value Quotes
                    </h2>
                    <div className="border border-[#ffd700]/30 rounded-lg overflow-hidden bg-[#0a0a0a]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#ffd700]/10 text-white border-b border-[#ffd700]/20">
                                    <tr>
                                        <th className="p-4 uppercase tracking-wider text-[10px]">Client / ID</th>
                                        <th className="p-4 uppercase tracking-wider text-[10px]">Media</th>
                                        <th className="p-4 uppercase tracking-wider text-[10px] text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#ffd700]/10">
                                    {pendingQuotes.map((quote) => (
                                        <tr key={quote.id} className="hover:bg-[#ffd700]/5 transition-colors">
                                            <td className="p-4 text-white">
                                                <div className="font-bold text-[#ffd700] text-xs mb-1">
                                                    {quote.ChatSession?.Lead?.email || 'Anonymous Session'}
                                                </div>
                                                <div className="text-[10px] text-white/50">{new Date(quote.createdAt).toLocaleString()}</div>
                                            </td>
                                            <td className="p-4">
                                                {quote.mediaBase64 ? (
                                                    <a
                                                        href={`data:application/pdf;base64,${quote.mediaBase64}`}
                                                        download={quote.mediaName || 'Angebot.pdf'}
                                                        className="text-xs text-[#00d4ff] underline hover:text-white transition-colors"
                                                    >
                                                        {quote.mediaName || 'PDF Document'}
                                                    </a>
                                                ) : <span className="text-xs text-white/30">None</span>}
                                            </td>
                                            <td className="p-4 text-right">
                                                <form action={approveQuote.bind(null, quote.id)}>
                                                    <button type="submit" className="px-3 py-1.5 bg-green-500/20 hover:bg-green-500/40 text-green-400 border border-green-500/50 rounded text-[10px] font-bold uppercase transition-all whitespace-nowrap flex items-center gap-1 ml-auto">
                                                        <CheckCircle className="w-3 h-3" /> Approve & Send
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}
                                    {pendingQuotes.length === 0 && (
                                        <tr>
                                            <td colSpan={3} className="p-12 text-center text-white/30 italic">
                                                No pending high-value quotes require authorization.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* LIVE SWARM FEED */}
                <div>
                    <h2 className="text-white font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#00ffcc]" /> Live Swarm Feed
                    </h2>
                    <div className="border border-[#00ffcc]/30 rounded-lg p-4 bg-black h-[400px] overflow-y-auto font-mono text-[11px] leading-tight space-y-3">
                        {liveFeed.map(log => (
                            <div key={log.id} className="border-l-2 border-[#00ffcc]/50 pl-2">
                                <div className="text-white/40 mb-1">
                                    [{new Date(log.createdAt).toLocaleTimeString()}]
                                    <span className="ml-2 text-[10px] text-white/60">
                                        ID: {log.ChatSession?.Lead?.email || log.chatSessionId.slice(-6)}
                                    </span>
                                </div>
                                <div className={`${log.role === 'assistant' ? 'text-[#00ffcc]' : 'text-[#00d4ff]'} break-words whitespace-pre-wrap`}>
                                    <span className="uppercase font-bold opacity-70 mr-1">{log.role}:</span>
                                    {log.content || '<PENDING_SHACO_TRANSMISSION>'}
                                </div>
                                {log.syncStatus === 'REQUIRES_OSMAN_APPROVAL' && (
                                    <div className="text-red-400 mt-1 italic">[SYSTEM FLAG: REQUIRES CLEARANCE]</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="mt-8 text-center text-[10px] text-white/20 uppercase tracking-[0.5em]">
                System Override Authorization: GAMMA-7
            </div>
        </div>
    );
}
