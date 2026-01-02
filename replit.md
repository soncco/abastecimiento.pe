# GRACE - SaaS Landing Page for Public Sector Logistics

## Overview

GRACE is a SaaS landing page website designed to market a public sector logistics and supply chain management system targeting Peruvian government entities (B2G). The application is a full-stack TypeScript project with a React frontend and Express backend, featuring a lead capture form for demo requests.

The primary purpose is to present GRACE as a trusted, compliant solution for municipal logistics, covering planning, procurement, services, warehouse management, and budget integration. The site emphasizes institutional credibility, regulatory compliance, and operational maturity rather than typical startup language.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll animations and entry effects
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Font**: Raleway (Google Fonts) for both body and headings

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Structure**: RESTful endpoints defined in `shared/routes.ts`
- **Build Tool**: esbuild for server bundling, Vite for client

### Data Layer
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (connection via `DATABASE_URL` environment variable)
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Drizzle Kit (`drizzle-kit push`)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod

### Project Structure
```
client/           # React frontend application
  src/
    components/   # UI components including Shadcn/ui
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
    pages/        # Page components
server/           # Express backend
  routes.ts       # API route handlers
  storage.ts      # Database operations
  db.ts           # Database connection
shared/           # Shared types and schemas
  schema.ts       # Drizzle database schema
  routes.ts       # API route definitions with Zod validation
```

### Development vs Production
- **Development**: Uses Vite dev server with HMR, proxied through Express
- **Production**: Client built to `dist/public`, served statically by Express

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `pg` driver
- **Connection**: Requires `DATABASE_URL` environment variable
- **Session Store**: connect-pg-simple for session management (available but not currently used)

### Key NPM Packages
- **UI Framework**: Full Shadcn/ui component suite (@radix-ui/*)
- **Data Fetching**: @tanstack/react-query
- **Form Validation**: zod, react-hook-form, @hookform/resolvers
- **Date Handling**: date-fns
- **Animations**: framer-motion, embla-carousel-react

### Replit-Specific Integrations
- @replit/vite-plugin-runtime-error-modal
- @replit/vite-plugin-cartographer (dev only)
- @replit/vite-plugin-dev-banner (dev only)