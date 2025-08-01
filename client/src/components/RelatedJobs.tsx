import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import JobCard from '@/components/JobCard';
import { jobs } from '@/data/jobs';

interface RelatedJobsProps {
  currentJobId: string;
  categories: string[];
  company: string;
}

const RelatedJobs: React.FC<RelatedJobsProps> = ({ currentJobId, categories, company }) => {
  // Find related jobs based on categories or company, excluding current job
  const relatedJobs = jobs
    .filter(job => {
      if (job.id === currentJobId) return false;
      
      // Prioritize jobs from same company
      if (job.company === company) return true;
      
      // Then jobs with similar categories
      return job.categories.some(category => categories.includes(category));
    })
    .slice(0, 3); // Limit to 3 related jobs

  if (relatedJobs.length === 0) {
    return null;
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="font-prompt text-xl">งานที่คุณอาจสนใจ</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedJobs;