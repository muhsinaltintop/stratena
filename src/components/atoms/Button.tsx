import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "inverse";
  size?: "sm" | "md" | "lg";
};

export function Button({ variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const baseStyle = "rounded-xl font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";
  const sizeStyle =
    size === "sm"
      ? "px-5 py-2.5 text-sm sm:px-6"
      : size === "lg"
        ? "px-7 py-4 text-base sm:px-10 sm:py-5 sm:text-lg"
        : "px-6 py-3.5 text-sm sm:px-8 sm:py-4 sm:text-base";
  const variantStyle =
    variant === "primary"
      ? "bg-navy text-white hover:bg-primary shadow-lg"
      : variant === "secondary"
        ? "border-2 border-slate-200 bg-white text-charcoal hover:bg-slate-50"
        : "bg-white text-navy hover:bg-primary hover:text-white shadow-xl";

  return <button className={`${baseStyle} ${sizeStyle} ${variantStyle} ${className}`} {...props} />;
}
