# AI Rules for Wang Sam Mo Jobs Development

This document outlines the core technologies and specific libraries to be used when developing the Wang Sam Mo Jobs application. Adhering to these guidelines ensures consistency, maintainability, and leverages the strengths of our chosen tech stack.

## 🚀 Tech Stack Overview

*   **Frontend Framework**: React 18 with TypeScript for building dynamic and type-safe user interfaces.
*   **UI & Styling**: shadcn/ui (built on Radix UI) for accessible and customizable components, exclusively using Tailwind CSS for all styling.
*   **Routing**: Wouter for lightweight and efficient client-side navigation.
*   **State Management**: TanStack React Query for server state management and caching, complemented by React Context for global UI state (e.g., language).
*   **Backend**: Node.js with Express.js, written entirely in TypeScript for a consistent and type-safe full-stack experience.
*   **Database & ORM**: PostgreSQL (via Neon Database) as the relational database, with Drizzle ORM for type-safe and efficient database interactions.
*   **Utility Libraries**: `lucide-react` for vector icons, `sonner` for elegant toast notifications, `zod` for robust schema validation, and `date-fns` for date manipulation.
*   **Build Tool**: Vite for a fast development server and optimized production builds.

## 🛠️ Library Usage Guidelines

To maintain a cohesive and efficient codebase, please adhere to the following rules for library usage:

*   **UI Components**:
    *   **Always** use components from `shadcn/ui` (e.g., `Button`, `Card`, `Input`, `Dialog`, `Tabs`, `Badge`, `Checkbox`, `Collapsible`, `Separator`, `Skeleton`, `Toaster`, `Sonner`, `TooltipProvider`).
    *   If a required UI component is not available in `shadcn/ui`, create a new component in `client/src/components/` (or within a feature directory if applicable) following `shadcn/ui`'s styling and accessibility patterns. **Do not** introduce other UI libraries.
*   **Styling**:
    *   **Exclusively** use Tailwind CSS utility classes for all styling. Avoid custom CSS files or inline styles unless absolutely necessary for dynamic properties not covered by Tailwind.
*   **Routing**:
    *   Use `wouter` for all client-side routing. All main routes should be defined in `client/src/App.tsx`.
*   **State Management**:
    *   For server-side data fetching, caching, and synchronization, use **TanStack React Query**.
    *   For global UI state (e.g., language preferences, theme), use **React Context**.
*   **Icons**:
    *   All icons should be imported from the `lucide-react` library.
*   **Notifications**:
    *   Use `sonner` for all toast notifications to provide user feedback.
*   **Form Handling & Validation**:
    *   For form management, use `react-hook-form`.
    *   For schema definition and validation, use `zod` in conjunction with `@hookform/resolvers/zod`.
*   **Date & Time**:
    *   Use `date-fns` for any date and time formatting or manipulation.
*   **Database Interactions (Backend)**:
    *   All database operations must be performed using **Drizzle ORM** with the defined schemas in `shared/schema.ts`.
*   **Local Storage**:
    *   For client-side persistent storage, use the `useLocalStorage` hook found in `client/src/hooks/useLocalStorage.ts`.
*   **Bookmarks**:
    *   For managing job bookmarks, use the `useBookmarks` hook found in `client/src/hooks/useBookmarks.ts`.
*   **Mobile Detection**:
    *   For detecting mobile screen sizes, use the `useIsMobile` hook found in `client/src/hooks/use-mobile.tsx`.
*   **Utility Functions**:
    *   General utility functions should be placed in `client/src/lib/utils.ts`.
*   **Supabase**:
    *   If any authentication, database, or server-side functions (e.g., loading API keys, secrets) are required, you must first add Supabase to the app using the provided integration command.

By adhering to these rules, we ensure a consistent, performant, and maintainable application.