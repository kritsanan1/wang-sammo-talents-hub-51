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
  // Find related jobs based on categories or company
  const relatedJobs = jobs
    .filter(job => job.id !== currentJobId)
    .filter(job => 
      job.company === company || 
      job.categories.some(cat => categories.includes(cat))
    )
    .slice(0, 4); // Show only 4 related jobs

  if (relatedJobs.length === 0) {
    return null;
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="font-prompt text-lg">งานที่เกี่ยวข้อง</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedJobs.map(job => (
            <JobCard key={job.id} job={job} compact />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedJobs;