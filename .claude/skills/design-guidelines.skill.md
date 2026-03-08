# Design Guidelines

**MINIMALISM IS NON-NEGOTIABLE.** Every element must earn its place. When in doubt, remove.

## Stack

- **Styling**: Tailwind CSS v4 only (never inline styles)
- **Class merging**: Always use `cn()` from `~/lib/utils`
- **Font**: GeistMono (monospace) — already configured
- **Icons**: `lucide-react` only

## Colors

| Purpose | Class |
|---------|-------|
| Background | `bg-neutral-950` |
| Headings | `text-neutral-100` or `text-stone-100` |
| Body text | `text-neutral-400` |
| Muted text | `text-neutral-500` |
| Links | `text-stone-300` → `hover:text-stone-200` |
| Borders | `border-neutral-700` or `border-neutral-800` |

## Typography

```tsx
// Page title
<h1 className="text-lg font-medium text-neutral-100">

// Section title
<h2 className="text-neutral-100 mb-4">

// Subsection (uppercase)
<h3 className="text-neutral-300 text-[13px] uppercase tracking-wide">
```

## Spacing

- Between sections: `mt-12`
- Between paragraphs: `mt-4`
- Container max-width: `768px` (already configured)

## Existing Components — USE FIRST

| Component | Import | Use for |
|-----------|--------|---------|
| `Anchor` | `~/components/ui/anchor` | All styled links |
| `BackNavigation` | `~/components/ui/back-navigation` | Return navigation |
| `BlogItem` | `~/components/blog/blog-item` | Blog list items |
| `BlogList` | `~/components/blog/blog-list` | Blog listings |

## Common Patterns

```tsx
// Card with hover
<div className={cn(
  "py-3 px-4 -mx-4 border border-transparent",
  "hover:border-neutral-800 transition-colors",
)}>

// Callout box
<div className="border-l border-neutral-700 pl-4">

// List item hover
<Link className={cn(
  "group flex items-center justify-between",
  "hover:outline-[0.5px] outline-offset-[6px] hover:outline-neutral-600/50",
)}>
```

## Animations

Only allowed:
- `transition-colors duration-150`
- `motion-safe:fade-in`

## DO NOT

1. Use bright colors (no blue, green, red, purple)
2. Add shadows (`shadow-*`)
3. Use gradients
4. Add rounded corners larger than `rounded-md`
5. Use bold fonts (prefer `font-medium`)
6. Create new components when existing ones work
7. Add inline styles
8. Use animations longer than 200ms
9. Add scale/rotate transforms on hover

## Quick Reference

```tsx
import { cn } from "~/lib/utils";
import Anchor from "~/components/ui/anchor";
import Link from "next/link";
```

**When in doubt, keep it simple.**
