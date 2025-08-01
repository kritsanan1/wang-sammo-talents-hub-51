import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'th' ? 'en' : 'th');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-prompt text-sm gap-1 hover:bg-gray-100 transition-colors"
      aria-label={`Switch to ${language === 'th' ? 'English' : 'Thai'}`}
    >
      <Globe size={16} />
      {language === 'th' ? 'EN' : 'ไทย'}
    </Button>
  );
};

export default LanguageToggle;