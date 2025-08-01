import React from 'react';
import { Button } from '@/components/ui/button';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useBookmarks } from '@/hooks/useBookmarks';
import { useLanguage } from '@/contexts/LanguageContext';

interface BookmarkButtonProps {
  jobId: string;
  jobTitle?: string;
  variant?: 'default' | 'icon';
  size?: 'sm' | 'lg';
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ 
  jobId, 
  jobTitle, 
  variant = 'default',
  size = 'sm'
}) => {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { t } = useLanguage();
  const bookmarked = isBookmarked(jobId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(jobId, jobTitle);
  };

  if (variant === 'icon') {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={handleClick}
        className={`p-2 transition-colors ${
          bookmarked 
            ? 'text-wang-orange hover:text-orange-600' 
            : 'text-gray-400 hover:text-wang-orange'
        }`}
        aria-label={bookmarked ? t('saved') : t('save')}
      >
        {bookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
      </Button>
    );
  }

  return (
    <Button
      variant={bookmarked ? 'default' : 'outline'}
      size={size}
      onClick={handleClick}
      className={`gap-2 transition-all ${
        bookmarked 
          ? 'bg-wang-orange hover:bg-orange-600 text-white' 
          : 'border-wang-orange text-wang-orange hover:bg-wang-orange hover:text-white'
      }`}
    >
      {bookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
      {bookmarked ? t('saved') : t('save')}
    </Button>
  );
};

export default BookmarkButton;