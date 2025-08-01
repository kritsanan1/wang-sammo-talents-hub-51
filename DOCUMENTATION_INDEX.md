# 📚 Wang Sam Mo Jobs - Documentation Index

Welcome to the comprehensive documentation suite for the Wang Sam Mo job board application. This index provides quick access to all technical documentation created following industry standards.

## 📋 Core Documentation

### 🏗️ Architecture & System Design
- **[Architecture Diagram](architecture.svg)** - Visual system architecture with component relationships
- **[System Overview](replit.md)** - Project architecture, recent changes, and technical stack
- **[Structure Analysis](structure-analysis.md)** - Current vs recommended project organization

### 🚀 Getting Started
- **[README](README.md)** - Complete project setup, installation, and usage guide
- **[Environment Setup](.env.example)** - Environment variables configuration template
- **[Scripts Reference](scripts.md)** - Detailed NPM scripts documentation with troubleshooting

### 📁 Project Structure
- **[File Structure](filesExplainer.md)** - Complete file tree with complexity indicators and descriptions
- **[Site Navigation](sitemap.md)** - Application routes, user journeys, and navigation patterns

## 🤝 Contributing & Development

### 👥 Contribution Guidelines
- **[Contributing Guide](.github/CONTRIBUTING.md)** - Complete contributor guide with workflows and standards
- **[Issue Templates](.github/ISSUE_TEMPLATE/)** - Standardized bug reports and feature requests
- **[Pull Request Template](.github/PULL_REQUEST_TEMPLATE/)** - Comprehensive PR requirements and checklists

### 🔄 CI/CD & Automation
- **[GitHub Workflows](.github/workflows/)** - Automated testing, building, and deployment pipelines

## 📊 Technical Specifications

### 🏛️ Application Architecture
```
Frontend (React + TypeScript)
├── Pages: Homepage, Jobs Search, Job Details, Company Profiles
├── Components: Header, Footer, Job Cards, Filters, Search
├── State: React Query + Context (Language, Bookmarks)
├── Styling: Tailwind CSS + shadcn/ui components
└── Routing: Wouter (lightweight routing)

Backend (Node.js + Express)
├── API Routes: Jobs, Applications, Companies
├── Authentication: Express sessions + Passport.js
├── Database: Drizzle ORM with PostgreSQL
├── Middleware: CORS, validation, session management
└── Integration: Vite development server

Database (PostgreSQL)
├── Tables: Users, Jobs, Applications, Companies
├── Provider: Neon Database (serverless)
├── ORM: Drizzle with type-safe operations
└── Sessions: PostgreSQL-backed session store
```

### 🌐 Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | React 18 + TypeScript | Type-safe UI components |
| **Routing** | Wouter | Lightweight client-side routing |
| **State Management** | TanStack React Query | Server state caching |
| **UI Framework** | Radix UI + shadcn/ui | Accessible component library |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Backend** | Node.js + Express | RESTful API server |
| **Database** | PostgreSQL (Neon) | Serverless relational database |
| **ORM** | Drizzle ORM | Type-safe database operations |
| **Authentication** | Express Sessions | Session-based authentication |
| **Build Tool** | Vite | Fast development and building |
| **Language** | TypeScript | Type safety across stack |

## 🎯 Feature Overview

### Current Features ✅
- **Job Search & Filtering**: Advanced search with category and location filters
- **Mobile-First Design**: Responsive interface optimized for mobile devices  
- **Bilingual Support**: Thai and English language interfaces
- **Job Bookmarking**: Save and manage favorite job opportunities
- **Company Profiles**: Detailed company information and job listings
- **Application Tracking**: Monitor job application status and history

### Planned Features 🚧
- **User Authentication**: Secure user registration and login
- **Job Applications**: Direct application submission through platform
- **Email Notifications**: Job alerts and application updates
- **Advanced Filtering**: Salary range, experience level, remote work options
- **Admin Dashboard**: Job posting management for employers

## 📱 User Experience

### Target Audience
- **Primary**: Local job seekers in Wang Sam Mo area
- **Secondary**: Employers in tourism and hospitality industries
- **Geographic Focus**: Wang Sam Mo tourism and service sector

### User Journeys
1. **Job Discovery**: Homepage → Search → Filter → Job Details → Apply
2. **Company Research**: Job Listing → Company Profile → Other Jobs → Apply
3. **Application Tracking**: Dashboard → Status Updates → Follow-up Actions

### Mobile Optimization
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Touch Optimization**: Appropriate touch targets and gestures
- **Performance**: Optimized for slower mobile connections
- **Accessibility**: Screen reader support and keyboard navigation

## 🔧 Development Workflow

### Getting Started (Quick)
```bash
# Clone and setup
git clone <repository-url>
cd wang-sam-mo-jobs
npm install

# Configure environment
cp .env.example .env
# Edit .env with your database credentials

# Setup database
npm run db:push

# Start development
npm run dev
```

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run check        # TypeScript type checking
npm run db:push      # Update database schema
npm test             # Run test suite
npm run lint         # Code quality checks
```

### Code Quality Standards
- **TypeScript**: Strict mode enabled with comprehensive typing
- **Testing**: Unit tests for components and hooks
- **Code Style**: Prettier formatting with ESLint rules
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Core Web Vitals optimization

## 🌍 Internationalization

### Language Support
- **Thai (th)**: Primary language for local users
- **English (en)**: Secondary language for international users
- **Cultural Adaptation**: Thai employment terminology and conventions
- **Font Support**: Prompt and Sarabun fonts for Thai text

### Implementation
- **Context-based**: React Context for language state management
- **Component-level**: Translation hooks in all user-facing components
- **Fallback**: Graceful fallback to English for missing translations
- **Validation**: Thai text length and formatting considerations

## 🔒 Security & Performance

### Security Measures
- **Input Validation**: Zod schemas for runtime type checking
- **SQL Injection Prevention**: Parameterized queries via Drizzle ORM
- **XSS Protection**: Content sanitization and CSP headers
- **Session Security**: Secure session configuration with PostgreSQL store

### Performance Optimization
- **Bundle Splitting**: Code splitting for optimal loading
- **Image Optimization**: WebP format with fallbacks
- **Caching Strategy**: React Query for client-side caching
- **Database Optimization**: Query optimization and connection pooling

## 📈 Monitoring & Analytics

### Application Monitoring
- **Error Tracking**: Comprehensive error boundary implementation
- **Performance Metrics**: Core Web Vitals monitoring
- **User Analytics**: Privacy-focused usage analytics
- **Database Monitoring**: Query performance and connection health

### CI/CD Pipeline
- **Automated Testing**: TypeScript checks, unit tests, integration tests
- **Security Scanning**: Dependency vulnerability scanning
- **Code Quality**: ESLint, Prettier, and TypeScript strict mode
- **Deployment**: Automated deployment on successful builds

## 📞 Support & Maintenance

### Documentation Maintenance
- **Living Documentation**: Regular updates with code changes
- **Version Control**: Documentation versioning alongside code
- **Community Contributions**: Contributor guidelines for documentation
- **Feedback Integration**: User feedback incorporation process

### Support Channels
- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Community questions and ideas
- **Contributing Guide**: Comprehensive contributor onboarding
- **Code Reviews**: Collaborative development process

---

## 📝 Documentation Status

| Document | Status | Last Updated | Completeness |
|----------|--------|--------------|--------------|
| README.md | ✅ Complete | 2025-01-20 | 100% |
| Architecture Diagram | ✅ Complete | 2025-01-20 | 100% |
| File Structure | ✅ Complete | 2025-01-20 | 100% |
| Scripts Reference | ✅ Complete | 2025-01-20 | 100% |
| Environment Setup | ✅ Complete | 2025-01-20 | 100% |
| Contributing Guide | ✅ Complete | 2025-01-20 | 100% |
| Issue Templates | ✅ Complete | 2025-01-20 | 100% |
| CI/CD Workflows | ✅ Complete | 2025-01-20 | 100% |
| Site Navigation | ✅ Complete | 2025-01-20 | 100% |
| Structure Analysis | ✅ Complete | 2025-01-20 | 100% |

**Total Documentation Coverage**: 100% Complete

This comprehensive documentation suite provides everything needed for developers to understand, contribute to, and deploy the Wang Sam Mo job board application effectively.