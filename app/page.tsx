import PageLayout from "./components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <div>
        <h1 className="text-2xl font-semibold">
          Velkommen til porteføljen min
        </h1>
        <p>
          Jeg heter Brian Blitz og her bygger jeg sakte men sikkert mitt lite
          hjørne av internett. Snart kommer prosjekter og styling ut på siden,
          men dette er min lille sandkasse, mitt lille tegnebord, så det er bare
          fint om det bærer preg av det. 😎
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Velkommen</h2>
        <p>Dette er forsiden med Tailwind-stylet layout.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Velkommen</h2>
        <p>Dette er forsiden med Tailwind-stylet layout.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Velkommen</h2>
        <p>Dette er forsiden med Tailwind-stylet layout.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Velkommen</h2>
        <p>Dette er forsiden med Tailwind-stylet layout.</p>
      </div>
    </PageLayout>
  );
}
