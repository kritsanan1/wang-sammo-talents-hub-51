import React from 'react';
import { Link } from 'wouter';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-wang-blue text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold">
              W
            </div>
            <span className="font-prompt text-xl font-bold text-gray-900">
              วังสามหมอ Jobs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-wang-blue transition-colors">
              หน้าแรก
            </Link>
            <Link to="/jobs" className="text-gray-600 hover:text-wang-blue transition-colors">
              ค้นหางาน
            </Link>
            <Link to="/applications" className="text-gray-600 hover:text-wang-blue transition-colors">
              ติดตามใบสมัคร
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              เข้าสู่ระบบ
            </Button>
            <Button size="sm" className="bg-wang-orange hover:bg-orange-600">
              ลงประกาศงาน
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-wang-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                หน้าแรก
              </Link>
              <Link 
                to="/jobs" 
                className="text-gray-600 hover:text-wang-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ค้นหางาน
              </Link>
              <Link 
                to="/applications" 
                className="text-gray-600 hover:text-wang-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ติดตามใบสมัคร
              </Link>
              <div className="pt-4 border-t">
                <Button variant="outline" size="sm" className="w-full mb-2">
                  <User className="h-4 w-4 mr-2" />
                  เข้าสู่ระบบ
                </Button>
                <Button size="sm" className="w-full bg-wang-orange hover:bg-orange-600">
                  ลงประกาศงาน
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;