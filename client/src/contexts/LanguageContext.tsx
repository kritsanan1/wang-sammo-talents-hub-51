import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'th' | 'en';
  setLanguage: (lang: 'th' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  th: {
    'nav.home': 'หน้าแรก',
    'nav.jobs': 'ค้นหางาน',
    'nav.applications': 'ติดตามใบสมัคร',
    'nav.login': 'เข้าสู่ระบบ',
    'nav.post_job': 'ลงประกาศงาน',
    'search.placeholder': 'ค้นหาตำแหน่งงาน, บริษัท หรือสถานที่...',
    'search.button': 'ค้นหา',
    'job.apply': 'สมัครงาน',
    'job.save': 'บันทึก',
    'job.share': 'แชร์',
    'loading': 'กำลังโหลด'
  },
  en: {
    'nav.home': 'Home',
    'nav.jobs': 'Find Jobs',
    'nav.applications': 'Track Applications',
    'nav.login': 'Login',
    'nav.post_job': 'Post Job',
    'search.placeholder': 'Search for jobs, companies or locations...',
    'search.button': 'Search',
    'job.apply': 'Apply',
    'job.save': 'Save',
    'job.share': 'Share',
    'loading': 'Loading'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'th' | 'en'>('th');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;