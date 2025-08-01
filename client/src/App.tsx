
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { Suspense, lazy } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Loader2 } from 'lucide-react';

// Lazy load pages for better performance with more descriptive chunk names
const Index = lazy(() => import("./pages/Index" /* webpackChunkName: "index-page" */));
const JobsPage = lazy(() => import("./pages/JobsPage" /* webpackChunkName: "jobs-page" */));
const JobDetailPage = lazy(() => import("./pages/JobDetailPage" /* webpackChunkName: "job-detail-page" */));
const CompanyPage = lazy(() => import("./pages/CompanyPage" /* webpackChunkName: "company-page" */));
const ApplicationTrackingPage = lazy(() => import("./pages/ApplicationTrackingPage" /* webpackChunkName: "application-tracking-page" */));
const NotFound = lazy(() => import("./pages/NotFound" /* webpackChunkName: "not-found-page" */));

// Improved loading component with better visual feedback
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <Loader2 className="h-10 w-10 animate-spin text-wang-blue" aria-label="กำลังโหลด" />
  </div>
);

// Create QueryClient with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/" component={Index} />
              <Route path="/jobs" component={JobsPage} />
              <Route path="/job/:id" component={JobDetailPage} />
              <Route path="/company/:companySlug" component={CompanyPage} />
              <Route path="/applications" component={ApplicationTrackingPage} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
