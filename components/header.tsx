import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { Loader } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"

export const Header = () => (
  <header className="p-4 flex items-center border-b-2 border-stone-200">
    <Link href="/" className="p-2">
      <Image src="/logo.svg" alt="Logo" width={30} height={30} />
    </Link>
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
  </header>
)
