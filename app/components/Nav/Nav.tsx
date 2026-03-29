import { ThemeToggle } from "@/app/components/ThemeToggle";
import Link from "next/link";

// These toggle off when deploying for now.
// import Burger from "../Burger/Burger";
// import Clerk from "../Clerk/Clerk";

// import React from "react";

export default function Nav() {
  return (
    <nav className="flex w-full justify-evenly items-center bg-nav-bg text-nav-fg border-b border-nav-border transition-colors h-16 lg:py-2">
      <h4 className="font-bold">Brian Blitz</h4>
      <Link href="/">
        <h4>Hjem</h4>
      </Link>
      <h4>
        <Link href="/styleguide">Styleguide</Link>
      </h4>
      <h4>
        <Link href="/products">Projekter</Link>
      </h4>
      <h4>
        <Link href="/about">Om meg</Link>
      </h4>
      {/* <Burger /> */}
      <ThemeToggle />
      {/* <Clerk /> */}
    </nav>
  );
}
