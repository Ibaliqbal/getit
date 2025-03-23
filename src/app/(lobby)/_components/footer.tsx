import Link from "next/link";
import { ModeToggle } from "@/components/toggle-mode";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:h-16">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} GetIt. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <nav className="flex gap-4 md:gap-6">
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-xs text-muted-foreground hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
