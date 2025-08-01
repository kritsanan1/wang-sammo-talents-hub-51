import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export type Language = 'th' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  th: {
    // Navigation
    home: 'หน้าหลัก',
    jobs: 'ค้นหางาน',
    companies: 'บริษัท',
    about: 'เกี่ยวกับเรา',
    login: 'เข้าสู่ระบบ',
    postJob: 'ลงประกาศงาน',
    
    // Job Seeker Navigation
    forJobSeekers: 'สำหรับคนหางาน',
    searchJobs: 'ค้นหางาน',
    myProfile: 'โปรไฟล์ของฉัน',
    savedJobs: 'งานที่บันทึกไว้',
    jobAlerts: 'แจ้งเตือนงาน',
    
    // Employer Navigation
    forEmployers: 'สำหรับผู้ประกอบการ',
    postJobs: 'ลงประกาศงาน',
    companyProfile: 'โปรไฟล์บริษัท',
    pricingPackages: 'ราคาและแพ็คเกจ',
    manageJobs: 'จัดการประกาศงาน',
    
    // Footer Navigation
    contactUs: 'ติดต่อเรา',
    privacyPolicy: 'นโยบายความเป็นส่วนตัว',
    termsOfUse: 'ข้อกำหนดการใช้งาน',
    
    // Search and filters
    searchPlaceholder: 'ค้นหาตำแหน่งงาน, บริษัท หรือคำสำคัญ...',
    search: 'ค้นหา',
    filter: 'ตัวกรอง',
    category: 'หมวดหมู่งาน',
    jobType: 'ประเภทงาน',
    applyFilter: 'ยืนยันตัวกรอง',
    
    // Job listings
    hotJobs: 'งานยอดนิยม',
    recentJobs: 'งานล่าสุด',
    searchResults: 'ผลการค้นหา',
    jobsFound: 'พบ',
    positions: 'ตำแหน่งงาน',
    noJobsFound: 'ไม่พบตำแหน่งงานที่ตรงกับเงื่อนไข',
    noJobsFoundDesc: 'ลองเปลี่ยนคำค้นหาหรือตัวกรองเพื่อดูผลลัพธ์เพิ่มเติม',
    viewAll: 'ดูทั้งหมด',
    viewDetails: 'ดูรายละเอียด',
    apply: 'สมัครงาน',
    save: 'บันทึก',
    saved: 'บันทึกแล้ว',
    
    // Job details
    postedDate: 'เผยแพร่เมื่อ',
    salary: 'เงินเดือน',
    location: 'สถานที่',
    employmentType: 'ประเภทการจ้างงาน',
    requirements: 'คุณสมบัติ',
    description: 'รายละเอียดงาน',
    
    // Hero section
    heroTitle: 'ค้นหาตำแหน่งงานในวังสามหมอ',
    heroDescription: 'แหล่งรวมตำแหน่งงานในท้องถิ่นทั้งหมดสำหรับผู้ที่ต้องการทำงานในภาคการท่องเที่ยวและการบริการ',
    popularCategories: 'ยอดนิยม',
    
    // CTA
    wantToPostJob: 'ต้องการประกาศรับสมัครพนักงาน?',
    ctaDescription: 'เข้าถึงผู้สมัครงานที่มีคุณภาพในพื้นที่วังสามหมอ เพิ่มโอกาสในการได้พนักงานที่เหมาะสมกับธุรกิจของคุณ',
    
    // Categories
    tourism: 'ท่องเที่ยว',
    hospitality: 'การโรงแรม',
    foodBeverage: 'อาหารและเครื่องดื่ม',
    
    // Toast messages
    jobSaved: 'บันทึกงานเรียบร้อยแล้ว',
    jobUnsaved: 'ยกเลิกการบันทึกงานแล้ว',
    copySuccess: 'คัดลอกลิงก์เรียบร้อยแล้ว',
    
    // Additional
    at: 'ที่',
  },
  en: {
    // Navigation
    home: 'Home',
    jobs: 'Search Jobs',
    companies: 'Companies',
    about: 'About Us',
    login: 'Login',
    postJob: 'Post a Job',
    
    // Job Seeker Navigation
    forJobSeekers: 'For Job Seekers',
    searchJobs: 'Search Jobs',
    myProfile: 'My Profile',
    savedJobs: 'Saved Jobs',
    jobAlerts: 'Job Alerts',
    
    // Employer Navigation
    forEmployers: 'For Employers',
    postJobs: 'Post Jobs',
    companyProfile: 'Company Profile',
    pricingPackages: 'Pricing & Packages',
    manageJobs: 'Manage Job Posts',
    
    // Footer Navigation
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use',
    
    // Search and filters
    searchPlaceholder: 'Search for jobs, companies, or keywords...',
    search: 'Search',
    filter: 'Filter',
    category: 'Job Category',
    jobType: 'Job Type',
    applyFilter: 'Apply Filter',
    
    // Job listings
    hotJobs: 'Hot Jobs',
    recentJobs: 'Recent Jobs',
    searchResults: 'Search Results',
    jobsFound: 'Found',
    positions: 'positions',
    noJobsFound: 'No jobs found matching your criteria',
    noJobsFoundDesc: 'Try adjusting your search terms or filters to see more results',
    viewAll: 'View All',
    viewDetails: 'View Details',
    apply: 'Apply Now',
    save: 'Save',
    saved: 'Saved',
    
    // Job details
    postedDate: 'Posted',
    salary: 'Salary',
    location: 'Location',
    employmentType: 'Employment Type',
    requirements: 'Requirements',
    description: 'Job Description',
    
    // Hero section
    heroTitle: 'Find Jobs in Wang Sam Mo',
    heroDescription: 'Your comprehensive source for local employment opportunities in tourism and hospitality sectors',
    popularCategories: 'Popular',
    
    // CTA
    wantToPostJob: 'Want to Post a Job?',
    ctaDescription: 'Reach qualified job seekers in Wang Sam Mo area. Increase your chances of finding the right employees for your business',
    
    // Categories
    tourism: 'Tourism',
    hospitality: 'Hospitality',
    foodBeverage: 'Food & Beverage',
    
    // Toast messages
    jobSaved: 'Job saved successfully',
    jobUnsaved: 'Job unsaved successfully',
    copySuccess: 'Link copied to clipboard',
    
    // Additional
    at: 'at',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useLocalStorage<Language>('wang-language', 'th');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};