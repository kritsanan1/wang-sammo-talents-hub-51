import React from 'react';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

interface JobDetailHeaderProps {
  job: {
    id: string;
    title: string;
    titleThai?: string;
    company: string;
    location: string;
    categories: string[];
    employmentType: string;
    datePosted: string;
    companyLogo?: string;
  };
}

const JobDetailHeader: React.FC<JobDetailHeaderProps> = ({ job }) => {
  const navigate = useNavigate();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job.titleThai || job.title,
        text: `ตำแหน่งงาน ${job.titleThai || job.title} ที่ ${job.company}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="pl-0 text-muted-foreground hover:text-primary"
          size="sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          ย้อนกลับ
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleShare}
          className="hidden sm:flex"
        >
          <Share2 className="mr-2 h-4 w-4" />
          แชร์
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div className="mb-4 sm:mb-0 sm:mr-4 flex-1">
          <h1 className="font-prompt text-2xl md:text-3xl font-bold text-foreground mb-2">
            {job.titleThai || job.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            {job.company}
          </p>
          <p className="text-muted-foreground mb-4">
            {job.location}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {job.categories.map((category) => (
              <Badge key={category} variant="outline" className="bg-blue-50 text-primary border-blue-200">
                {category}
              </Badge>
            ))}
            <Badge variant="secondary">
              {job.employmentType}
            </Badge>
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            <span>เผยแพร่เมื่อ {new Date(job.datePosted).toLocaleDateString('th-TH')}</span>
          </div>
        </div>
        
        {job.companyLogo && (
          <div className="flex-shrink-0">
            <img 
              src={job.companyLogo} 
              alt={job.company} 
              className="w-16 h-16 sm:w-24 sm:h-24 object-contain rounded-lg border" 
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetailHeader;