import Link from "next/link";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
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
      <ClerkProvider>
        <header className="flex justify-end items-center p-4 gap-4 h-16">
          <Show when="signed-out">
            <SignInButton />
            <SignUpButton>
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </header>
        {children}
      </ClerkProvider>
    </main>
  );
}
