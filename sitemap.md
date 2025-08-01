# Site Navigation and User Journey Map

## Application Sitemap

```
Wang Sam Mo Jobs - Application Structure
│
├── 🏠 Homepage (/)
│   ├── Hero Section with Search
│   ├── Featured Jobs (6 latest)
│   ├── Category Quick Links
│   └── Call-to-Action for Employers
│
├── 🔍 Jobs Search (/jobs)
│   ├── Search Bar & Filters
│   │   ├── Keyword Search
│   │   ├── Category Filter
│   │   ├── Employment Type Filter
│   │   └── Location Filter
│   ├── Job Listings Grid
│   ├── Pagination
│   └── Sort Options
│
├── 📄 Job Detail (/job/:id)
│   ├── Job Header Section
│   │   ├── Job Title & Company
│   │   ├── Location & Salary
│   │   ├── Employment Type Badges
│   │   └── Action Buttons (Apply, Save, Share)
│   ├── Main Content
│   │   ├── Job Description
│   │   ├── Requirements
│   │   ├── Skills Needed
│   │   ├── Benefits
│   │   └── Additional Information
│   ├── Company Sidebar
│   │   ├── Company Info
│   │   ├── Contact Details
│   │   └── Application Deadline
│   └── Related Jobs Section
│
├── 🏢 Company Profile (/company/:slug)
│   ├── Company Header
│   │   ├── Company Logo & Name
│   │   ├── Industry & Size
│   │   ├── Location & Contact
│   │   └── Company Description
│   ├── Open Positions
│   ├── Company Culture
│   └── Contact Information
│
├── 📊 Application Tracking (/applications)
│   ├── Application Status Dashboard
│   ├── Filter by Status
│   │   ├── Applied
│   │   ├── Under Review
│   │   ├── Interview Scheduled
│   │   ├── Accepted
│   │   └── Rejected
│   ├── Application History
│   └── Saved Jobs
│
└── ❓ 404 Not Found (/*)
    ├── Error Message
    ├── Search Suggestions
    └── Navigation Links
```

## User Journey Flows

### 🎯 Primary User Flow: Job Seeker

#### 1. Job Discovery Journey
```
Entry Point → Search → Filter → Browse → Apply
    ↓           ↓        ↓        ↓        ↓
Homepage → Jobs Page → Refine → Job Detail → Application
    ↓           ↓        ↓        ↓        ↓
Search Bar → Results → Filters → Company → Track Status
```

**Steps:**
1. **Landing** - User arrives at homepage
2. **Search** - Enters job search terms or browses categories  
3. **Filter** - Narrows results by category, type, location
4. **Browse** - Reviews job cards and summaries
5. **Explore** - Clicks on interesting jobs for details
6. **Research** - Views company profile and additional jobs
7. **Apply** - Submits application for desired position
8. **Track** - Monitors application status in tracking page

#### 2. Company Research Journey
```
Job Detail → Company Profile → Other Jobs → Apply
    ↓            ↓              ↓           ↓
Company Link → Company Info → Browse Jobs → Application
```

**Steps:**
1. **Discovery** - Finds company through job listing
2. **Research** - Reviews company profile and culture
3. **Exploration** - Browses other open positions
4. **Comparison** - Evaluates multiple opportunities
5. **Decision** - Chooses best-fit position
6. **Application** - Applies to selected role

### 🏢 Secondary User Flow: Employer/Recruiter

#### Job Posting Journey (Future Feature)
```
Homepage → Post Job → Create Listing → Manage Applications
    ↓          ↓           ↓              ↓
CTA Button → Job Form → Preview/Publish → Dashboard
```

### 📱 Mobile-First Navigation Patterns

#### Primary Navigation (Header)
- **Mobile**: Hamburger menu with main sections
- **Desktop**: Horizontal navigation bar
- **Sticky**: Header remains visible on scroll

#### Search Functionality
- **Persistent**: Search available on all pages
- **Smart**: Autocomplete and search suggestions
- **Contextual**: Pre-filled based on current page

#### Filter Interface
- **Mobile**: Collapsible filter panel
- **Desktop**: Fixed sidebar filters
- **Smart**: Remember user preferences

## Page-Specific User Interactions

### 🏠 Homepage Interactions
```
User Actions:
├── Search Jobs (Primary CTA)
├── Browse Featured Jobs
├── Quick Category Selection
├── Language Toggle (TH/EN)
└── Navigate to Main Sections

Conversion Goals:
├── Job Search Engagement (60%)
├── Category Browse (25%)
├── Direct Job Application (10%)
└── Company Profile Views (5%)
```

### 🔍 Jobs Page Interactions
```
User Actions:
├── Keyword Search
├── Apply Filters
│   ├── Categories (Tourism, Hospitality, etc.)
│   ├── Employment Type (Full-time, Part-time)
│   └── Location (Wang Sam Mo area)
├── Sort Results
├── Bookmark Jobs
├── View Job Details
└── Pagination Navigation

Engagement Metrics:
├── Average Session Duration: 3-5 minutes
├── Jobs Viewed per Session: 5-8 jobs
├── Filter Usage Rate: 70% of users
└── Click-through Rate: 25% to job details
```

### 📄 Job Detail Page Interactions
```
User Actions:
├── Read Job Description
├── View Company Information
├── Apply for Position
├── Save/Bookmark Job
├── Share Job Posting
├── Browse Related Jobs
└── Visit Company Profile

Conversion Actions:
├── Job Application (Primary Goal - 15%)
├── Company Profile Visit (25%)
├── Related Job Views (40%)
└── Job Bookmarking (30%)
```

### 📊 Application Tracking Interactions
```
User Actions:
├── View Application Status
├── Filter by Status Type
├── Track Application Progress
├── View Saved Jobs
├── Manage Bookmarks
└── Return to Job Search

User Value:
├── Application Organization
├── Progress Transparency
├── Quick Job Access
└── Search History
```

## Accessibility Navigation

### Keyboard Navigation
- **Tab Order**: Logical tab sequence through interactive elements
- **Skip Links**: Jump to main content, search, navigation
- **Focus Indicators**: Clear visual focus states
- **Shortcuts**: Common keyboard shortcuts supported

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Descriptive labels for complex interactions
- **Alt Text**: Meaningful descriptions for images
- **Status Updates**: Live regions for dynamic content

### Mobile Accessibility
- **Touch Targets**: Minimum 44px tap areas
- **Gesture Support**: Standard mobile gestures
- **Zoom Support**: Content scalable up to 200%
- **Orientation**: Works in portrait and landscape

## SEO and Content Structure

### URL Structure
```
Domain: wangsammo-jobs.replit.app

Pages:
├── / (Homepage)
├── /jobs (Job listings)
├── /jobs?category=Tourism (Filtered jobs)
├── /jobs?q=hotel (Search results)
├── /job/1 (Job detail)
├── /company/royal-heritage-hotel (Company profile)
└── /applications (User dashboard)
```

### Content Hierarchy
```
Information Architecture:
├── Primary Content (Job Listings)
├── Supporting Content (Company Info)
├── Navigation Elements (Search, Filters)
├── User Account Features (Applications)
└── Utility Pages (404, Contact)
```

### Language Structure
```
Multilingual Support:
├── Thai (Primary) - Complete interface
├── English (Secondary) - Full translation
├── URL Parameters - Language detection
└── Content Localization - Cultural adaptation
```

## Performance Considerations

### Page Load Priorities
1. **Critical Path**: Search functionality and job listings
2. **Above Fold**: Homepage hero and featured jobs
3. **Progressive**: Company details and related content
4. **Deferred**: Analytics and non-essential features

### Mobile Performance
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Time to Interactive**: < 3.5 seconds
- **Cumulative Layout Shift**: < 0.1

This navigation structure ensures intuitive user experience while supporting the primary goal of connecting job seekers with employment opportunities in the Wang Sam Mo tourism and service industries.