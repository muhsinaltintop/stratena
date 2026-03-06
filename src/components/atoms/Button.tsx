import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "inverse";
  size?: "sm" | "md" | "lg";
};

export function Button({ variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  const baseStyle = "rounded-xl font-bold transition-all";
  const sizeStyle =
    size === "sm" ? "px-6 py-2.5 text-sm" : size === "lg" ? "px-10 py-5 text-lg" : "px-8 py-4 text-base";
  const variantStyle =
    variant === "primary"
      ? "bg-navy text-white hover:bg-primary shadow-lg"
      : variant === "secondary"
        ? "border-2 border-slate-200 bg-white text-charcoal hover:bg-slate-50"
        : "bg-white text-navy hover:bg-primary hover:text-white shadow-xl";

  return <button className={`${baseStyle} ${sizeStyle} ${variantStyle} ${className}`} {...props} />;
}
