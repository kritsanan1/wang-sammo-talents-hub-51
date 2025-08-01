
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Job } from '@/data/jobs';
import { useLanguage } from '@/contexts/LanguageContext';
import BookmarkButton from './BookmarkButton';
import { MapPin, Building, Calendar } from 'lucide-react';

interface JobCardProps {
  job: Job;
  compact?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, compact = false }) => {
  const { t, language } = useLanguage();
  
  const jobTitle = language === 'th' ? (job.titleThai || job.title) : job.title;
  const jobDescription = language === 'th' ? (job.descriptionThai || job.description) : job.description;

  return (
    <div className="block h-full group">
      <Card className="h-full job-card overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300 relative">
        {/* Hot job indicator with enhanced styling */}
        {job.isHot && (
          <div className="status-hot bg-gradient-to-r from-wang-orange to-orange-500 text-white text-xs font-prompt py-1.5 px-3 text-center relative">
            {t('hotJobs')}
          </div>
        )}
        
        {/* Bookmark button */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <BookmarkButton 
            jobId={job.id} 
            jobTitle={jobTitle}
            variant="icon"
          />
        </div>

        <Link 
          to={`/job/${job.id}`} 
          className="block h-full"
          aria-label={`${t('viewDetails')} ${jobTitle} ${t('at')} ${job.company}`}
        >
          <CardContent className="p-3 sm:p-5">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="font-prompt text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-wang-blue transition-colors">
                  {jobTitle}
                </h3>
                
                <div className="space-y-1 mb-3">
                  <p className="text-gray-600 flex items-center gap-1 text-sm sm:text-base">
                    <Building size={14} className="text-gray-400 flex-shrink-0" />
                    <span className="truncate">{job.company}</span>
                  </p>
                  <p className="text-gray-500 flex items-center gap-1 text-xs sm:text-sm">
                    <MapPin size={12} className="text-gray-400 flex-shrink-0" />
                    <span className="truncate">{job.location}</span>
                  </p>
                </div>
              </div>
              
              {job.companyLogo && (
                <div className="flex-shrink-0">
                  <img 
                    src={job.companyLogo} 
                    alt={`${job.company} logo`}
                    loading="lazy"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg" 
                  />
                </div>
              )}
            </div>
            
            {/* Categories with enhanced styling */}
            <div className="mb-4 flex flex-wrap gap-1.5">
              {job.categories.slice(0, 2).map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="bg-blue-50 text-wang-blue border-blue-200 text-xs whitespace-nowrap hover:bg-blue-100 transition-colors"
                >
                  {category}
                </Badge>
              ))}
              {job.categories.length > 2 && (
                <Badge 
                  variant="outline" 
                  className="bg-blue-50 text-wang-blue border-blue-200 text-xs"
                >
                  +{job.categories.length - 2}
                </Badge>
              )}
            </div>
            
            {/* Salary and employment type */}
            <div className="flex items-center justify-between">
              <div className="text-wang-blue font-semibold text-sm sm:text-base">
                {job.salary}
              </div>
              <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 text-xs font-medium">
                {job.employmentType}
              </Badge>
            </div>
          </CardContent>
          
          <CardFooter className="border-t bg-gradient-to-r from-gray-50 to-gray-100 px-3 sm:px-5 py-2.5 text-xs text-gray-500 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Calendar size={12} className="text-gray-400" />
              <span className="truncate">
                {t('postedDate')}: {new Date(job.datePosted).toLocaleDateString(language === 'th' ? 'th-TH' : 'en-US')}
              </span>
            </div>
            <span className="text-wang-blue font-prompt font-medium group-hover:text-wang-orange transition-colors">
              {t('viewDetails')} →
            </span>
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
};

export default JobCard;
