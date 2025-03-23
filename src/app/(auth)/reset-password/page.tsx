"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogoText } from "@/components/icon";
import { AlertCircle, CheckCircle2, ArrowLeft, Lock } from "lucide-react";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const checkPasswordStrength = (password: string) => {
    setPassword(password);
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    setPasswordStrength(strength);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setIsLoading(true);
    setError(null);

    // Simulate API request delay
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would send a request to your API to reset the password
      router.push("/signin?reset=success");
    }, 1500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        {/* Animated dots */}
        <div className="absolute top-20 left-[20%] w-2 h-2 rounded-full bg-primary/40 animate-ping"></div>
        <div className="absolute bottom-20 right-[20%] w-2 h-2 rounded-full bg-primary/40 animate-ping delay-300"></div>
      </div>

      <div className="w-full max-w-md mx-auto p-6 relative z-10">
        <div className="flex flex-col items-center space-y-2 mb-8">
          <LogoText />
          <h1 className="text-2xl font-bold">Reset your password</h1>
          <p className="text-muted-foreground text-sm text-center">
            Create a new password for your account
          </p>
        </div>

        <div className="bg-background border rounded-lg shadow-sm p-6">
          {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md flex items-center gap-2 mb-4">
              <AlertCircle className="h-4 w-4" />
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
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

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                  Resetting...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Reset password
                </span>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/signin"
              className="text-sm text-muted-foreground hover:text-primary inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-3 w-3" />
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
