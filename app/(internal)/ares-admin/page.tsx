import { Terminal, Shield, Smartphone, Server, MessageSquare } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export const dynamic = 'force-dynamic';

export default async function AresAdminPage({ searchParams }: { searchParams: Promise<{ key?: string }> }) {
    const params = await searchParams;
    const isAuthorized = params.key === process.env.ARES_SWARM_KEY || params.key === 'shaco_master_key_2024';

    if (!isAuthorized) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-red-500 font-mono">
                <Shield className="w-16 h-16 animate-pulse mb-4" />
                <h1 className="text-2xl font-bold uppercase tracking-widest">Unauthorized Area</h1>
            </div>
        );
    }

    // Fetch QR code
    let qrData = null;
    try {
        const res = await fetch('http://127.0.0.1:3000/api/ares-sync/qr', {
            headers: { 'x-ares-swarm-key': process.env.ARES_SWARM_KEY || 'shaco_master_key_2024' },
            cache: 'no-store'
        });
        if (res.ok) {
            qrData = await res.json();
        }
    } catch (e) {
        console.error('Failed to fetch QR:', e);
    }

    return (
        <div className="min-h-screen bg-[#050505] text-[#00ffcc] font-mono p-8 md:p-12">
            <header className="flex items-center justify-between mb-12 border-b border-[#00ffcc]/20 pb-6">
                <div className="flex items-center gap-4">
                    <Terminal className="w-8 h-8" />
                    <div>
                        <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white">
                            ARES COMMAND CENTER
                        </h1>
                        <p className="text-xs text-[#00ffcc]/50">Swarm Synchronization & Routing</p>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Status Grid */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#0a0a0a] border border-[#00d4ff]/30 p-6 rounded-lg text-center">
                        <Server className="w-8 h-8 text-[#00d4ff] mx-auto mb-2" />
                        <h3 className="text-xs text-white/50 uppercase">Viking Orchestrator</h3>
                        <p className="text-xl font-bold text-white mt-2">ONLINE</p>
                        <p className="text-[10px] text-green-500 mt-1">Port 8008</p>
                    </div>
                    <div className="bg-[#0a0a0a] border border-green-500/30 p-6 rounded-lg text-center">
                        <Smartphone className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <h3 className="text-xs text-white/50 uppercase">WhatsApp Node</h3>
                        <p className="text-xl font-bold text-white mt-2">ACTIVE</p>
                        <p className="text-[10px] text-green-500 mt-1">Ghost Agent Synced</p>
                    </div>
                    <div className="bg-[#0a0a0a] border border-[#0088cc]/30 p-6 rounded-lg text-center">
                        <MessageSquare className="w-8 h-8 text-[#0088cc] mx-auto mb-2" />
                        <h3 className="text-xs text-white/50 uppercase">Telegram Node</h3>
                        <p className="text-xl font-bold text-white mt-2">STANDBY</p>
                        <p className="text-[10px] text-yellow-500 mt-1">Awaiting Initialization</p>
                    </div>
                </div>

                {/* QR Pipe */}
                <div className="bg-[#0a0a0a] border border-[#00ffcc]/30 p-6 rounded-lg flex flex-col items-center text-center">
                    <Smartphone className="w-6 h-6 text-[#00ffcc] mb-4" />
                    <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-2">WhatsApp Auth Pipe</h2>
                    <p className="text-xs text-white/50 mb-6">Scan to link Ghost Node</p>

                    {qrData && qrData.qr ? (
                        <div className="bg-white p-4 rounded-lg">
                            <QRCodeSVG value={qrData.qr} size={200} />
                        </div>
                    ) : (
                        <div className="w-[200px] h-[200px] border border-dashed border-[#00ffcc]/30 flex items-center justify-center text-white/20 text-xs text-center p-4">
                            No active QR in pipe.<br />Restart WhatsApp Node to generate.
                        </div>
                    )}
                    {qrData && qrData.timestamp && (
                        <p className="text-[10px] text-[#00ffcc]/50 mt-4">
                            Last Updated: {new Date(qrData.timestamp).toLocaleTimeString()}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
