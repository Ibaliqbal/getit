"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogoText } from "@/components/icon";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Simulate logout process
    const timer = setTimeout(() => {
      // Redirect to home page after "logout"
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full max-w-md text-center space-y-6">
        <LogoText className="justify-center" />

        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Logging you out</h1>
          <p className="text-muted-foreground">
            Please wait while we securely log you out...
          </p>
        </div>

        <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-primary animate-[progress_2s_ease-in-out]"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
