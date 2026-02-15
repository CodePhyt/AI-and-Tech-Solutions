import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ShieldCheck, Lock, Database, Eye } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#0f0f0f] text-slate-300">
            <Header />
            <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
                <div className="flex items-center gap-4 mb-8 border-b border-[#C5A059]/30 pb-4">
                    <ShieldCheck className="w-10 h-10 text-[#00f3ff]" />
                    <h1 className="text-4xl font-bold text-white">
                        Datenschutzerklärung (Privacy Protocol)
                    </h1>
                </div>

                <div className="space-y-12">
                    <section className="bg-[#1a1a1a]/40 p-6 rounded-xl border border-white/5">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            I. Allgemeine Angaben
                        </h2>
                        <p className="mb-4 text-sm leading-relaxed">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                        <h3 className="text-md font-bold text-[#C5A059] mb-2 uppercase tracking-wide text-xs">Verantwortlicher</h3>
                        <p className="text-sm">
                            Osman Kadir<br />
                            Neuhaus am Rennweg, Germany<br />
                            E-Mail: contact@osmankadir.tech
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-[#C5A059]" />
                            II. Datenerfassung auf dieser Website
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Cookies</h3>
                                <p className="text-sm leading-relaxed mb-2">
                                    Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                                </p>
                                <p className="text-sm leading-relaxed">
                                    Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Server-Log-Dateien</h3>
                                <p className="text-sm leading-relaxed mb-2">
                                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                                </p>
                                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-400">
                                    <li>Browsertyp und Browserversion</li>
                                    <li>Verwendetes Betriebssystem</li>
                                    <li>Referrer URL</li>
                                    <li>Hostname des zugreifenden Rechners</li>
                                    <li>Uhrzeit der Serveranfrage</li>
                                    <li>IP-Adresse</li>
                                </ul>
                                <p className="text-sm mt-3">
                                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Kontaktformular / Sovereign Intake</h3>
                                <p className="text-sm leading-relaxed">
                                    Wenn Sie uns per Kontaktformular oder über den "Impact Assessment"-Prozess Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Database className="w-5 h-5 text-[#C5A059]" />
                            III. Analyse-Tools und Tools von Drittanbietern
                        </h2>
                        <p className="text-sm leading-relaxed mb-4">
                            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.
                        </p>
                        <h3 className="text-lg font-bold text-white mb-2">Hosting</h3>
                        <p className="text-sm leading-relaxed">
                            Wir hosten die Inhalte unserer Website bei einem externen Anbieter (Vercel Inc.). Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Eye className="w-5 h-5 text-[#C5A059]" />
                            IV. Ihre Rechte
                        </h2>
                        <p className="text-sm leading-relaxed mb-4">
                            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                        </p>
                        <h3 className="text-lg font-bold text-white mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                        <p className="text-sm leading-relaxed">
                            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.
                        </p>
                    </section>

                </div>
            </div>
            <Footer />
        </main>
    );
}
