# File Structure Documentation

## Project Overview
Wang Sam Mo Jobs - A comprehensive Thai job search application with 6 directories and 58 files.

## Directory Structure

```
วังสามหมอ-jobs/
├── 📄 package.json 🟡                    # Project dependencies and scripts configuration
├── 📄 package-lock.json 🔴              # Locked dependency versions for consistent installs
├── 📄 tsconfig.json 🟢                  # TypeScript compiler configuration with path mappings
├── 📄 vite.config.ts 🟢                 # Vite build tool configuration with plugins
├── 📄 tailwind.config.ts 🟢             # Tailwind CSS configuration with custom themes
├── 📄 postcss.config.js 🟢              # PostCSS configuration for CSS processing
├── 📄 drizzle.config.ts 🟢              # Drizzle ORM configuration for database operations
├── 📄 components.json 🟢                # shadcn/ui components configuration
├── 📄 replit.md 🟢                      # Project documentation and architecture overview
│
├── 📁 client/                            # Frontend React application
│   ├── 📄 index.html 🟢                 # Main HTML template with Thai fonts
│   ├── 📁 public/                       # Static assets directory
│   └── 📁 src/                          # Source code directory
│       ├── 📄 main.tsx 🟢               # React application entry point
│       ├── 📄 App.tsx 🟡                # Main App component with routing setup
│       ├── 📄 App.css 🟢                # Application-specific styles
│       ├── 📄 index.css 🟢              # Global styles with custom CSS variables
│       ├── 📄 vite-env.d.ts 🟢          # Vite environment type definitions
│       │
│       ├── 📁 components/               # Reusable UI components
│       │   ├── 📄 Header.tsx 🟡         # Main navigation header with mobile menu
│       │   ├── 📄 Footer.tsx 🟡         # Site footer with links and contact info
│       │   ├── 📄 SearchBar.tsx 🟡      # Job search input component
│       │   ├── 📄 JobCard.tsx 🟡        # Individual job listing card
│       │   ├── 📄 JobCardSkeleton.tsx 🟢 # Loading skeleton for job cards
│       │   ├── 📄 FilterPanel.tsx 🟡    # Job filtering sidebar component
│       │   ├── 📄 BookmarkButton.tsx 🟡 # Job bookmark functionality
│       │   ├── 📄 LoadingSpinner.tsx 🟢 # Loading indicator component
│       │   ├── 📄 LanguageToggle.tsx 🟡 # Thai/English language switcher
│       │   ├── 📄 JobDetailHeader.tsx 🟡 # Job detail page header section
│       │   ├── 📄 JobDetailContent.tsx 🟡 # Job detail page main content
│       │   ├── 📄 JobDetailSidebar.tsx 🟡 # Job detail page sidebar
│       │   ├── 📄 RelatedJobs.tsx 🟡    # Related jobs recommendations
│       │   └── 📁 ui/                   # shadcn/ui base components (40+ files)
│       │
│       ├── 📁 pages/                    # Page components for routing
│       │   ├── 📄 Index.tsx 🟡          # Homepage with hero section and featured jobs
│       │   ├── 📄 JobsPage.tsx 🔴       # Main job search and listing page
│       │   ├── 📄 JobDetailPage.tsx 🟡  # Individual job detail view
│       │   ├── 📄 CompanyPage.tsx 🟡    # Company profile and job listings
│       │   ├── 📄 ApplicationTrackingPage.tsx 🟡 # User application tracking
│       │   └── 📄 NotFound.tsx 🟢       # 404 error page
│       │
│       ├── 📁 contexts/                 # React context providers
│       │   └── 📄 LanguageContext.tsx 🟡 # Internationalization context
│       │
│       ├── 📁 hooks/                    # Custom React hooks
│       │   ├── 📄 useBookmarks.ts 🟡    # Job bookmarking functionality
│       │   ├── 📄 useLocalStorage.ts 🟢 # Local storage helper hook
│       │   ├── 📄 use-mobile.tsx 🟢     # Mobile device detection hook
│       │   └── 📄 use-toast.ts 🟢       # Toast notification hook
│       │
│       ├── 📁 data/                     # Static data and mock data
│       │   ├── 📄 jobs.ts 🟢            # Job listings data with Thai content
│       │   └── 📄 jobEnhancements.ts 🟢 # Additional job data enhancements
│       │
│       ├── 📁 lib/                      # Utility libraries
│       │   └── 📄 utils.ts 🟡           # Utility functions and helpers
│       │
│       └── 📁 integrations/             # External service integrations
│           └── 📁 supabase/             # Supabase client configuration (legacy)
│
├── 📁 server/                           # Backend Express.js application
│   ├── 📄 index.ts 🟡                   # Express server entry point
│   ├── 📄 db.ts 🟢                      # Database connection configuration
│   ├── 📄 storage.ts 🟡                 # Data storage abstraction layer
│   ├── 📄 routes.ts 🟢                  # API route definitions
│   └── 📄 vite.ts 🟡                    # Vite integration middleware
│
├── 📁 shared/                           # Shared code between client and server
│   └── 📄 schema.ts 🟡                  # Database schema and type definitions
│
├── 📁 supabase/                         # Supabase configuration (legacy)
│   └── 📄 config.toml 🟢               # Supabase project configuration
│
└── 📁 attached_assets/                  # Documentation and assets
    ├── 📄 Pasted-You-are-a-technical-documentation-specialist-1754045182466.txt 🟢
    └── 📄 Pasted-You-are-a-technical-documentation-specialist-1754045799997.txt 🟢
```

## Import Complexity Legend
- 🟢 **Simple** (0-3 imports): Basic components with minimal dependencies
- 🟡 **Moderate** (4-7 imports): Standard components with multiple UI/utility imports
- 🔴 **Complex** (8+ imports): Feature-rich components with extensive dependencies

## File Statistics
- **Total Files**: 58 tracked files
- **🟢 Simple**: 28 files (48%)
- **🟡 Moderate**: 26 files (45%)
- **🔴 Complex**: 4 files (7%)

## Key Architecture Notes
- **Frontend**: React 18 + TypeScript with Vite build system
- **Backend**: Node.js + Express with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query + React Context

## Critical Dependencies
- **UI Framework**: @radix-ui/* components for accessibility
- **Database**: @neondatabase/serverless for PostgreSQL
- **Validation**: zod for runtime type checking
- **Internationalization**: Custom context for Thai/English support
- **Icons**: lucide-react for consistent iconography