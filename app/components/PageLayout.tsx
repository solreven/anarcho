import Link from "next/link";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { ThemeToggle } from "@/app/components/ThemeToggle";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="h-screen flex flex-col items-center gap-1">
      <nav className="flex w-full justify-evenly items-center bg-nav-bg text-nav-fg border-b border-nav-border transition-colors">
        <span className="font-bold">Brian Blitz</span>
        <Link href="/">Hjem</Link>
        <Link href="/products">Projekter</Link>
        <Link href="/about">Om meg</Link>
        <ThemeToggle />
        <div className="flex justify-end items-center p-4 gap-4 h-16">
          <Show when="signed-out">
            <SignInButton />
            <SignUpButton>
              <button className="bg-primary text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
