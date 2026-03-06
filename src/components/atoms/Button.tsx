import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyle = "rounded-lg px-4 py-2 text-sm font-semibold transition";
  const variantStyle =
    variant === "primary"
      ? "bg-brand-500 text-white hover:bg-brand-700"
      : "bg-slate-200 text-slate-800 hover:bg-slate-300";

  return <button className={`${baseStyle} ${variantStyle} ${className}`} {...props} />;
}
