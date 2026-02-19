export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-slate-300">
            <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
                <div className="mb-10">
                    <span className="text-[#00d4ff] font-black tracking-[0.4em] uppercase text-[10px] mb-3 block">— Legal Notice</span>
                    <h1 className="text-4xl font-bold text-white border-b border-[#ffd700]/20 pb-4">
                        Impressum
                    </h1>
                </div>

                <div className="space-y-10">
                    {/* §5 TMG */}
                    <section>
                        <h2 className="text-sm font-black text-[#ffd700] mb-4 uppercase tracking-widest">Angaben gemäß § 5 TMG</h2>
                        <p className="leading-relaxed text-slate-400">
                            <strong className="text-white block mb-1">Osman Kadir — KI Lösungen</strong>
                            Osman Kadir<br />
                            Dorststraße 15<br />
                            98739 Neuhaus am Rennweg<br />
                            Deutschland
                        </p>
                    </section>

                    {/* Unternehmensgegenstand */}
                    <section className="p-6 rounded-xl border border-[#00d4ff]/10 bg-[#0d0d0d]">
                        <h2 className="text-sm font-black text-[#00d4ff] mb-3 uppercase tracking-widest">Unternehmensgegenstand</h2>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            IT-Dienstleistungen, digitale Services & Warenvermittlung.<br />
                            <span className="text-[#ffd700] font-semibold">Kein Handwerk. Kein eigener Warenbestand.</span>
                        </p>
                    </section>

                    {/* Kontakt */}
                    <section>
                        <h2 className="text-sm font-black text-[#ffd700] mb-4 uppercase tracking-widest">Kontakt</h2>
                        <p className="leading-relaxed text-slate-400 space-y-1">
                            <span className="block">Telefon: <a href="tel:+491713474348" className="text-[#00d4ff] hover:underline">+49 171 3474348</a></span>
                            <span className="block">E-Mail: <a href="mailto:okadirfinance@gmail.com" className="text-[#00d4ff] hover:underline">okadirfinance@gmail.com</a></span>
                        </p>
                    </section>

                    {/* Redaktionell verantwortlich */}
                    <section>
                        <h2 className="text-sm font-black text-[#ffd700] mb-4 uppercase tracking-widest">Redaktionell verantwortlich</h2>
                        <p className="leading-relaxed text-slate-400">
                            Osman Kadir<br />
                            Dorststraße 15<br />
                            98739 Neuhaus am Rennweg
                        </p>
                    </section>

                    {/* EU Streitschlichtung */}
                    <section>
                        <h2 className="text-sm font-black text-[#ffd700] mb-4 uppercase tracking-widest">EU-Streitschlichtung</h2>
                        <p className="leading-relaxed text-slate-500 text-sm">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#00d4ff] hover:underline">
                                https://ec.europa.eu/consumers/odr/
                            </a>.<br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-sm font-black text-[#ffd700] mb-4 uppercase tracking-widest">Verbraucherstreitbeilegung</h2>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    {/* Haftung */}
                    <section className="mt-12 pt-8 border-t border-white/5 text-sm text-slate-500 space-y-6">
                        <div>
                            <h2 className="text-base font-bold text-white mb-3">Haftung für Inhalte</h2>
                            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                        </div>
                        <div>
                            <h2 className="text-base font-bold text-white mb-3">Haftung für Links</h2>
                            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
                        </div>
                        <div>
                            <h2 className="text-base font-bold text-white mb-3">Urheberrecht</h2>
                            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
