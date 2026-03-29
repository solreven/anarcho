import Nav from "./Nav/Nav";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="h-screen flex flex-col items-center gap-1">
      <div className="w-full" style={{ height: "10vh" }}>
        <Nav />
      </div>
      <main style={{ height: "90vh", width: "80vh" }}>{children}</main>
    </div>
  );
}
