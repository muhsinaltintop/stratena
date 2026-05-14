import type { ReactNode } from "react";

type BalancedSplitSectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function BalancedSplitSection({ children, className = "", contentClassName = "" }: BalancedSplitSectionProps) {
  return (
    <section className={`section-shell ${className}`.trim()}>
      <div className={`section-content section-grid-balanced ${contentClassName}`.trim()}>{children}</div>
    </section>
  );
}
