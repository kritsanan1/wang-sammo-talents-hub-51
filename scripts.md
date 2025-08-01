# Scripts Documentation

## Available NPM Scripts

| Script | Description | Parameters | Example | Troubleshooting |
|--------|-------------|------------|---------|-----------------|
| `dev` | Start development server with hot reload | None | `npm run dev` | Ensure port 5000 is available, check DATABASE_URL |
| `build` | Create production build | None | `npm run build` | Clear `.vite` cache if build fails, run `npm run check` first |
| `start` | Start production server | None | `npm run start` | Requires `npm run build` first, set NODE_ENV=production |
| `check` | TypeScript type checking | None | `npm run check` | Fix TypeScript errors before building |
| `db:push` | Push database schema to database | None | `npm run db:push` | Verify DATABASE_URL, ensure database is accessible |

## Detailed Script Reference

### Development Server (`npm run dev`)

**Purpose**: Starts the development server with hot module replacement and TypeScript compilation.

**Command**: `NODE_ENV=development tsx server/index.ts`

**Features**:
- Hot reload on file changes
- TypeScript compilation on-the-fly
- API and client served on single port (5000)
- Automatic restart on server file changes

**Expected Output**:
```bash
> rest-express@1.0.0 dev
> NODE_ENV=development tsx server/index.ts
[timestamp] [express] serving on port 5000
[timestamp] [vite] ready in 350ms
```

**Common Issues**:
- **Port 5000 in use**: Change PORT in environment or stop conflicting process
- **Database connection error**: Verify DATABASE_URL and database availability
- **TypeScript errors**: Run `npm run check` to identify issues
- **Module not found**: Run `npm install` to ensure dependencies are installed

### Production Build (`npm run build`)

**Purpose**: Creates optimized production bundle for both client and server.

**Command**: `vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist`

**Process**:
1. **Client Build**: Vite bundles React application with optimizations
2. **Server Build**: ESBuild compiles TypeScript server code
3. **Asset Optimization**: Minification, tree-shaking, code splitting

**Expected Output**:
```bash
> rest-express@1.0.0 build
> vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

vite v7.0.6 building for production...
✓ 45 modules transformed.
dist/client/index.html                   0.44 kB │ gzip:  0.29 kB
dist/client/assets/index-[hash].css      8.32 kB │ gzip:  2.11 kB
dist/client/assets/index-[hash].js     156.78 kB │ gzip: 50.23 kB
✓ built in 1.23s

  dist/index.js  1.2mb ⚠️
```

**Common Issues**:
- **Build size warnings**: Normal for full-stack applications
- **TypeScript errors**: Run `npm run check` before building
- **Memory issues**: Increase Node.js memory: `NODE_OPTIONS="--max-old-space-size=4096" npm run build`
- **Missing dependencies**: Ensure all imports are correctly resolved

### Production Server (`npm run start`)

**Purpose**: Starts production server using built files.

**Command**: `NODE_ENV=production node dist/index.js`

**Requirements**:
- Must run `npm run build` first
- Production environment variables configured
- Database accessible from production environment

**Expected Output**:
```bash
> rest-express@1.0.0 start
> NODE_ENV=production node dist/index.js
[timestamp] [express] serving on port 5000
```

**Common Issues**:
- **No dist folder**: Run `npm run build` first
- **Environment variables**: Ensure all required env vars are set for production
- **Database connection**: Verify production DATABASE_URL
- **Port conflicts**: Ensure production port is available

### Type Checking (`npm run check`)

**Purpose**: Validates TypeScript types without compilation.

**Command**: `tsc`

**Use Cases**:
- Pre-commit validation
- CI/CD pipeline checks
- Development debugging

**Expected Output** (Success):
```bash
> rest-express@1.0.0 check
> tsc
# No output indicates success
```

**Expected Output** (Errors):
```bash
> rest-express@1.0.0 check
> tsc
client/src/components/JobCard.tsx(25,7): error TS2322: Type 'string' is not assignable to type 'number'.
```

**Common Issues**:
- **Path resolution errors**: Check `tsconfig.json` paths configuration
- **Missing type definitions**: Install `@types/*` packages for dependencies
- **Strict mode errors**: Fix type annotations and null checks

### Database Schema Push (`npm run db:push`)

**Purpose**: Synchronizes database schema with Drizzle schema definitions.

**Command**: `drizzle-kit push`

**Features**:
- Compares current schema with database
- Generates and executes migration SQL
- Safe schema updates without data loss

**Expected Output**:
```bash
> rest-express@1.0.0 db:push
> drizzle-kit push

 Warning  You are about to execute SQL:
┌─────────────────────────────────────────┐
│ CREATE TABLE IF NOT EXISTS "users" (   │
│   "id" serial PRIMARY KEY NOT NULL,    │
│   "username" varchar(255) NOT NULL,    │
│   "email" varchar(255) NOT NULL        │
│ );                                      │
└─────────────────────────────────────────┘

✓ Changes applied
```

**Common Issues**:
- **Connection refused**: Verify DATABASE_URL and database availability
- **Permission denied**: Ensure database user has schema modification privileges
- **Schema conflicts**: Review pending migrations and resolve conflicts manually
- **Network timeout**: Check database connectivity and firewall settings

## Advanced Usage

### Environment-Specific Scripts

**Development with specific port**:
```bash
PORT=3000 npm run dev
```

**Debug mode**:
```bash
DEBUG=* npm run dev
```

**Production build with source maps**:
```bash
BUILD_SOURCEMAP=true npm run build
```

### Script Combinations

**Full development setup**:
```bash
npm install && npm run db:push && npm run dev
```

**Production deployment**:
```bash
npm run check && npm run build && npm run start
```

**Clean rebuild**:
```bash
rm -rf node_modules dist && npm install && npm run build
```

## Performance Optimization

### Build Performance
- **Parallel builds**: Use `--parallel` flag where supported
- **Memory allocation**: Set `NODE_OPTIONS="--max-old-space-size=4096"`
- **Cache utilization**: Leverage `.vite` and `node_modules/.cache` directories

### Development Performance
- **Selective rebuilds**: Use file watching for specific directories
- **Memory management**: Restart dev server periodically for long sessions
- **Hot reload optimization**: Minimize component tree depth

## Monitoring and Logging

### Development Logging
```bash
# Enable debug logs
DEBUG=express:* npm run dev

# TypeScript compiler verbose
npm run check -- --verbose
```

### Production Monitoring
```bash
# Process monitoring with PM2
pm2 start "npm run start" --name wang-sam-mo-jobs
pm2 logs wang-sam-mo-jobs
pm2 monit
```

## Continuous Integration

### CI/CD Pipeline Script
```yaml
# .github/workflows/deploy.yml
- name: Install dependencies
  run: npm ci

- name: Type check
  run: npm run check

- name: Build application
  run: npm run build

- name: Run tests
  run: npm test

- name: Deploy
  run: npm run start
```

### Pre-commit Hooks
```json
{
  "pre-commit": [
    "npm run check",
    "npm run test"
  ]
}
```