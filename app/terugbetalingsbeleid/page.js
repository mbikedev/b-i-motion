export const metadata = {
  title: 'Terugbetalingsbeleid - Blueprint In Motion',
  description: 'Terugbetalingsbeleid van Blueprint In Motion',
};

export default function RefundPolicy() {
  return (
    <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#1a2332' }}>Terugbetalingsbeleid</h1>

      <div style={{ lineHeight: '1.8', color: '#4a5568' }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          <strong>Laatst bijgewerkt:</strong> {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>1. Overzicht</h2>
          <p style={{ marginBottom: '1rem' }}>
            Bij Blueprint In Motion streven wij ernaar om u de beste producten en diensten te bieden. Als u om welke reden dan ook
            niet tevreden bent met uw aankoop, hebben wij een eerlijk en transparant terugbetalingsbeleid.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>2. Retourperiode</h2>
          <p style={{ marginBottom: '1rem' }}>
            U heeft het recht om binnen <strong>14 dagen</strong> na ontvangst van uw product zonder opgave van redenen uw aankoop
            te retourneren. Dit is in overeenstemming met het Nederlandse herroepingsrecht.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Voor digitale producten geldt dat het herroepingsrecht vervalt zodra u bent begonnen met het downloaden of gebruiken
            van het product, mits u hiervoor uitdrukkelijk toestemming heeft gegeven.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>3. Voorwaarden voor retournering</h2>
          <p style={{ marginBottom: '1rem' }}>Om in aanmerking te komen voor een terugbetaling, moet aan de volgende voorwaarden worden voldaan:</p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Het product moet in originele staat verkeren</li>
            <li style={{ marginBottom: '0.5rem' }}>Fysieke producten moeten ongebruikt en in de originele verpakking zitten</li>
            <li style={{ marginBottom: '0.5rem' }}>U moet een geldig aankoopbewijs (factuur of orderbevestiging) kunnen tonen</li>
            <li style={{ marginBottom: '0.5rem' }}>De retourperiode van 14 dagen mag niet zijn verstreken</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>4. Hoe een retour aanvragen</h2>
          <p style={{ marginBottom: '1rem' }}>Om een product te retourneren, neemt u contact met ons op via:</p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Het contactformulier op onze website</li>
            <li style={{ marginBottom: '0.5rem' }}>E-mail naar ons klantenservice adres</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            Vermeld in uw bericht:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Uw ordernummer</li>
            <li style={{ marginBottom: '0.5rem' }}>Het product dat u wilt retourneren</li>
            <li style={{ marginBottom: '0.5rem' }}>Eventuele reden voor retournering (optioneel maar gewaardeerd)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>5. Terugbetaling</h2>
          <p style={{ marginBottom: '1rem' }}>
            Na ontvangst en goedkeuring van uw retour zullen wij de terugbetaling binnen <strong>14 dagen</strong> verwerken.
            Het bedrag wordt teruggestort op dezelfde betaalmethode als waarmee u de aankoop heeft gedaan.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            De terugbetaling omvat:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>De volledige productprijs</li>
            <li style={{ marginBottom: '0.5rem' }}>Eventuele verzendkosten (indien van toepassing)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>6. Verzendkosten</h2>
          <p style={{ marginBottom: '1rem' }}>
            De kosten voor het retourneren van fysieke producten zijn voor uw eigen rekening, tenzij:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Het product defect is of beschadigd is aangekomen</li>
            <li style={{ marginBottom: '0.5rem' }}>U het verkeerde product heeft ontvangen</li>
            <li style={{ marginBottom: '0.5rem' }}>Er een fout in de bestelling is gemaakt door Blueprint In Motion</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>7. Uitzonderingen</h2>
          <p style={{ marginBottom: '1rem' }}>De volgende producten kunnen niet worden geretourneerd:</p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Digitale producten die al zijn gedownload of gebruikt</li>
            <li style={{ marginBottom: '0.5rem' }}>Gepersonaliseerde of op maat gemaakte producten</li>
            <li style={{ marginBottom: '0.5rem' }}>Producten die om hygiënische redenen zijn verzegeld en waarvan de verzegeling is verbroken</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>8. Beschadigde of defecte producten</h2>
          <p style={{ marginBottom: '1rem' }}>
            Als u een beschadigd of defect product ontvangt, neem dan onmiddellijk contact met ons op. Wij zullen:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Een vervangend product sturen, of</li>
            <li style={{ marginBottom: '0.5rem' }}>Een volledige terugbetaling aanbieden</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            In dit geval zijn alle verzendkosten voor onze rekening.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>9. Annulering van bestellingen</h2>
          <p style={{ marginBottom: '1rem' }}>
            U kunt een bestelling kosteloos annuleren voordat deze is verzonden. Neem zo snel mogelijk contact met ons op
            als u uw bestelling wilt annuleren.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1a2332' }}>10. Vragen en contact</h2>
          <p style={{ marginBottom: '1rem' }}>
            Heeft u vragen over ons terugbetalingsbeleid? Neem gerust contact met ons op via het contactformulier op onze website.
            Wij helpen u graag verder.
          </p>
        </section>

        <section style={{ marginBottom: '3rem', padding: '1.5rem', backgroundColor: '#f7fafc', borderLeft: '4px solid #d4a745', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            <strong>Let op:</strong> Dit terugbetalingsbeleid is van toepassing naast uw wettelijke rechten als consument
            onder Nederlands recht. Niets in dit beleid beperkt deze rechten.
          </p>
        </section>
      </div>
    </div>
  );
}
