import type { ReactNode } from "react";

type StandardizedCardLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function StandardizedCardLayout({ children, className = "" }: StandardizedCardLayoutProps) {
  return <div className={`grid gap-6 md:grid-cols-2 lg:gap-8 ${className}`.trim()}>{children}</div>;
}
