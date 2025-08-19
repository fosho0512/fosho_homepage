# Overview

This is a Korean hospital marketing agency website called "포쇼마케팅" (FOSHO Marketing) that provides specialized marketing services for hospitals and medical practices. The application has been restructured for Vercel deployment, featuring a modern React frontend with a comprehensive landing page showcasing services, success stories, and a contact form system. The backend uses Vercel serverless functions to handle contact form submissions and API requests.

**Recent Changes (2025-08-19)**: 
- Restructured entire project for Vercel deployment by moving all necessary files into the client folder, converting Express.js APIs to Vercel serverless functions, and setting up proper build configuration for static site deployment.
- **UI Design Enhancement**: Restored vibrant colors, 3D effects, and animations for both Replit preview and Vercel deployment consistency. Updated gradient backgrounds, card hover effects, button styles, and color schemes to ensure professional medical marketing appearance across all platforms.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for robust form management
- **Styling**: Tailwind CSS with custom Korean typography (Noto Sans KR) and English fonts (Poppins)
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture (Vercel Serverless)
- **Runtime**: Vercel Node.js serverless functions
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: Vercel API Routes for contact form submission and EmailJS key retrieval
- **Data Storage**: In-memory storage implementation (suitable for serverless environment)
- **Error Handling**: Function-level error handling with proper HTTP status codes and CORS support
- **Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Deployment**: Optimized for Vercel with proper routing and static asset handling

## Data Storage Solutions
- **Current**: In-memory storage using Map data structures for development and testing
- **Database Ready**: Drizzle ORM configured for PostgreSQL with Neon serverless database
- **Schema Management**: Shared TypeScript schemas between client and server using Drizzle and Zod
- **Migration Support**: Drizzle Kit for database schema migrations and management

## Design System
- **Component Library**: Custom implementation using shadcn/ui with comprehensive component coverage
- **Theme System**: CSS custom properties for consistent theming with medical industry appropriate colors
- **Typography**: Multi-language font support with Korean and English typefaces
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Radix UI primitives provide ARIA compliance and keyboard navigation

## Development Features
- **Hot Reload**: Vite HMR for instant development feedback
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared modules
- **Code Quality**: ESLint and TypeScript compiler for code validation
- **Build Optimization**: Separate client and server build processes with proper asset handling

# External Dependencies

## UI and Styling
- **Radix UI**: Comprehensive primitive components for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe component variants
- **clsx & tailwind-merge**: Conditional class name utilities

## Forms and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Zod integration for React Hook Form

## Data Fetching
- **TanStack Query**: Server state management and caching
- **date-fns**: Date manipulation and formatting utilities

## Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon database
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type system for JavaScript
- **PostCSS & Autoprefixer**: CSS processing and browser compatibility
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Fonts and Assets
- **Google Fonts**: Noto Sans KR for Korean text and Poppins for English text
- **Unsplash Images**: Professional healthcare and medical imagery

## Vercel Deployment Configuration
- **Root Directory**: Client folder is configured as the root directory for Vercel deployment
- **API Routes**: Located in `client/api/` for serverless function handling
- **Build Output**: Static files generated in `client/dist/` for CDN delivery
- **Environment Variables**: EmailJS configuration managed through Vercel environment settings
- **Asset Handling**: Optimized image processing and proper TypeScript asset declarations