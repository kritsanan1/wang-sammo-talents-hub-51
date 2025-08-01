# วังสามหมอ Jobs (Wang Sam Mo Jobs)

A comprehensive Thai job search platform designed for local employment opportunities in the tourism and service industries. Built with modern web technologies and optimized for mobile-first user experience.

## 🚀 Features

- **Bilingual Support**: Thai and English language interfaces
- **Mobile-First Design**: Responsive design optimized for mobile devices
- **Job Search & Filtering**: Advanced search with category and type filters
- **Company Profiles**: Detailed company information and job listings
- **Application Tracking**: Monitor job application status
- **Bookmark System**: Save interesting job opportunities
- **Real-time Updates**: Live job posting updates

## 🛠 Technical Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight routing)
- **UI Components**: Radix UI + shadcn/ui
- **Styling**: Tailwind CSS
- **State Management**: TanStack React Query + React Context
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL (Neon Database)
- **ORM**: Drizzle ORM
- **Session Management**: express-session with PostgreSQL store

## 📋 Prerequisites

### System Requirements
- **Node.js**: v20.x or higher
- **npm**: v10.x or higher
- **PostgreSQL**: v14+ (or Neon Database account)
- **Git**: Latest version

### Development Environment
- **Editor**: VS Code (recommended)
- **Extensions**: 
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets

## 🔧 Installation

### 1. Clone Repository
```bash
git clone <repository-url>
cd wang-sam-mo-jobs
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@host:port/database"
PGHOST="your-postgres-host"
PGPORT="5432"
PGUSER="your-username"
PGPASSWORD="your-password"
PGDATABASE="your-database-name"

# Application Configuration
NODE_ENV="development"
PORT="5000"

# Session Configuration
SESSION_SECRET="your-secure-session-secret-key"
```

### 4. Database Setup
```bash
# Push database schema
npm run db:push

# Verify database connection
npm run check
```

### 5. Start Development Server
```bash
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5000
- **API**: http://localhost:5000/api

## 📜 Scripts

| Script | Description | Usage |
|--------|-------------|-------|
| `npm run dev` | Start development server | Development mode with hot reload |
| `npm run build` | Build for production | Creates optimized production build |
| `npm run start` | Start production server | Runs built application |
| `npm run check` | Type check TypeScript | Validates TypeScript without compilation |
| `npm run db:push` | Push database schema | Updates database with schema changes |

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base shadcn/ui components
│   ├── Header.tsx      # Main navigation
│   ├── Footer.tsx      # Site footer
│   ├── JobCard.tsx     # Job listing card
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── JobsPage.tsx    # Job search page
│   ├── JobDetailPage.tsx # Job details
│   └── ...
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── data/               # Static data and types
└── lib/                # Utility functions

server/
├── index.ts            # Express server
├── db.ts               # Database connection
├── routes.ts           # API routes
└── storage.ts          # Data layer

shared/
└── schema.ts           # Shared types and schemas
```

## 🎨 Development Guidelines

### Code Style
- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier (automatic formatting)
- **Linting**: ESLint with React hooks rules
- **Naming**: 
  - Components: PascalCase
  - Functions: camelCase
  - Constants: UPPER_SNAKE_CASE

### Git Workflow
- **Branch Naming**: `[type]/[ticket-number]-[description]`
  - Examples: `feature/WSM-123-job-filtering`, `bugfix/WSM-456-mobile-layout`
- **Commit Messages**: Conventional commits format
  - `feat: add job filtering functionality`
  - `fix: resolve mobile layout issues`
  - `docs: update API documentation`

### Component Guidelines
- Use TypeScript interfaces for props
- Implement proper error boundaries
- Follow accessibility best practices
- Use semantic HTML elements
- Implement proper loading states

## 🧪 Testing

### Running Tests
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

### Testing Guidelines
- Write tests for all custom hooks
- Test component behavior, not implementation
- Mock external dependencies
- Maintain >80% code coverage

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Setup
1. **Production Database**: Set up PostgreSQL instance
2. **Environment Variables**: Configure production environment variables
3. **SSL Certificates**: Ensure HTTPS is configured
4. **Process Management**: Use PM2 or similar for process management

### Deployment Commands
```bash
# Build application
npm run build

# Start production server
npm run start
```

### Health Checks
- **API Health**: `GET /api/health`
- **Database**: `GET /api/db-status`
- **Version**: `GET /api/version`

## 🔐 Security

### Authentication
- Session-based authentication
- CSRF protection enabled
- Secure session cookies

### Database Security
- Parameterized queries (SQL injection prevention)
- Connection pooling with secure configurations
- Environment-based credential management

### API Security
- Rate limiting on API endpoints
- Input validation with Zod schemas
- CORS configuration for allowed origins

## 🌐 Internationalization

### Supported Languages
- **Thai (th)**: Primary language
- **English (en)**: Secondary language

### Adding New Translations
1. Update `contexts/LanguageContext.tsx`
2. Add translation keys to both language objects
3. Use `useLanguage()` hook in components
4. Test with both language variants

## 🐛 Troubleshooting

### Common Issues

#### Development Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### Database Connection Errors
1. Verify DATABASE_URL format
2. Check database credentials
3. Ensure database server is running
4. Run `npm run db:push` to sync schema

#### TypeScript Errors
```bash
# Type check
npm run check

# Clear TypeScript cache
rm -rf node_modules/.cache
npm run check
```

#### Build Failures
1. Check for TypeScript errors: `npm run check`
2. Verify all imports are correct
3. Clear Vite cache: `rm -rf node_modules/.vite`
4. Rebuild: `npm run build`

### Performance Issues
- **Slow Loading**: Check network tab for large assets
- **Memory Leaks**: Use React DevTools Profiler
- **Database Queries**: Monitor query performance

## 📞 Support

### Getting Help
- **Documentation**: Check project documentation in `/docs`
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub Discussions for questions

### Contributing
1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push branch: `git push origin feature/new-feature`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Acknowledgments

- **Design**: Inspired by modern job board platforms
- **Thai Localization**: Community contributors
- **Icons**: Lucide React icon library
- **UI Components**: shadcn/ui component library