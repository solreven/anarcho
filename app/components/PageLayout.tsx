import Link from "next/link";
interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main
      className={`h-screen flex flex-col items-center justify-around gap-1`}
    >
      <nav className={`flex w-screen justify-evenly`}>
        <h1>Brian Blitz</h1>
        <Link href="../">Hjem</Link>
        <Link href="../projects">Projekter</Link>
        <Link href="../about">Om meg</Link>
      </nav>
      {children}
    </main>
  );
}
