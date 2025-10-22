import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  i: ({ children }) => <i className="text-neutral-300">{children}</i>,
  p: ({ children }) => <p className="min-h-[1lh]">{children}</p>,
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-orange-400 underline underline-offset-4 decoration-[0.5px] hover:text-orange-300 hover:decoration-orange-200/70 decoration-orange-300/80"
    >
      {children}
    </a>
  ),

  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-neutral-500 pl-3">
      {children}
    </blockquote>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
