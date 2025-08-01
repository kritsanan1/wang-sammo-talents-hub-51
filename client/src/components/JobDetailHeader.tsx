import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, MapPin, Building, Clock, Bookmark, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Job } from '@/data/jobs';

interface JobDetailHeaderProps {
  job: Job;
}

const JobDetailHeader: React.FC<JobDetailHeaderProps> = ({ job }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <div>
        <Link to="/jobs">
          <Button
            variant="ghost"
            className="mb-4 pl-0 text-muted-foreground hover:text-primary"
            size="sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            กลับไปยังรายการงาน
          </Button>
        </Link>
      </div>

      {/* Job Header */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-4">
              {job.companyLogo && (
                <img 
                  src={job.companyLogo} 
                  alt={job.company}
                  className="w-16 h-16 object-contain rounded-lg border flex-shrink-0"
                />
              )}
              <div className="flex-1">
                <h1 className="font-prompt text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {job.titleThai || job.title}
                </h1>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Building className="h-5 w-5 mr-2" />
                  <span className="text-lg font-medium">{job.company}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                ประกาศเมื่อ {formatDate(job.datePosted)}
              </div>
              {job.salary && (
                <div className="text-wang-blue font-semibold text-lg">
                  {job.salary}
                </div>
              )}
            </div>

            {/* Categories and Type */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-wang-blue text-white">
                {job.employmentType}
              </Badge>
              {job.workType && (
                <Badge variant="outline">
                  {job.workType}
                </Badge>
              )}
              {job.categories.map((category, index) => (
                <Badge key={index} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 md:flex-col">
            <Button size="lg" className="bg-wang-orange hover:bg-orange-600 flex-1 md:flex-none">
              สมัครงาน
            </Button>
            <Button variant="outline" size="lg">
              <Bookmark className="h-4 w-4 mr-2" />
              บันทึก
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="h-4 w-4 mr-2" />
              แชร์
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailHeader;