# Overview

This project is a comprehensive job search web application called "วังสามหมอ Jobs" (Wang Sam Mo Jobs), designed specifically for local job seekers in the tourism and service industries. The application provides a modern, bilingual (Thai/English) platform for job discovery, application tracking, and company exploration with a focus on mobile-first design and user experience.

The application serves as a centralized hub for local employment opportunities, featuring job listings with detailed descriptions, company profiles, application management, and bookmark functionality. It's built with modern web technologies and follows a full-stack architecture pattern.

## Recent Changes (January 2025)
- **Migration Complete**: Successfully migrated from Lovable to Replit environment
- **Routing Updated**: Migrated from react-router-dom to wouter for Replit compatibility
- **Components Created**: Built all missing UI components (Header, Footer, SearchBar, JobCard, FilterPanel, etc.)
- **Data Structure**: Implemented comprehensive job data with Thai localization
- **Theme Integration**: Added Wang Sam Mo brand colors and Thai typography
- **Error Resolution**: Fixed all TypeScript errors and import issues
- **Documentation Complete**: Created comprehensive technical documentation suite following industry standards

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing with lazy-loaded page components
- **UI Framework**: Radix UI components with shadcn/ui for accessible, customizable interface elements
- **Styling**: Tailwind CSS with custom design tokens and responsive utilities
- **State Management**: React Query for server state management and caching, React Context for global UI state
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the stack for consistency and type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based session management using connect-pg-simple
- **Development**: Hot module replacement and middleware integration with Vite

## Data Storage Solutions
- **Primary Database**: PostgreSQL hosted on Neon with connection pooling
- **ORM**: Drizzle ORM with schema-first approach and automatic type generation
- **Session Storage**: Database-backed sessions for user authentication state
- **Local Storage**: Browser localStorage for user preferences and bookmark functionality
- **Schema Management**: Drizzle Kit for database migrations and schema evolution

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL storage backend
- **User Schema**: Drizzle-based user model with username/password authentication
- **Security**: Prepared for future implementation of role-based access control
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations

## External Dependencies
- **Database**: Neon PostgreSQL (serverless) via @neondatabase/serverless
- **UI Components**: Radix UI primitives for accessibility compliance
- **State Management**: TanStack React Query for efficient data fetching and caching
- **Form Handling**: React Hook Form with Zod validation schemas
- **Date Processing**: date-fns for locale-aware date formatting
- **Icons**: Lucide React for consistent iconography
- **Notifications**: Sonner for toast notifications and user feedback
- **Development**: Replit integration for cloud-based development environment