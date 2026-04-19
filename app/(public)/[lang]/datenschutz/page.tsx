import React from 'react';
import { User, Server, Mail, MessageCircle, Cookie, ShieldCheck, Lock, RefreshCw, Database } from 'lucide-react';

// ── Inline translations ───────────────────────────────────────────────────────
const copy = {
    de: {
        badge: 'Datenschutz',
        h1: 'Datenschutzerklärung',
        subtitle: 'Gemäß DSGVO (EU) 2016/679 und BDSG',
        s1Title: '1. Verantwortlicher',
        s1Intro: 'Verantwortlicher im Sinne der Datenschutzgesetze ist:',
        companyName: 'KI & TECH Lösungen',
        companyOwner: 'Inhaber: Osman Kadir',
        s2Title: '2. Allgemeines zur Datenverarbeitung',
        s2P1: 'Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
        s2P2: 'Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis und nur soweit dies für die Erfüllung eines Vertrags oder einer vorvertraglichen Maßnahme erforderlich ist.',
        s3Title: '3. Hosting & Technischer Betrieb',
        s3P1: 'Diese Website wird bei einem professionellen Hosting-Anbieter (Netlify Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA) gehostet. Beim Besuch unserer Website werden automatisch folgende Daten in Server-Logfiles gespeichert:',
        s3Bullets: [
            'IP-Adresse des anfragenden Systems (anonymisiert)',
            'Datum und Uhrzeit des Zugriffs',
            'Name und URL der abgerufenen Datei',
            'Website, von der aus der Zugriff erfolgt (Referrer-URL)',
            'Verwendeter Browser und ggf. das Betriebssystem',
        ],
        s3P2: 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb der Website). Die Daten werden nach spätestens 7 Tagen gelöscht.',
        s4Title: '4. Kontaktaufnahme per E-Mail oder Telefon',
        s4P1: 'Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre übermittelten Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Ihre Anfrage) bei uns gespeichert. Diese Daten werden ausschließlich für die Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen genutzt.',
        s4P2: 'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet ist und kein Vertragsverhältnis entstanden ist.',
        s5Title: '5. WhatsApp Business Kommunikation',
        s5P1: 'Für die direkte Kommunikation verwenden wir WhatsApp Business, ein Dienst der Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.',
        s5P2: 'Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Nachrichten und Ihre Telefonnummer von WhatsApp verarbeitet und auf Servern von Meta (u.a. in den USA) gespeichert. Auf diese Verarbeitung haben wir keinen Einfluss. Weitere Informationen:',
        s5P3: 'Die Kontaktaufnahme per WhatsApp ist freiwillig und erfolgt auf Ihre Initiative hin. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).',
        s6Title: '6. Cookies',
        s6P1: 'Unsere Website verwendet ausschließlich technisch notwendige Cookies (z. B. für die Verwaltung der Sprachauswahl). Diese Cookies sind für den Betrieb der Website erforderlich und können in Ihrem Browser nicht deaktiviert werden, ohne die Funktionalität der Website einzuschränken.',
        s6Callout: 'Wir verwenden keine Tracking-Cookies, Analyse-Dienste (wie Google Analytics) oder Werbecookies. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.',
        s7Title: '7. Ihre Rechte als betroffene Person',
        s7Intro: 'Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:',
        s7Rights: [
            ['Auskunft', 'Art. 15 DSGVO'],
            ['Berichtigung', 'Art. 16 DSGVO'],
            ['Löschung', 'Art. 17 DSGVO'],
            ['Einschränkung der Verarbeitung', 'Art. 18 DSGVO'],
            ['Datenübertragbarkeit', 'Art. 20 DSGVO'],
            ['Widerspruch gegen Verarbeitung', 'Art. 21 DSGVO'],
        ],
        s7Contact: 'Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:',
        s7Supervisory: 'Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.',
        s8Title: '8. Datensicherheit',
        s8P1: 'Wir sichern unsere Website und andere Systeme durch technische und organisatorische Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten durch unbefugte Personen. Der Datentransfer erfolgt verschlüsselt über HTTPS (TLS).',
        s9Title: '9. Aktualität und Änderung dieser Datenschutzerklärung',
        s9P1: 'Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher oder behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.',
        footer: 'Stand: März 2026 · KI & TECH Lösungen',
        noTracking: '✅ Keine Tracking-Cookies',
    },
    en: {
        badge: 'Privacy Policy',
        h1: 'Privacy Policy',
        subtitle: 'Pursuant to GDPR (EU) 2016/679 and BDSG',
        s1Title: '1. Data Controller',
        s1Intro: 'The data controller within the meaning of data protection laws is:',
        companyName: 'KI & TECH Solutions',
        companyOwner: 'Owner: Osman Kadir',
        s2Title: '2. General Information on Data Processing',
        s2P1: 'We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.',
        s2P2: 'Use of our website is generally possible without providing personal data. Where personal data is collected on our pages, it is always done on a voluntary basis and only to the extent necessary for the fulfilment of a contract or a pre-contractual measure.',
        s3Title: '3. Hosting & Technical Operation',
        s3P1: 'This website is hosted by a professional hosting provider (Netlify Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA). When you visit our website, the following data is automatically stored in server log files:',
        s3Bullets: [
            'IP address of the requesting system (anonymised)',
            'Date and time of access',
            'Name and URL of the retrieved file',
            'Website from which access is made (referrer URL)',
            'Browser used and, if applicable, the operating system',
        ],
        s3P2: 'The legal basis is Art. 6(1)(f) GDPR (legitimate interest in the secure operation of the website). Data is deleted after a maximum of 7 days.',
        s4Title: '4. Contact via Email or Phone',
        s4P1: 'When you contact us by email or phone, the data you transmit (e.g. name, email address, phone number, your enquiry) is stored by us. This data is used exclusively for processing your enquiry and any follow-up questions.',
        s4P2: 'The legal basis is Art. 6(1)(b) GDPR (performance of a contract / pre-contractual measures) and Art. 6(1)(f) GDPR. Data is deleted once your enquiry has been fully processed and no contractual relationship has arisen.',
        s5Title: '5. WhatsApp Business Communication',
        s5P1: 'For direct communication we use WhatsApp Business, a service of Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.',
        s5P2: 'When you contact us via WhatsApp, your messages and phone number are processed by WhatsApp and stored on Meta servers (including in the USA). We have no influence over this processing. Further information:',
        s5P3: 'Contacting us via WhatsApp is voluntary and at your own initiative. The legal basis is Art. 6(1)(f) GDPR (legitimate interest).',
        s6Title: '6. Cookies',
        s6P1: 'Our website uses only technically necessary cookies (e.g. for managing language selection). These cookies are required for the operation of the website and cannot be deactivated in your browser without restricting the functionality of the website.',
        s6Callout: 'We do not use tracking cookies, analytics services (such as Google Analytics) or advertising cookies. The legal basis is Art. 6(1)(f) GDPR.',
        s7Title: '7. Your Rights as a Data Subject',
        s7Intro: 'You have the following rights with respect to the personal data concerning you:',
        s7Rights: [
            ['Right of Access', 'Art. 15 GDPR'],
            ['Right to Rectification', 'Art. 16 GDPR'],
            ['Right to Erasure', 'Art. 17 GDPR'],
            ['Right to Restriction of Processing', 'Art. 18 GDPR'],
            ['Right to Data Portability', 'Art. 20 GDPR'],
            ['Right to Object to Processing', 'Art. 21 GDPR'],
        ],
        s7Contact: 'To exercise your rights, please contact us at:',
        s7Supervisory: 'You also have the right to lodge a complaint with a data protection supervisory authority regarding the processing of your personal data by us.',
        s8Title: '8. Data Security',
        s8P1: 'We secure our website and other systems through technical and organisational measures against loss, destruction, access, alteration or distribution of your data by unauthorised persons. Data transmission is encrypted via HTTPS (TLS).',
        s9Title: '9. Currency and Amendments to This Privacy Policy',
        s9P1: 'This privacy policy is currently valid and is dated March 2026. Due to the further development of our website or changes in legal or regulatory requirements, it may be necessary to amend this privacy policy.',
        footer: 'As of: March 2026 · KI & TECH Solutions',
        noTracking: '✅ No Tracking Cookies',
    },
    tr: {
        badge: 'Gizlilik Politikası',
        h1: 'Gizlilik Politikası',
        subtitle: 'GDPR (AB) 2016/679 ve BDSG uyarınca',
        s1Title: '1. Veri Sorumlusu',
        s1Intro: 'Veri koruma mevzuatı kapsamında veri sorumlusu:',
        companyName: 'KI & TECH Çözümleri',
        companyOwner: 'Sahibi: Osman Kadir',
        s2Title: '2. Veri İşleme Hakkında Genel Bilgiler',
        s2P1: 'Kişisel verilerinizin korunmasına büyük önem veriyoruz. Kişisel verilerinizi gizliliğe uygun şekilde ve yasal veri koruma düzenlemelerine ile bu gizlilik politikasına uygun olarak işliyoruz.',
        s2P2: 'Web sitemizi genellikle kişisel veri vermeksizin kullanmak mümkündür. Sayfalarımızda kişisel veri toplanması halinde bu işlem her zaman gönüllülük esasına ve yalnızca bir sözleşmenin veya sözleşme öncesi tedbirin yerine getirilmesi için gerekli olduğu ölçüde gerçekleştirilir.',
        s3Title: '3. Barındırma & Teknik İşletim',
        s3P1: 'Bu web sitesi profesyonel bir barındırma sağlayıcısı (Netlify Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, ABD) tarafından barındırılmaktadır. Web sitemizi ziyaret ettiğinizde aşağıdaki veriler otomatik olarak sunucu günlük dosyalarına kaydedilir:',
        s3Bullets: [
            'Talep eden sistemin IP adresi (anonimleştirilmiş)',
            'Erişim tarihi ve saati',
            'Alınan dosyanın adı ve URL\'si',
            'Erişimin yapıldığı web sitesi (referrer URL)',
            'Kullanılan tarayıcı ve varsa işletim sistemi',
        ],
        s3P2: 'Yasal dayanak, Mad. 6(1)(f) GDPR\'dur (web sitesinin güvenli işletiminde meşru menfaat). Veriler en geç 7 gün sonra silinir.',
        s4Title: '4. E-Posta veya Telefon ile İletişim',
        s4P1: 'E-posta veya telefon yoluyla bize ulaştığınızda ilettiğiniz veriler (örn. ad, e-posta adresi, telefon numarası, talebiniz) tarafımızca saklanır. Bu veriler yalnızca talebinizi ve olası takip sorularını yanıtlamak amacıyla kullanılır.',
        s4P2: 'Yasal dayanak, Mad. 6(1)(b) GDPR (sözleşmenin ifası / sözleşme öncesi tedbirler) ve Mad. 6(1)(f) GDPR\'dur. Talebiniz tamamen yanıtlandıktan ve herhangi bir sözleşme ilişkisi kurulmadıktan sonra veriler silinir.',
        s5Title: '5. WhatsApp Business İletişimi',
        s5P1: 'Doğrudan iletişim için Meta Platforms Ireland Limited (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, İrlanda) firmasına ait WhatsApp Business hizmetini kullanıyoruz.',
        s5P2: 'WhatsApp aracılığıyla bize ulaştığınızda mesajlarınız ve telefon numaranız WhatsApp tarafından işlenip Meta sunucularında (ABD dahil) depolanır. Bu işlem üzerinde herhangi bir kontrolümüz bulunmamaktadır. Daha fazla bilgi:',
        s5P3: 'WhatsApp üzerinden iletişim kurmak tamamen gönüllülük esasına dayanır ve sizin inisiyatifinizle gerçekleşir. Yasal dayanak, Mad. 6(1)(f) GDPR\'dur (meşru menfaat).',
        s6Title: '6. Çerezler (Cookies)',
        s6P1: 'Web sitemiz yalnızca teknik açıdan zorunlu çerezler kullanmaktadır (örn. dil seçiminin yönetimi için). Bu çerezler web sitesinin işletimi için gereklidir ve tarayıcınızda, web sitesinin işlevselliğini kısıtlamadan devre dışı bırakılamaz.',
        s6Callout: 'İzleme çerezleri, analiz hizmetleri (Google Analytics gibi) veya reklam çerezleri kullanmıyoruz. Yasal dayanak, Mad. 6(1)(f) GDPR\'dur.',
        s7Title: '7. Veri Sahibi Olarak Haklarınız',
        s7Intro: 'Sizi ilgilendiren kişisel veriler konusunda bize karşı aşağıdaki haklara sahipsiniz:',
        s7Rights: [
            ['Erişim Hakkı', 'Mad. 15 GDPR'],
            ['Düzeltme Hakkı', 'Mad. 16 GDPR'],
            ['Silme Hakkı', 'Mad. 17 GDPR'],
            ['İşlemeyi Kısıtlama Hakkı', 'Mad. 18 GDPR'],
            ['Veri Taşınabilirliği Hakkı', 'Mad. 20 GDPR'],
            ['İşlemeye İtiraz Hakkı', 'Mad. 21 GDPR'],
        ],
        s7Contact: 'Haklarınızı kullanmak için lütfen şu adresten bize ulaşın:',
        s7Supervisory: 'Ayrıca, kişisel verilerinizin tarafımızca işlenmesine ilişkin bir veri koruma denetim makamına şikâyette bulunma hakkınız da mevcuttur.',
        s8Title: '8. Veri Güvenliği',
        s8P1: 'Web sitemizi ve diğer sistemlerimizi yetkisiz kişilerin verilerinize kaybetmesi, imha etmesi, erişmesi, değiştirmesi veya dağıtması gibi tehditlere karşı teknik ve organizasyonel önlemlerle güvence altına alıyoruz. Veri iletimi HTTPS (TLS) üzerinden şifreli olarak gerçekleştirilir.',
        s9Title: '9. Bu Gizlilik Politikasının Güncelliği ve Değişiklikleri',
        s9P1: 'Bu gizlilik politikası Mart 2026 itibarıyla geçerlidir. Web sitemizin geliştirilmesi veya yasal ya da düzenleyici gerekliliklerin değişmesi nedeniyle bu politikada değişiklik yapılması gerekebilir.',
        footer: 'Tarih: Mart 2026 · KI & TECH Çözümleri',
        noTracking: '✅ İzleme Çerezi Kullanılmıyor',
    },
};

export default async function Datenschutz({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = copy[lang as keyof typeof copy] ?? copy.de;

    // Shared address placeholder
    const address = 'Dorststraße 15, 98724 Neuhaus am Rennweg, Deutschland';

    return (
        <div className="w-full bg-corporate-dark">
            {/* Hero band */}
            <div className="relative py-20 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-80 h-80 bg-corporate-blue/6 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs tracking-widest uppercase mb-6">
                        {t.badge}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tight">{t.h1}</h1>
                    <p className="text-slate-500 text-base">{t.subtitle}</p>
                </div>
            </div>

            {/* Body */}
            <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-12 text-slate-300 leading-relaxed">

                {/* 1 */}
                <Section icon={User} title={t.s1Title}>
                    <p className="mb-4">{t.s1Intro}</p>
                    <div className="bg-white/3 border border-white/8 rounded-2xl p-6 space-y-2 text-[15px]">
                        <p className="font-bold text-white text-lg">{t.companyName}</p>
                        <p>{t.companyOwner}</p>
                        <p className="text-slate-400">{address}</p>
                        <p>E-Mail: <a href="mailto:osmankadirde@gmail.com" className="text-corporate-blue hover:underline">osmankadirde@gmail.com</a></p>
                        <p>Tel: <a href="tel:+491713474348" className="text-corporate-blue hover:underline">+49 171 347 4348</a></p>
                    </div>
                </Section>

                {/* 2 */}
                <Section icon={Database} title={t.s2Title}>
                    <p>{t.s2P1}</p>
                    <p className="mt-3">{t.s2P2}</p>
                </Section>

                {/* 3 */}
                <Section icon={Server} title={t.s3Title}>
                    <p>{t.s3P1}</p>
                    <ul className="mt-4 space-y-2">
                        {t.s3Bullets.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-corporate-blue mt-2 shrink-0" />
                                <span className="text-[15px]">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4">{t.s3P2}</p>
                </Section>

                {/* 4 */}
                <Section icon={Mail} title={t.s4Title}>
                    <p>{t.s4P1}</p>
                    <p className="mt-3">{t.s4P2}</p>
                </Section>

                {/* 5 */}
                <Section icon={MessageCircle} title={t.s5Title}>
                    <p>{t.s5P1}</p>
                    <p className="mt-3">
                        {t.s5P2}{' '}
                        <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="text-corporate-blue hover:underline break-all">
                            whatsapp.com/legal/privacy-policy-eea
                        </a>
                    </p>
                    <p className="mt-3">{t.s5P3}</p>
                </Section>

                {/* 6 */}
                <Section icon={Cookie} title={t.s6Title}>
                    <p>{t.s6P1}</p>
                    <div className="mt-4 p-4 bg-white/3 border border-white/8 rounded-xl text-[14px] text-slate-400">
                        {t.noTracking} — {t.s6Callout}
                    </div>
                </Section>

                {/* 7 */}
                <Section icon={ShieldCheck} title={t.s7Title}>
                    <p className="mb-4">{t.s7Intro}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {t.s7Rights.map(([right, article]) => (
                            <div key={right} className="flex items-center gap-3 p-4 bg-white/3 border border-white/8 rounded-xl">
                                <span className="w-2 h-2 rounded-full bg-corporate-blue shrink-0" />
                                <div>
                                    <p className="font-semibold text-white text-sm">{right}</p>
                                    <p className="text-xs text-slate-500">{article}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-5">{t.s7Contact}{' '}<a href="mailto:osmankadirde@gmail.com" className="text-corporate-blue hover:underline">osmankadirde@gmail.com</a></p>
                    <p className="mt-3">{t.s7Supervisory}</p>
                </Section>

                {/* 8 */}
                <Section icon={Lock} title={t.s8Title}>
                    <p>{t.s8P1}</p>
                </Section>

                {/* 9 */}
                <Section icon={RefreshCw} title={t.s9Title}>
                    <p>{t.s9P1}</p>
                </Section>

                <p className="text-slate-600 text-sm pt-6 border-t border-white/5">{t.footer}</p>
            </div>
        </div>
    );
}

// ── Helper ────────────────────────────────────────────────────────────────────
function Section({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>, title: string, children: React.ReactNode }) {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-white/8 pb-3">
                <div className="w-8 h-8 rounded-lg bg-corporate-blue/15 border border-corporate-blue/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-corporate-blue" />
                </div>
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            <div className="pl-11">{children}</div>
        </section>
    );
}
