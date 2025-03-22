import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeClasses[size], className)}
    >
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="12"
        className="fill-primary/10 stroke-primary"
        strokeWidth="3"
      />
      <path
        d="M16 32H48"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M32 16L32 48"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20 20L44 44"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M44 20L20 44"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LogoText({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Logo size="sm" />
      <span className="font-bold text-xl">GetIt</span>
    </div>
  );
}
