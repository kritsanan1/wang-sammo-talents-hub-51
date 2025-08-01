import React from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Users, Calendar, Globe, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { Job } from '@/data/jobs';

interface JobDetailSidebarProps {
  job: Job;
}

const JobDetailSidebar: React.FC<JobDetailSidebarProps> = ({ job }) => {
  const handleApply = () => {
    toast.success('ใบสมัครของคุณได้รับการส่งเรียบร้อยแล้ว!');
  };

  const handleSave = () => {
    toast.success('บันทึกงานเรียบร้อยแล้ว!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: job.titleThai || job.title,
        text: `ตำแหน่งงาน: ${job.titleThai || job.title} ที่ ${job.company}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('คัดลอกลิงก์เรียบร้อยแล้ว!');
    }
  };

  // Convert company name to slug for company page
  const companySlug = job.company.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-6">
      {/* Quick Apply */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="w-full bg-wang-orange hover:bg-orange-600"
              onClick={handleApply}
            >
              สมัครงานตำแหน่งนี้
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={handleSave}
              >
                บันทึกงาน
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={handleShare}
              >
                แชร์งาน
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Company Info */}
      <Card>
        <CardHeader>
          <CardTitle className="font-prompt text-lg">เกี่ยวกับบริษัท</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            {job.companyLogo && (
              <img 
                src={job.companyLogo} 
                alt={job.company}
                className="w-12 h-12 object-contain rounded-lg border"
              />
            )}
            <div>
              <h3 className="font-prompt font-semibold">{job.company}</h3>
              <p className="text-sm text-muted-foreground">บริษัท</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-sm">
              <Building className="h-4 w-4 mr-3 text-muted-foreground" />
              <span>บริษัทในหมวด {job.categories[0]}</span>
            </div>
            <div className="flex items-center text-sm">
              <Users className="h-4 w-4 mr-3 text-muted-foreground" />
              <span>50-200 พนักงาน</span>
            </div>
          </div>

          <Link to={`/company/${companySlug}`}>
            <Button variant="outline" size="sm" className="w-full">
              ดูข้อมูลบริษัท
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Job Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="font-prompt text-lg">หมวดหมู่งาน</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {job.categories.map((category, index) => (
              <Link key={index} to={`/jobs?category=${category}`}>
                <Badge 
                  variant="outline" 
                  className="cursor-pointer hover:bg-wang-blue hover:text-white transition-colors"
                >
                  {category}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card>
        <CardHeader>
          <CardTitle className="font-prompt text-lg">ข้อมูลติดต่อ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center text-sm">
            <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
            <span>hr@{job.company.toLowerCase().replace(/\s+/g, '')}.com</span>
          </div>
          <div className="flex items-center text-sm">
            <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
            <span>02-XXX-XXXX</span>
          </div>
          <div className="flex items-center text-sm">
            <Globe className="h-4 w-4 mr-3 text-muted-foreground" />
            <span>www.{job.company.toLowerCase().replace(/\s+/g, '')}.com</span>
          </div>
        </CardContent>
      </Card>

      {/* Application Deadline */}
      <Card>
        <CardHeader>
          <CardTitle className="font-prompt text-lg">กำหนดเวลา</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
            <div>
              <p className="font-medium">เปิดรับสมัครถึง</p>
              <p className="text-muted-foreground">31 มกราคม 2567</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetailSidebar;