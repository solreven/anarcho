import PageLayout from "./components/PageLayout";
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center align-center">
        <h1>Velkommen til min portefølje</h1>
        <p>
          Jeg heter Brian Blitz og her bygger jeg sakte men sikkert mitt lite
          hjørne av internett. Snart kommer prosjekter og styling ut på siden,
          men dette er min lille sandkasse, mitt lille tegnebord, så det er bare
          fint om det bærer preg av det. 😎
        </p>
      </div>
      {/* Next up is to make a function that populates this with cards drawing their contents from a database */}
      <div
        className="grid grid-cols-3 grid-rows-2 gap-4 w-full"
        style={{ height: "50vh", marginTop: "1rem" }}
      >
        <Card title="test" description="test" />
        <Card title="test" description="test" />
        <Card title="test" description="test" />
        <Card title="test" description="test" />
        <Card title="test" description="test" />
        <Card title="test" description="test" />
      </div>
    </PageLayout>
  );
}
