import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export const Badge = ({
  className,
  variant = "default",
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border text-xs font-medium px-2 py-0.5",
        variant === "default" &&
          "border-transparent bg-brand-500/10 text-brand-300",
        variant === "outline" &&
          "border-white/20 text-slate-200",
        className
      )}
      {...props}
    />
  );
};
