import { useLocalStorage } from './useLocalStorage';
import { useToast } from './use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Custom hook for managing job bookmarks
 */
export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('wang-bookmarks', []);
  const { toast } = useToast();
  const { t } = useLanguage();

  const isBookmarked = (jobId: string): boolean => {
    return bookmarks.includes(jobId);
  };

  const toggleBookmark = (jobId: string, jobTitle?: string) => {
    const wasBookmarked = isBookmarked(jobId);
    
    if (wasBookmarked) {
      setBookmarks(bookmarks.filter(id => id !== jobId));
      toast({
        title: t('jobUnsaved'),
        description: jobTitle ? `"${jobTitle}"` : '',
        duration: 2000,
      });
    } else {
      setBookmarks([...bookmarks, jobId]);
      toast({
        title: t('jobSaved'),
        description: jobTitle ? `"${jobTitle}"` : '',
        duration: 2000,
      });
    }
  };

  const addBookmark = (jobId: string) => {
    if (!isBookmarked(jobId)) {
      setBookmarks([...bookmarks, jobId]);
    }
  };

  const removeBookmark = (jobId: string) => {
    setBookmarks(bookmarks.filter(id => id !== jobId));
  };

  const clearBookmarks = () => {
    setBookmarks([]);
  };

  return {
    bookmarks,
    isBookmarked,
    toggleBookmark,
    addBookmark,
    removeBookmark,
    clearBookmarks,
  };
};