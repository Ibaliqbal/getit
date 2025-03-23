"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogoText } from "@/components/icon";
import { AlertCircle, Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate API request delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // In a real app, you would send a request to your API to send a password reset email
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
          <h1 className="text-2xl font-bold">Forgot your password?</h1>
          <p className="text-muted-foreground text-sm text-center">
            {!isSubmitted
              ? "Enter your email address and we'll send you a link to reset your password."
              : "Check your email for a link to reset your password."}
          </p>
        </div>

        <div className="bg-background border rounded-lg shadow-sm p-6">
          {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md flex items-center gap-2 mb-4">
              <AlertCircle className="h-4 w-4" />
              <p>{error}</p>
            </div>
          )}

          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Check your email</h2>
              <p className="text-muted-foreground mb-6">
                We've sent a password reset link to{" "}
                <span className="font-medium text-foreground">{email}</span>
              </p>
              <div className="text-sm text-muted-foreground mb-4">
                Didn't receive the email? Check your spam folder or try again.
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsSubmitted(false)}
              >
                Try again
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Send reset link
                  </span>
                )}
              </Button>
            </form>
          )}

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
