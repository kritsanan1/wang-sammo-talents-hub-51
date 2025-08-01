import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  User, 
  Bookmark, 
  Bell, 
  Building, 
  FileText, 
  Package, 
  Settings 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Add scroll detection for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/dbc20659-751f-4e70-9ce3-49e4dc99bc25.png" 
              alt="ที่นี่ วังสามหมอ" 
              className="h-8 md:h-10" 
              loading="eager"
              width="40"
              height="40"
            />
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-prompt font-bold text-wang-blue">ที่นี่ วังสามหมอ</span>
              <span className="text-xs text-gray-500">TOUR DER WANG</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-prompt text-gray-700 hover:text-wang-orange transition-colors ${
                location.pathname === '/' ? 'text-wang-orange font-semibold' : ''
              }`}
            >
              {t('home')}
            </Link>

            <Link 
              to="/jobs" 
              className={`font-prompt text-gray-700 hover:text-wang-orange transition-colors ${
                location.pathname === '/jobs' ? 'text-wang-orange font-semibold' : ''
              }`}
            >
              {t('jobs')}
            </Link>

            {/* Job Seekers Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-prompt text-gray-700 hover:text-wang-orange transition-colors focus:outline-none">
                {t('forJobSeekers')}
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/jobs" className="flex items-center gap-2 w-full px-2 py-2 hover:bg-gray-50">
                    <Search size={16} />
                    {t('searchJobs')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center gap-2 w-full px-2 py-2 hover:bg-gray-50">
                    <User size={16} />
                    {t('myProfile')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/saved-jobs" className="flex items-center gap-2 w-full px-2 py-2 hover:bg-gray-50">
                    <Bookmark size={16} />
                    {t('savedJobs')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/job-alerts" className="flex items-center gap-2 w-full px-2 py-2 hover:bg-gray-50">
                    <Bell size={16} />
                    {t('jobAlerts')}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Employers Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-prompt text-gray-700 hover:text-wang-orange transition-colors focus:outline-none">
                {t('forEmployers')}
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/post-job" className="flex items-center gap-2 w-full px-2 py-2 hover:bg-gray-50">
                    <FileText size={16} />
                    {t('postJobs')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/company-profile" className="flex items-center gap-2 w-full px-2 py-2 hover:bg-gray-50">
                    <Building size={16} />
                    {t('companyProfile')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/pricing" className="flex items-center gap-2 w-full px-2 py-2 hover:bg-gray-50">
                    <Package size={16} />
                    {t('pricingPackages')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/manage-jobs" className="flex items-center gap-2 w-full px-2 py-2 hover:bg-gray-50">
                    <Settings size={16} />
                    {t('manageJobs')}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/about" 
              className="font-prompt text-gray-700 hover:text-wang-orange transition-colors"
            >
              {t('about')}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <LanguageToggle />
            <Button variant="outline" className="font-prompt">
              {t('login')}
            </Button>
            <Button className="bg-wang-orange hover:bg-orange-600 font-prompt">
              {t('postJob')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-prompt text-gray-700 hover:text-wang-orange transition-colors py-2 ${
                  location.pathname === '/' ? 'text-wang-orange font-semibold' : ''
                }`}
              >
                {t('home')}
              </Link>
              
              <Link 
                to="/jobs" 
                className={`font-prompt text-gray-700 hover:text-wang-orange transition-colors py-2 ${
                  location.pathname === '/jobs' ? 'text-wang-orange font-semibold' : ''
                }`}
              >
                {t('jobs')}
              </Link>

              {/* Mobile Job Seekers Section */}
              <div className="py-2">
                <div className="font-prompt text-gray-900 font-semibold mb-2">
                  {t('forJobSeekers')}
                </div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="/jobs" className="flex items-center gap-2 font-prompt text-gray-600 hover:text-wang-orange transition-colors py-1">
                    <Search size={16} />
                    {t('searchJobs')}
                  </Link>
                  <Link to="/profile" className="flex items-center gap-2 font-prompt text-gray-600 hover:text-wang-orange transition-colors py-1">
                    <User size={16} />
                    {t('myProfile')}
                  </Link>
                  <Link to="/saved-jobs" className="flex items-center gap-2 font-prompt text-gray-600 hover:text-wang-orange transition-colors py-1">
                    <Bookmark size={16} />
                    {t('savedJobs')}
                  </Link>
                  <Link to="/job-alerts" className="flex items-center gap-2 font-prompt text-gray-600 hover:text-wang-orange transition-colors py-1">
                    <Bell size={16} />
                    {t('jobAlerts')}
                  </Link>
                </div>
              </div>

              {/* Mobile Employers Section */}
              <div className="py-2">
                <div className="font-prompt text-gray-900 font-semibold mb-2">
                  {t('forEmployers')}
                </div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="/post-job" className="flex items-center gap-2 font-prompt text-gray-600 hover:text-wang-orange transition-colors py-1">
                    <FileText size={16} />
                    {t('postJobs')}
                  </Link>
                  <Link to="/company-profile" className="flex items-center gap-2 font-prompt text-gray-600 hover:text-wang-orange transition-colors py-1">
                    <Building size={16} />
                    {t('companyProfile')}
                  </Link>
                  <Link to="/pricing" className="flex items-center gap-2 font-prompt text-gray-600 hover:text-wang-orange transition-colors py-1">
                    <Package size={16} />
                    {t('pricingPackages')}
                  </Link>
                  <Link to="/manage-jobs" className="flex items-center gap-2 font-prompt text-gray-600 hover:text-wang-orange transition-colors py-1">
                    <Settings size={16} />
                    {t('manageJobs')}
                  </Link>
                </div>
              </div>

              <Link 
                to="/about" 
                className="font-prompt text-gray-700 hover:text-wang-orange transition-colors py-2"
              >
                {t('about')}
              </Link>
            </nav>
            
            <div className="flex flex-col space-y-3 mt-4 pt-4 border-t">
              <div className="flex justify-center">
                <LanguageToggle />
              </div>
              <Button variant="outline" className="font-prompt">
                {t('login')}
              </Button>
              <Button className="bg-wang-orange hover:bg-orange-600 font-prompt">
                {t('postJob')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;