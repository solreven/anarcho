import Nav from "./Nav/Nav";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="h-screen flex flex-col items-center gap-1">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
