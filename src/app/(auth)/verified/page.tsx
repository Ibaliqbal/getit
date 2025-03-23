"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoText } from "@/components/icon";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function VerifiedPage() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsAnimated(true);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        {/* Animated elements */}
        <div className="absolute top-1/3 left-1/4 animate-float">
          <div className="text-[80px] font-bold text-primary/5">✓</div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float-delayed">
          <div className="text-[60px] font-bold text-primary/5">✓</div>
        </div>

        {/* Confetti-like dots */}
        {isAnimated && (
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.1,
                  animation: `float ${Math.random() * 3 + 2}s ease-in-out ${
                    Math.random() * 2
                  }s infinite`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="w-full max-w-md mx-auto p-6 relative z-10 text-center">
        <LogoText className="justify-center mb-8" />

        <div
          className={`transition-all duration-1000 ease-out transform ${
            isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-2xl font-bold mb-2">Email Verified!</h1>
          <p className="text-muted-foreground mb-8">
            Your email has been successfully verified. You can now access all
            features of your account.
          </p>

          <div className="flex flex-col gap-4">
            <Button asChild>
              <Link
                href="/signin"
                className="flex items-center justify-center gap-2"
              >
                Sign in to your account
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Go to homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
