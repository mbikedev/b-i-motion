export const metadata = {
  title: 'Privacybeleid - Blueprint In Motion',
  description: 'Privacybeleid van Blueprint In Motion',
};

export default function Privacy() {
  return (
    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#1a2332' }}>Privacybeleid</h1>

      <div style={{ lineHeight: '1.8', color: '#4a5568' }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          <strong>Laatst bijgewerkt:</strong> {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>1. Inleiding</h2>
          <p style={{ marginBottom: '1rem' }}>
            Blueprint In Motion (&quot;wij&quot;, &quot;ons&quot;, &quot;onze&quot;) respecteert uw privacy en zet zich in voor de bescherming van uw persoonlijke gegevens.
            Dit privacybeleid informeert u over hoe wij omgaan met uw persoonlijke gegevens wanneer u onze website bezoekt en vertelt u over uw privacyrechten.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>2. Welke gegevens verzamelen wij?</h2>
          <p style={{ marginBottom: '1rem' }}>Wij kunnen de volgende persoonlijke gegevens verzamelen:</p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Contactgegevens:</strong> naam, e-mailadres</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Technische gegevens:</strong> IP-adres, browsertype, tijdzone-instellingen</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Gebruiksgegevens:</strong> informatie over hoe u onze website gebruikt</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Communicatiegegevens:</strong> berichten die u via ons contactformulier verzendt</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>3. Hoe gebruiken wij uw gegevens?</h2>
          <p style={{ marginBottom: '1rem' }}>Wij gebruiken uw persoonlijke gegevens voor de volgende doeleinden:</p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Om te reageren op uw vragen en verzoeken</li>
            <li style={{ marginBottom: '0.5rem' }}>Om u informatie te verstrekken over onze producten en diensten</li>
            <li style={{ marginBottom: '0.5rem' }}>Om onze website te verbeteren en uw gebruikerservaring te optimaliseren</li>
            <li style={{ marginBottom: '0.5rem' }}>Om te voldoen aan wettelijke verplichtingen</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>4. Delen van gegevens</h2>
          <p style={{ marginBottom: '1rem' }}>
            Wij verkopen uw persoonlijke gegevens niet aan derden. Wij kunnen uw gegevens delen met:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Dienstverleners:</strong> die ons helpen bij het beheren van onze website en het leveren van diensten</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Wettelijke autoriteiten:</strong> wanneer wij daartoe wettelijk verplicht zijn</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>5. Beveiliging van gegevens</h2>
          <p style={{ marginBottom: '1rem' }}>
            Wij hebben passende technische en organisatorische maatregelen getroffen om uw persoonlijke gegevens te beschermen tegen
            ongeoorloofde toegang, wijziging, openbaarmaking of vernietiging.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>6. Bewaartermijn</h2>
          <p style={{ marginBottom: '1rem' }}>
            Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk is voor de doeleinden waarvoor wij ze verzamelen,
            tenzij een langere bewaartermijn wettelijk is vereist.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>7. Uw rechten</h2>
          <p style={{ marginBottom: '1rem' }}>Op grond van de AVG heeft u de volgende rechten:</p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Recht op inzage in uw persoonlijke gegevens</li>
            <li style={{ marginBottom: '0.5rem' }}>Recht op rectificatie van onjuiste gegevens</li>
            <li style={{ marginBottom: '0.5rem' }}>Recht op verwijdering van uw gegevens</li>
            <li style={{ marginBottom: '0.5rem' }}>Recht op beperking van de verwerking</li>
            <li style={{ marginBottom: '0.5rem' }}>Recht op gegevensoverdraagbaarheid</li>
            <li style={{ marginBottom: '0.5rem' }}>Recht van bezwaar tegen verwerking</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>8. Cookies</h2>
          <p style={{ marginBottom: '1rem' }}>
            Onze website gebruikt cookies om uw gebruikerservaring te verbeteren. U kunt cookies beheren via uw browserinstellingen.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>9. Wijzigingen in dit beleid</h2>
          <p style={{ marginBottom: '1rem' }}>
            Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. De datum van de laatste wijziging staat bovenaan deze pagina vermeld.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>10. Contact</h2>
          <p style={{ marginBottom: '1rem' }}>
            Als u vragen heeft over dit privacybeleid of uw rechten wilt uitoefenen, neem dan contact met ons op via het contactformulier op onze website.
          </p>
        </section>
      </div>
    </div>
  );
}
