
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobDetailHeader from '@/components/JobDetailHeader';
import JobDetailContent from '@/components/JobDetailContent';
import JobDetailSidebar from '@/components/JobDetailSidebar';
import RelatedJobs from '@/components/RelatedJobs';
import { jobs } from '@/data/jobs';

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find job by ID with enhanced data
  const job = jobs.find(job => job.id === id);
  
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="font-prompt text-xl sm:text-2xl font-semibold mb-4">ไม่พบประกาศงาน</h1>
            <p className="text-muted-foreground mb-6">อาจถูกลบหรือเปลี่ยนแปลงแล้ว</p>
            <Button onClick={() => navigate(-1)}>กลับไปยังหน้าก่อนหน้า</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Enhanced job data with additional fields
  const enhancedJob = {
    ...job,
    workType: job.workType || 'On-site',
    experience: job.experience || '1-3 ปี',
    education: job.education || 'ปริญญาตรี',
    skills: job.skills || ['JavaScript', 'React', 'TypeScript'],
    benefits: job.benefits || [
      'ประกันสุขภาพ',
      'โบนัสประจำปี', 
      'วันหยุดพักผ่อน',
      'โอกาสเติบโตในสายอาชีพ'
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-6 md:py-8 flex-grow">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <JobDetailHeader job={enhancedJob} />
            <Separator className="my-6" />
            <JobDetailContent job={enhancedJob} />
            <RelatedJobs 
              currentJobId={enhancedJob.id} 
              categories={enhancedJob.categories} 
              company={enhancedJob.company} 
            />
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24">
              <JobDetailSidebar job={enhancedJob} />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default JobDetailPage;
