import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoText } from "@/components/icon";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

interface HeaderProps {
  showAuthButtons?: boolean;
}

export function Header({ showAuthButtons = false }: HeaderProps) {
  return (
    <header className="border-b sticky top-0 bg-background z-40">
      <div className="container flex h-16 items-center justify-between">
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">
            <LogoText />
          </Link>
          <div className="hidden md:block">
            <MainNav />
          </div>
        </div>
        <MobileNav />
        <div className="flex items-center gap-4">
          {showAuthButtons && (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
