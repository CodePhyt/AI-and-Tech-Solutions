import React from 'react';

export default function Datenschutz() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 space-y-10 text-slate-300">
      <div>
        <h1 className="text-4xl font-black text-white mb-2">Datenschutzerklärung</h1>
        <p className="text-slate-500 text-sm">Gemäß DSGVO (EU) 2016/679 und BDSG</p>
      </div>

      {/* 1. Verantwortlicher */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">1. Verantwortlicher</h2>
        <p>Verantwortlicher im Sinne der Datenschutzgesetze ist:</p>
        <div className="bg-white/5 rounded-lg p-4 space-y-1 text-sm">
          <p className="font-semibold text-white">KI &amp; TECH Lösungen</p>
          <p>Inhaber: Osman Kadir</p>
          <p>[Musterstraße 1, 12345 Musterstadt, Deutschland]</p>
          <p>E-Mail: <a href="mailto:osmankadirde@gmail.com" className="text-blue-400 hover:underline">osmankadirde@gmail.com</a></p>
          <p>Telefon: <a href="tel:+491713474348" className="text-blue-400 hover:underline">+49 171 347 4348</a></p>
        </div>
      </section>

      {/* 2. Allgemeines */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">2. Allgemeines zur Datenverarbeitung</h2>
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich
          und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
          Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden,
          erfolgt dies stets auf freiwilliger Basis und nur soweit dies für die Erfüllung eines Vertrags oder einer vorvertraglichen
          Maßnahme erforderlich ist.
        </p>
      </section>

      {/* 3. Hosting */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">3. Hosting &amp; Technischer Betrieb</h2>
        <p>
          Diese Website wird bei einem professionellen Hosting-Anbieter (z. B. Vercel Inc., 340 Pine Street, Suite 701, San Francisco,
          CA 94104, USA) gehostet. Beim Besuch unserer Website werden automatisch folgende Daten in Server-Logfiles gespeichert:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
          <li>IP-Adresse des anfragenden Systems (anonymisiert)</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>Verwendeter Browser und ggf. das Betriebssystem</li>
        </ul>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb der Website).
          Die Daten werden nach spätestens 7 Tagen gelöscht.
        </p>
      </section>

      {/* 4. Kontaktaufnahme */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">4. Kontaktaufnahme per E-Mail oder Telefon</h2>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre übermittelten Daten (z. B. Name, E-Mail-Adresse,
          Telefonnummer, Ihre Anfrage) bei uns gespeichert. Diese Daten werden ausschließlich für die Bearbeitung Ihrer Anfrage
          und für mögliche Anschlussfragen genutzt.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Beantwortung von Geschäftsanfragen). Die Daten werden gelöscht, sobald Ihre Anfrage
          abschließend bearbeitet ist und kein Vertragsverhältnis entstanden ist.
        </p>
      </section>

      {/* 5. WhatsApp Business */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">5. WhatsApp Business Kommunikation</h2>
        <p>
          Für die direkte Kommunikation verwenden wir WhatsApp Business, ein Dienst der Meta Platforms Ireland Limited,
          4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
        </p>
        <p>
          Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Nachrichten und Ihre Telefonnummer von WhatsApp verarbeitet
          und auf Servern von Meta (u.a. in den USA) gespeichert. Auf diese Verarbeitung haben wir keinen Einfluss.
          Weitere Informationen finden Sie in der Datenschutzerklärung von WhatsApp:{' '}
          <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            https://www.whatsapp.com/legal/privacy-policy-eea
          </a>
        </p>
        <p>
          Die Kontaktaufnahme per WhatsApp ist freiwillig und erfolgt auf Ihre Initiative hin.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
        </p>
      </section>

      {/* 6. Cookies */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">6. Cookies</h2>
        <p>
          Unsere Website verwendet ausschließlich technisch notwendige Cookies (z. B. für die Verwaltung der Sprachauswahl).
          Diese Cookies sind für den Betrieb der Website erforderlich und können in Ihrem Browser nicht deaktiviert werden,
          ohne die Funktionalität der Website einzuschränken.
        </p>
        <p>
          Wir verwenden keine Tracking-Cookies, Analyse-Dienste (wie Google Analytics) oder Werbecookies.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </section>

      {/* 7. Ihre Rechte */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">7. Ihre Rechte als betroffene Person</h2>
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
        <ul className="list-disc list-inside space-y-1 text-sm ml-4">
          <li><span className="text-white font-medium">Auskunft</span> (Art. 15 DSGVO)</li>
          <li><span className="text-white font-medium">Berichtigung</span> (Art. 16 DSGVO)</li>
          <li><span className="text-white font-medium">Löschung</span> (Art. 17 DSGVO)</li>
          <li><span className="text-white font-medium">Einschränkung der Verarbeitung</span> (Art. 18 DSGVO)</li>
          <li><span className="text-white font-medium">Datenübertragbarkeit</span> (Art. 20 DSGVO)</li>
          <li><span className="text-white font-medium">Widerspruch gegen Verarbeitung</span> (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:{' '}
          <a href="mailto:osmankadirde@gmail.com" className="text-blue-400 hover:underline">osmankadirde@gmail.com</a>
        </p>
        <p>
          Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen
          Daten durch uns zu beschweren.
        </p>
      </section>

      {/* 8. Datensicherheit */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">8. Datensicherheit</h2>
        <p>
          Wir sichern unsere Website und andere Systeme durch technische und organisatorische Maßnahmen gegen Verlust,
          Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten durch unbefugte Personen. Der Datentransfer
          erfolgt verschlüsselt über HTTPS (TLS).
        </p>
      </section>

      {/* 9. Aktualität */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer
          Website oder aufgrund geänderter gesetzlicher oder behördlicher Vorgaben kann es notwendig werden, diese
          Datenschutzerklärung zu ändern.
        </p>
      </section>

      <p className="text-slate-500 text-sm pt-4 border-t border-white/10">Stand: März 2026 · KI &amp; TECH Lösungen</p>
    </div>
  );
}
