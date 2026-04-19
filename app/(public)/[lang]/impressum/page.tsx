import React from 'react';
import { Building2, Phone, Mail, MessageCircle, Scale, Link2, Copyright, Globe, ShieldAlert } from 'lucide-react';

// ── Inline translations (legal texts stay in the page — no dict bloat) ────────
const copy = {
    de: {
        legalBadge: 'Rechtliches',
        h1: 'Impressum',
        subtitle: 'Angaben gemäß § 5 TMG',
        companyTitle: 'Unternehmensangaben',
        companyName: 'KI & TECH Lösungen',
        companyOwner: 'Inhaber: Osman Kadir',
        contactTitle: 'Kontakt',
        ustTitle: 'Umsatzsteuer-ID',
        ustDesc: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:',
        ustValue: '[USt-IdNr. – bitte eintragen]',
        euTitle: 'EU-Streitschlichtung',
        euDesc: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
        euNote: 'Unsere E-Mail-Adresse finden Sie oben im Impressum.',
        consumerTitle: 'Verbraucherstreitbeilegung / Universalschlichtungsstelle',
        consumerDesc: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        liabilityContentTitle: 'Haftung für Inhalte',
        liabilityContentP1: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
        liabilityContentP2: 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
        liabilityLinksTitle: 'Haftung für Links',
        liabilityLinksP1: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
        copyrightTitle: 'Urheberrecht',
        copyrightP1: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
        footer: 'Stand: März 2026 · KI & TECH Lösungen',
        labelPhone: 'Telefon',
        labelEmail: 'E-Mail',
        labelWa: 'WhatsApp',
    },
    en: {
        legalBadge: 'Legal Notice',
        h1: 'Legal Notice (Impressum)',
        subtitle: 'Information pursuant to § 5 TMG (German Telemedia Act)',
        companyTitle: 'Company Information',
        companyName: 'KI & TECH Solutions',
        companyOwner: 'Owner: Osman Kadir',
        contactTitle: 'Contact',
        ustTitle: 'VAT Identification Number',
        ustDesc: 'VAT identification number pursuant to § 27a of the German Value Added Tax Act (UStG):',
        ustValue: '[VAT ID – please insert]',
        euTitle: 'EU Dispute Resolution',
        euDesc: 'The European Commission provides an online dispute resolution (ODR) platform:',
        euNote: 'Our email address can be found above in the Legal Notice.',
        consumerTitle: 'Consumer Dispute Resolution / Universal Arbitration Board',
        consumerDesc: 'We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
        liabilityContentTitle: 'Liability for Content',
        liabilityContentP1: 'As a service provider, we are responsible for our own content on these pages in accordance with general law pursuant to § 7 para. 1 TMG. According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
        liabilityContentP2: 'Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the point in time at which a specific infringement becomes known. Upon becoming aware of such infringements, we will remove the relevant content immediately.',
        liabilityLinksTitle: 'Liability for Links',
        liabilityLinksP1: 'Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.',
        copyrightTitle: 'Copyright',
        copyrightP1: 'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any form of commercialisation of such material beyond the scope of the copyright law require the written consent of the respective author or creator.',
        footer: 'As of: March 2026 · KI & TECH Solutions',
        labelPhone: 'Phone',
        labelEmail: 'Email',
        labelWa: 'WhatsApp',
    },
    tr: {
        legalBadge: 'Yasal Bilgilendirme',
        h1: 'Yasal Bilgilendirme (Impressum)',
        subtitle: 'Alman Telemedya Kanunu § 5 TMG uyarınca zorunlu bilgiler',
        companyTitle: 'Şirket Bilgileri',
        companyName: 'KI & TECH Çözümleri',
        companyOwner: 'Sahibi: Osman Kadir',
        contactTitle: 'İletişim',
        ustTitle: 'KDV Kimlik Numarası',
        ustDesc: 'Alman Katma Değer Vergisi Kanunu § 27a uyarınca KDV kimlik numarası:',
        ustValue: '[KDV No – lütfen giriniz]',
        euTitle: 'AB Uyuşmazlık Çözümü',
        euDesc: 'Avrupa Komisyonu, çevrimiçi uyuşmazlık çözümü (ODR) için bir platform sunmaktadır:',
        euNote: 'E-posta adresimizi yukarıdaki yasal bilgilendirmede bulabilirsiniz.',
        consumerTitle: 'Tüketici Uyuşmazlık Çözümü / Evrensel Tahkim Kurulu',
        consumerDesc: 'Bir tüketici tahkim kurulu önündeki uyuşmazlık çözüm süreçlerine katılmaya ne istekli ne de yükümlüyüz.',
        liabilityContentTitle: 'İçerik Sorumluluğu',
        liabilityContentP1: 'Bir hizmet sağlayıcı olarak, bu sayfalardaki kendi içeriklerimizden § 7 Abs. 1 TMG uyarınca genel hükümler çerçevesinde sorumluyuz. Bununla birlikte, §§ 8 ile 10 TMG kapsamında, hizmet sağlayıcı olarak iletilen veya depolanan üçüncü taraf bilgilerini izleme ya da yasadışı faaliyete işaret eden koşulları araştırma yükümlülüğümüz bulunmamaktadır.',
        liabilityContentP2: 'Genel hükümler uyarınca bilgilerin kaldırılması veya kullanımının engellenmesine ilişkin yükümlülükler saklıdır. Ancak bu yönde bir sorumluluk, yalnızca somut bir ihlalden haberdar olunduğu andan itibaren doğmaktadır. Böyle bir ihlalden haberdar olduğumuzda ilgili içeriği derhal kaldıracağız.',
        liabilityLinksTitle: 'Bağlantı Sorumluluğu',
        liabilityLinksP1: 'Teklifimiz, içerikleri üzerinde hiçbir etkimizin olmadığı harici üçüncü taraf web sitelerine bağlantılar içermektedir. Bu nedenle söz konusu harici içerikler için herhangi bir sorumluluk kabul edemeyiz. Bağlantıların yönlendirildiği sayfaların içeriğinden her zaman ilgili sağlayıcı veya işletici sorumludur.',
        copyrightTitle: 'Telif Hakkı',
        copyrightP1: 'Bu sayfalarda site operatörleri tarafından oluşturulan içerik ve eserler Alman telif hakkı kanununa tabidir. Telif hakkı kanununun sınırları ötesinde bu materyallerin çoğaltılması, işlenmesi, dağıtılması ve her türlü ticari kullanımı, ilgili yazar veya yaratıcının yazılı onayını gerektirmektedir.',
        footer: 'Tarih: Mart 2026 · KI & TECH Çözümleri',
        labelPhone: 'Telefon',
        labelEmail: 'E-Posta',
        labelWa: 'WhatsApp',
    },
};

export default async function Impressum({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = copy[lang as keyof typeof copy] ?? copy.de;

    // Shared address placeholder (user to replace with real address)
    const address = 'Dorststraße 15, 98724 Neuhaus am Rennweg, Deutschland';

    return (
        <div className="w-full bg-corporate-dark">
            {/* Hero band */}
            <div className="relative py-20 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-corporate-blue/6 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs tracking-widest uppercase mb-6">
                        {t.legalBadge}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tight">{t.h1}</h1>
                    <p className="text-slate-500 text-base">{t.subtitle}</p>
                </div>
            </div>

            {/* Body */}
            <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-10 text-slate-300 leading-relaxed">

                {/* Company */}
                <Section icon={Building2} title={t.companyTitle}>
                    <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-1 text-[15px]">
                        <p className="font-bold text-white text-lg">{t.companyName}</p>
                        <p>{t.companyOwner}</p>
                        <p className="text-slate-400">{address}</p>
                    </div>
                </Section>

                {/* Contact */}
                <Section icon={Phone} title={t.contactTitle}>
                    <div className="space-y-3 text-[15px]">
                        <ContactRow icon={Phone} label={t.labelPhone} value="+49 171 347 4348" href="tel:+491713474348" />
                        <ContactRow icon={Mail} label={t.labelEmail} value="osmankadirde@gmail.com" href="mailto:osmankadirde@gmail.com" />
                        <ContactRow icon={MessageCircle} label={t.labelWa} value="wa.me/491713474348" href="https://wa.me/491713474348" external />
                    </div>
                </Section>

                {/* USt */}
                <Section icon={Globe} title={t.ustTitle}>
                    <p>{t.ustDesc}</p>
                    <p className="font-mono text-slate-500 bg-white/3 border border-white/8 rounded-lg px-4 py-2 inline-block mt-2 text-sm">{t.ustValue}</p>
                </Section>

                {/* EU */}
                <Section icon={Scale} title={t.euTitle}>
                    <p>
                        {t.euDesc}{' '}
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-corporate-blue hover:underline break-all">
                            ec.europa.eu/consumers/odr
                        </a>
                    </p>
                    <p className="mt-2">{t.euNote}</p>
                </Section>

                {/* Consumer */}
                <Section icon={ShieldAlert} title={t.consumerTitle}>
                    <p>{t.consumerDesc}</p>
                </Section>

                {/* Liability Content */}
                <Section icon={Link2} title={t.liabilityContentTitle}>
                    <p>{t.liabilityContentP1}</p>
                    <p className="mt-3">{t.liabilityContentP2}</p>
                </Section>

                {/* Liability Links */}
                <Section icon={Link2} title={t.liabilityLinksTitle}>
                    <p>{t.liabilityLinksP1}</p>
                </Section>

                {/* Copyright */}
                <Section icon={Copyright} title={t.copyrightTitle}>
                    <p>{t.copyrightP1}</p>
                </Section>

                <p className="text-slate-600 text-sm pt-6 border-t border-white/5">{t.footer}</p>
            </div>
        </div>
    );
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function Section({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>, title: string, children: React.ReactNode }) {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-white/8 pb-3">
                <div className="w-8 h-8 rounded-lg bg-corporate-blue/15 border border-corporate-blue/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-corporate-blue" />
                </div>
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <div className="pl-11 space-y-3">{children}</div>
        </section>
    );
}

function ContactRow({ icon: Icon, label, value, href, external }: { icon: React.ComponentType<{ className?: string }>, label: string, value: string, href: string, external?: boolean }) {
    return (
        <div className="flex items-center gap-4 p-4 bg-white/3 border border-white/8 rounded-xl hover:border-white/15 transition-colors">
            <Icon className="w-5 h-5 text-slate-400 shrink-0" />
            <span className="text-slate-500 text-sm w-20 shrink-0">{label}</span>
            <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="text-corporate-blue hover:underline break-all">
                {value}
            </a>
        </div>
    );
}
