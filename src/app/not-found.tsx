import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoText } from "@/components/icon";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        {/* Animated elements */}
        <div className="absolute top-1/3 left-1/4 animate-float">
          <div className="text-[120px] font-bold text-primary/5">4</div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <div className="text-[120px] font-bold text-primary/5">4</div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-primary/10"
              style={{
                position: "absolute",
                top: `${Math.floor(i / 10) * 10 + Math.random() * 5}%`,
                left: `${(i % 10) * 10 + Math.random() * 5}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-md mx-auto p-6 relative z-10 text-center">
        <LogoText className="justify-center mb-8" />

        <div className="relative mb-8">
          <div className="text-[120px] font-bold leading-none tracking-tighter text-primary/10 absolute top-0 left-1/2 -translate-x-1/2 blur-sm">
            404
          </div>
          <div className="text-[120px] font-bold leading-none tracking-tighter">
            404
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/templates" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Browse Templates
            </Link>
          </Button>
        </div>

        <div className="mt-12 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <Link href="javascript:history.back()">Go back to previous page</Link>
        </div>
      </div>
    </main>
  );
}
