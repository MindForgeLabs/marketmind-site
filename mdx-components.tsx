// app/mdx-components.tsx
// server-safe: NO "use client" here
import type * as React from "react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

function isExternal(href?: string) {
  if (!href) return false;
  return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

function mergeClass(defaultClass: string | undefined, incoming?: string) {
  return [defaultClass, incoming].filter(Boolean).join(" ");
}

type AnchorProps = React.ComponentPropsWithoutRef<"a"> & { href?: string };
type PreProps = React.ComponentPropsWithoutRef<"pre">;
type CodeProps = React.ComponentPropsWithoutRef<"code">;

// Module-level defaults (stable, no hooks)
const DEFAULTS: MDXComponents = {
  a: (props: AnchorProps) => {
    const { href, className, target, rel, children, ...rest } = props;
    const cls = mergeClass(
      "text-cyan-300 underline underline-offset-4 hover:text-cyan-200",
      className
    );

    if (isExternal(href) || target === "_blank") {
      const relFinal = rel ?? "noopener noreferrer";
      const targetFinal = target ?? "_blank";
      return (
        <a href={href} className={cls} target={targetFinal} rel={relFinal} {...rest}>
          {children}
        </a>
      );
    }

    // Internal link — Next.js Link is safe on server
    return (
      <Link href={href ?? ""} className={cls} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  },

  pre: (props: PreProps) => {
    const { className, children, ...rest } = props;
    return (
      <pre
        {...rest}
        className={mergeClass(
          "rounded-xl border border-white/10 bg-black/50 p-4 overflow-x-auto",
          className
        )}
      >
        {children}
      </pre>
    );
  },

  code: (props: CodeProps) => {
    const { className, children, ...rest } = props;
    return (
      <code {...rest} className={mergeClass("font-mono text-sm", className)}>
        {children}
      </code>
    );
  },
};

// Keep the same exported name so other code keeps working.
export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return { ...DEFAULTS, ...components };
}