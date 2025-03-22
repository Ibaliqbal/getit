"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { LogoText } from "@/components/icon";
import { Github, AlertCircle, CheckCircle2 } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate registration delay
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, redirect to home page
      router.push("/");
    }, 1500);
  };

  const handleOAuthSignUp = (provider: string) => {
    setIsLoading(true);
    setError(null);

    // Simulate registration delay
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, redirect to home page
      router.push("/");
    }, 1500);
  };

  const checkPasswordStrength = (password: string) => {
    setPassword(password);
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    setPasswordStrength(strength);
  };

  return (
    <main className="min-h-screen flex items-center justify-center py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        {/* Animated dots */}
        <div className="absolute top-20 right-[20%] w-2 h-2 rounded-full bg-primary/40 animate-ping"></div>
        <div className="absolute bottom-20 left-[20%] w-2 h-2 rounded-full bg-primary/40 animate-ping delay-300"></div>
      </div>

      <div className="w-full max-w-md mx-auto p-6 relative z-10">
        <div className="flex flex-col items-center space-y-2 mb-8">
          <LogoText />
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-muted-foreground text-sm">
            Sign up to get started with GetIt
          </p>
        </div>

        <div className="bg-background border rounded-lg shadow-sm p-6">
          {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md flex items-center gap-2 mb-4">
              <AlertCircle className="h-4 w-4" />
              <p>{error}</p>
            </div>
          )}

          {/* Email form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                onChange={(e) => checkPasswordStrength(e.target.value)}
              />

              {/* Password strength indicator */}
              <div className="flex gap-1 mt-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      i < passwordStrength ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                <div
                  className={`flex items-center gap-1 ${
                    /[A-Z]/.test(password)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Uppercase letter</span>
                </div>
                <div
                  className={`flex items-center gap-1 ${
                    /[0-9]/.test(password)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Number</span>
                </div>
                <div
                  className={`flex items-center gap-1 ${
                    /[^A-Za-z0-9]/.test(password)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <CheckCircle2 className="h-3 w-3" />
                  <span>Special character</span>
                </div>
                <div
                  className={`flex items-center gap-1 ${
                    password.length >= 8
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <CheckCircle2 className="h-3 w-3" />
                  <span>8+ characters</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-primary font-medium hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
