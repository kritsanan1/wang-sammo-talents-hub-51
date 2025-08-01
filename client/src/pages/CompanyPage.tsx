import React from 'react';
import { useParams } from 'wouter';
import { Link } from 'wouter';
import { ArrowLeft, MapPin, Users, Calendar, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobCard from '@/components/JobCard';
import { jobs } from '@/data/jobs';

const CompanyPage = () => {
  const { companySlug } = useParams<{ companySlug: string }>();
  
  // Convert slug back to company name (simple implementation)
  const companyName = companySlug?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || '';
  
  // Find all jobs from this company
  const companyJobs = jobs.filter(job => 
    job.company.toLowerCase().replace(/\s+/g, '-') === companySlug
  );

  // Get company info from the first job (in real app, this would come from a companies API)
  const companyInfo = companyJobs[0];

  if (!companyInfo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="font-prompt text-xl sm:text-2xl font-semibold mb-4">ไม่พบข้อมูลบริษัท</h1>
            <p className="text-muted-foreground mb-6">อาจไม่มีตำแหน่งงานเปิดรับในขณะนี้</p>
            <Link to="/jobs">
              <Button>ดูงานทั้งหมด</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Mock company data (in real app, this would come from API)
  const company = {
    name: companyInfo.company,
    logo: companyInfo.companyLogo,
    description: `${companyInfo.company} เป็นบริษัทชั้นนำที่มุ่งมั่นในการสร้างสรรค์นวัตกรรมและพัฒนาบุคลากรให้เติบโตไปพร้อมกับองค์กร`,
    location: companyInfo.location,
    founded: '2010',
    employees: '500-1000',
    industry: companyInfo.categories[0] || 'เทคโนโลยี',
    website: 'https://example.com',
    culture: [
      'สนับสนุนการเรียนรู้และพัฒนาอย่างต่อเนื่อง',
      'สภาพแวดล้อมการทำงานที่เป็นมิตร',
      'ความสมดุลระหว่างการทำงานและชีวิตส่วนตัว',
      'โอกาสในการเติบโตและก้าวหน้าในสายอาชีพ'
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-6 md:py-8 flex-grow">
        <div className="mb-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  {company.logo && (
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="w-20 h-20 object-contain rounded-lg border"
                    />
                  )}
                  <div className="flex-1">
                    <h1 className="font-prompt text-2xl md:text-3xl font-bold mb-2">
                      {company.name}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {company.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {company.employees} พนักงาน
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        ก่อตั้งปี {company.founded}
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4">
                      {company.industry}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Description */}
            <Card>
              <CardHeader>
                <CardTitle className="font-prompt">เกี่ยวกับบริษัท</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {company.description}
                </p>
              </CardContent>
            </Card>

            {/* Company Culture */}
            <Card>
              <CardHeader>
                <CardTitle className="font-prompt">วัฒนธรรมองค์กร</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {company.culture.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Open Positions */}
            <Card>
              <CardHeader>
                <CardTitle className="font-prompt">
                  ตำแหน่งงานที่เปิดรับ ({companyJobs.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {companyJobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-prompt text-base">ข้อมูลติดต่อ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">เว็บไซต์</p>
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    เยี่ยมชมเว็บไซต์
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">สถานที่ตั้ง</p>
                  <p className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {company.location}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-prompt text-base">สถิติบริษัท</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ตำแหน่งงานเปิด</span>
                  <span className="font-semibold">{companyJobs.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">จำนวนพนักงาน</span>
                  <span className="font-semibold">{company.employees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ปีที่ก่อตั้ง</span>
                  <span className="font-semibold">{company.founded}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CompanyPage;