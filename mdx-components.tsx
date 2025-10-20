import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  i: ({ children }) => <i className="text-neutral-300">{children}</i>,
  p: ({ children }) => <p className="min-h-[1lh] my-2 text-neutral-300">{children}</p>,
  a: ({ children, href }) => <a href={href} className="text-orange-400 underline">{children}</a>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
