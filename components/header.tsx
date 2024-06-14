"use client";

import { cn } from "@/lib/utils";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const navLinks = [
  {
    href: "/",
    label: "Главная",
  },
  {
    href: "/trainers",
    label: "Тренеры",
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b-2">
      <div className="h-[80px] container flex items-center">
        <Link href="/" className="pr-4 py-4">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        </Link>
        <nav className="ml-10 hidden md:block">
          <ul className="flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className={cn(
                    "py-4 px-3 text-neutral-900 hover:text-neutral-500 transition",
                    pathname === link.href &&
                      "font-medium underline decoration-amber-800/70 decoration-wavy"
                  )}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex gap-6">
          <ModeToggle />
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <div className="space-x-3">
                <Button asChild>
                  <SignUpButton />
                </Button>
                <Button asChild variant="secondary">
                  <SignInButton />
                </Button>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};
