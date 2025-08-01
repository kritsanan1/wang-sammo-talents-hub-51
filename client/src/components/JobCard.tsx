import React from 'react';
import { Link } from 'wouter';
import { MapPin, Clock, Building, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Job } from '@/data/jobs';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'วันนี้';
    if (diffDays === 1) return 'เมื่อวาน';
    if (diffDays < 7) return `${diffDays} วันที่ผ่านมา`;
    return `${Math.floor(diffDays / 7)} สัปดาห์ที่ผ่านมา`;
  };

  return (
    <Link to={`/job/${job.id}`}>
      <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer group h-full">
        <CardContent className="p-4">
          {/* Header with Company Logo and Hot Badge */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              {job.companyLogo && (
                <img 
                  src={job.companyLogo} 
                  alt={job.company}
                  className="w-12 h-12 object-contain rounded-lg border"
                />
              )}
              <div className="flex-1">
                <h3 className="font-prompt text-base font-semibold text-gray-900 group-hover:text-wang-blue transition-colors line-clamp-2">
                  {job.titleThai || job.title}
                </h3>
                <p className="text-sm text-gray-600 flex items-center">
                  <Building className="h-3 w-3 mr-1" />
                  {job.company}
                </p>
              </div>
            </div>
            {job.isHot && (
              <Badge variant="destructive" className="bg-red-500 text-white text-xs">
                <Flame className="h-3 w-3 mr-1" />
                Hot
              </Badge>
            )}
          </div>

          {/* Location and Salary */}
          <div className="space-y-2 mb-3">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              {job.location}
            </div>
            {job.salary && (
              <div className="text-sm font-medium text-wang-blue">
                {job.salary}
              </div>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-1 mb-3">
            {job.categories.slice(0, 2).map((category, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>

          {/* Employment Type and Date */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded">
              {job.employmentType}
            </span>
            <span className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {formatDate(job.datePosted)}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default JobCard;