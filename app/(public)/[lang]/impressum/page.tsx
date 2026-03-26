import React from 'react';

export default function Impressum() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 space-y-10 text-slate-300">
      <div>
        <h1 className="text-4xl font-black text-white mb-2">Impressum</h1>
        <p className="text-slate-500 text-sm">Angaben gemäß § 5 TMG</p>
      </div>

      {/* Unternehmensangaben */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Unternehmensangaben</h2>
        <p className="font-semibold text-white">KI &amp; TECH Lösungen</p>
        <p>Inhaber: Osman Kadir</p>
        <p>[Musterstraße 1, 12345 Musterstadt, Deutschland]</p>
      </section>

      {/* Kontakt */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Kontakt</h2>
        <p>Telefon: <a href="tel:+491713474348" className="text-blue-400 hover:underline">+49 171 347 4348</a></p>
        <p>E-Mail: <a href="mailto:osmankadirde@gmail.com" className="text-blue-400 hover:underline">osmankadirde@gmail.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/491713474348" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://wa.me/491713474348</a></p>
      </section>

      {/* Umsatzsteuer */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
        <p className="font-mono text-slate-400">[USt-IdNr. – bitte eintragen]</p>
      </section>

      {/* Streitschlichtung */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
      </section>

      {/* Verbraucherstreitbeilegung */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      {/* Haftung für Inhalte */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
          zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
          Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
      </section>

      {/* Haftung für Links */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </section>

      {/* Urheberrecht */}
      <section className="space-y-2">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <p className="text-slate-500 text-sm pt-4">Stand: März 2026</p>
    </div>
  );
}
