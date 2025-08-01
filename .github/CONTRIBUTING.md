# Contributing to Wang Sam Mo Jobs

Thank you for your interest in contributing to the Wang Sam Mo job board platform! This guide will help you get started with contributing to our Thai job search application.

## 🎯 Project Mission

Wang Sam Mo Jobs connects local job seekers with employment opportunities in the tourism and service industries. We focus on:

- **Local Impact**: Serving the Wang Sam Mo community specifically
- **Accessibility**: Mobile-first design for all users
- **Cultural Sensitivity**: Thai language support and cultural awareness
- **Quality Opportunities**: Curated job listings in tourism and hospitality

## 🤝 How to Contribute

### Types of Contributions

We welcome all types of contributions:

- 🐛 **Bug Reports**: Help us identify and fix issues
- 💡 **Feature Requests**: Suggest new functionality
- 📝 **Documentation**: Improve guides and explanations
- 💻 **Code Changes**: Fix bugs and implement features
- 🌐 **Translations**: Enhance Thai/English language support
- 🎨 **Design**: UI/UX improvements and suggestions
- 📊 **Testing**: Write tests and improve coverage

### Getting Started

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/wang-sam-mo-jobs.git
   cd wang-sam-mo-jobs
   ```

2. **Set Up Development Environment**
   ```bash
   npm install
   cp .env.example .env
   # Configure your .env file with database credentials
   npm run db:push
   npm run dev
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/issue-number-description
   ```

## 🏗️ Development Workflow

### Branch Naming Convention

Use descriptive branch names following this pattern:
- `feature/WSM-123-job-filtering` - New features
- `bugfix/WSM-456-mobile-layout` - Bug fixes
- `docs/WSM-789-api-documentation` - Documentation updates
- `refactor/WSM-012-component-cleanup` - Code refactoring
- `test/WSM-345-job-search-tests` - Testing improvements

### Commit Message Format

Follow conventional commits:
```
type(scope): description

feat(jobs): add advanced filtering by salary range
fix(mobile): resolve header navigation on small screens
docs(api): update job search endpoint documentation
test(components): add JobCard component tests
```

### Code Standards

#### TypeScript Requirements
- **Strict Mode**: All code must pass TypeScript strict checks
- **Type Safety**: Use proper TypeScript types, avoid `any`
- **Interfaces**: Define clear interfaces for props and data
- **Error Handling**: Implement proper error boundaries

#### React Best Practices
- **Functional Components**: Use function components with hooks
- **Custom Hooks**: Extract reusable logic into custom hooks
- **Performance**: Use React.memo and useMemo when appropriate
- **Accessibility**: Include proper ARIA attributes and semantic HTML

#### Styling Guidelines
- **Tailwind First**: Use Tailwind CSS classes for styling
- **Responsive Design**: Mobile-first approach with responsive utilities
- **Component Consistency**: Follow shadcn/ui component patterns
- **Thai Typography**: Ensure proper Thai font support

#### Backend Standards
- **API Design**: RESTful endpoints with clear naming
- **Validation**: Use Zod schemas for request validation
- **Error Handling**: Consistent error response format
- **Database**: Use Drizzle ORM with proper relations

### Testing Requirements

#### Frontend Testing
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

**Test Requirements:**
- Unit tests for custom hooks
- Component integration tests
- API endpoint tests
- Accessibility tests

#### Required Test Coverage
- **Components**: Test behavior, not implementation
- **Hooks**: Test all code paths and edge cases
- **API Endpoints**: Test success and error scenarios
- **Utilities**: Test pure functions thoroughly

### Code Review Process

#### Self-Review Checklist

Before submitting your PR:

- [ ] Code follows project style guidelines
- [ ] All tests pass locally
- [ ] TypeScript compilation succeeds
- [ ] Mobile responsive design works
- [ ] Thai language support maintained
- [ ] No console errors in browser
- [ ] Performance impact considered
- [ ] Security best practices followed

#### PR Requirements

Your pull request must include:

1. **Clear Description**: What changes were made and why
2. **Testing**: How you tested the changes
3. **Screenshots**: For UI/UX changes (mobile and desktop)
4. **Breaking Changes**: Any changes that affect existing functionality
5. **Dependencies**: Any new dependencies added

#### Review Process

1. **Automated Checks**: CI/CD pipeline must pass
2. **Code Review**: At least one maintainer review required
3. **Testing**: Manual testing on multiple devices
4. **Documentation**: Updates to docs if needed

## 🌐 Internationalization Guidelines

### Thai Language Support

When working with Thai content:

- **Font Support**: Test with Prompt and Sarabun fonts
- **Text Length**: Thai text may be longer/shorter than English
- **Cultural Context**: Ensure culturally appropriate terminology
- **Date/Time**: Use Thai Buddhist calendar when appropriate

### Translation Guidelines

- **Consistency**: Use consistent terminology across the app
- **Context**: Consider job search and employment context
- **Formality**: Use appropriate level of formality for Thai users
- **Localization**: Adapt content for local Wang Sam Mo context

## 🎨 Design Contributions

### UI/UX Guidelines

- **Mobile First**: Design for mobile screens first
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Optimize for slower network connections
- **Cultural Sensitivity**: Appropriate for Thai users

### Design Assets

When contributing design assets:
- Use SVG format for icons and illustrations
- Optimize images for web (WebP preferred)
- Ensure proper contrast ratios
- Test on various screen sizes

## 🐛 Bug Reports

### Before Reporting

1. **Search Existing Issues**: Check if bug already reported
2. **Latest Version**: Ensure you're using the latest code
3. **Reproducible**: Confirm you can reproduce the issue
4. **Environment**: Test on different browsers/devices

### Bug Report Template

Use our bug report template and include:
- Clear reproduction steps
- Expected vs actual behavior
- Screenshots/videos if applicable
- Environment details (browser, device, OS)
- Console errors (if any)

## 💡 Feature Requests

### Before Requesting

- **User Need**: Explain the problem this solves
- **Target Users**: Who would benefit from this feature
- **Existing Solutions**: Why current features don't work
- **Implementation**: Consider technical feasibility

### Feature Proposal Process

1. **Issue Discussion**: Create feature request issue
2. **Community Feedback**: Gather input from other contributors
3. **Technical Design**: Plan implementation approach
4. **Implementation**: Create PR with feature code

## 📊 Performance Guidelines

### Frontend Performance

- **Bundle Size**: Monitor and minimize bundle size
- **Load Times**: Target < 3 seconds on 3G connections
- **Core Web Vitals**: Maintain good Lighthouse scores
- **Memory Usage**: Avoid memory leaks in React components

### Backend Performance

- **Database Queries**: Optimize query performance
- **Response Times**: Target < 500ms API response times
- **Caching**: Implement appropriate caching strategies
- **Resource Usage**: Monitor CPU and memory usage

## 🔒 Security Guidelines

### Frontend Security

- **Input Validation**: Validate all user inputs
- **XSS Prevention**: Sanitize user-generated content
- **Authentication**: Proper session management
- **Dependency Security**: Keep dependencies updated

### Backend Security

- **SQL Injection**: Use parameterized queries
- **Authentication**: Secure session handling
- **Authorization**: Proper access controls
- **Data Protection**: Secure sensitive information

## 📚 Documentation Standards

### Code Documentation

- **JSDoc Comments**: Document complex functions
- **README Updates**: Keep documentation current
- **API Documentation**: Document all endpoints
- **Component Stories**: Storybook for UI components

### Writing Style

- **Clear Language**: Write for non-technical users
- **Examples**: Include practical examples
- **Up-to-date**: Keep documentation current
- **Bilingual**: Consider Thai language docs for local users

## 🎉 Recognition

### Contributors

We recognize contributors through:
- GitHub contributor graph
- Changelog mentions
- Community shoutouts
- Optional contributor profiles

### Hall of Fame

Special recognition for:
- Long-term contributors
- Major feature implementations
- Significant bug fixes
- Outstanding community support

## 📞 Getting Help

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Code Reviews**: PR discussions and feedback

### Maintainer Response Times

- **Issues**: Response within 48 hours
- **PRs**: Initial review within 72 hours
- **Security Issues**: Response within 24 hours

## 📄 License

By contributing to Wang Sam Mo Jobs, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Every contribution helps make job searching better for the Wang Sam Mo community. Whether you're fixing a typo, adding a feature, or improving documentation - thank you for helping build something meaningful for local job seekers!

---

*This contributing guide is living documentation. If you see ways to improve it, please submit suggestions!*