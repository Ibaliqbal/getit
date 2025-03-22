import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle-mode";
import { LogoText } from "@/components/icon";

interface HeaderProps {
  showAuthButtons?: boolean;
}

export function Header({ showAuthButtons = false }: HeaderProps) {
  return (
    <header className="border-b sticky top-0 bg-background z-40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <LogoText />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/templates"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Templates
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {showAuthButtons ? (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          ) : (
            <Button variant="outline" size="sm" asChild>
              <Link href="/templates">Browse All</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
