# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start development server
bun build        # Production build
bun preview      # Build and start production server
bun lint         # Run Biome linter
bun format       # Format code with Biome
bun typecheck    # TypeScript type checking
```

## Architecture

This is a personal website/blog built with Next.js 16, using the App Router with MDX support for blog posts.

### Key Patterns

- **Path alias**: `~/` maps to `./src/` (configured in tsconfig.json)
- **Styling**: Tailwind CSS v4 with `cn()` utility from `~/lib/utils` for class merging
- **Database**: Drizzle ORM with Neon serverless PostgreSQL (schema in `src/db/schema.ts`)
- **Blog posts**: MDX files in `src/app/blog/_posts/` with frontmatter metadata exported as `metadata` object
- **Effect-TS**: The `PostService` uses Effect for functional error handling

### Blog Post Structure

Blog posts are MDX files in `src/app/blog/_posts/`. Each post exports a `metadata` object:

```typescript
export const metadata = {
  title: string,
  slug: string,
  date: Date,
  description: string
};
```

The post schema is validated with Zod in `src/types/post.type.ts`.

### Database Schema

Single `posts` table tracking view counts by slug. Connection uses `STORAGE_DATABASE_URL` env var.

### Source Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components (ui/, blog/, footer/)
- `src/lib/` - Utility functions and data fetching
- `src/services/` - Business logic services (PostService with Effect)
- `src/db/` - Drizzle schema and database client
- `src/types/` - TypeScript types and Zod schemas

## Design Guidelines

**IMPORTANT**: When creating or modifying ANY UI elements, you MUST consult the design guidelines skill at `.claude/skills/design-guidelines.skill.md`.

This website follows a **minimalist, typography-first design**. Key rules:

- Use existing components from `~/components/` before creating new ones
- Always use Tailwind CSS (never inline styles)
- Use `cn()` from `~/lib/utils` for class merging
- Stick to the neutral/stone color palette
- Keep interactions subtle (color transitions only)
- Follow the established spacing patterns (mt-12 for sections, mt-4 for content)
