import React from 'react';
import { Bookmark, MapPin, DollarSign, Clock, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

interface JobDetailSidebarProps {
  job: {
    id: string;
    title: string;
    titleThai?: string;
    company: string;
    salary: string;
    employmentType: string;
    location: string;
    workType?: string;
    experience?: string;
    education?: string;
  };
}

const JobDetailSidebar: React.FC<JobDetailSidebarProps> = ({ job }) => {
  const handleSaveJob = () => {
    toast.success("บันทึกงานสำเร็จ", {
      description: `เพิ่ม ${job.titleThai || job.title} เข้าสู่รายการบันทึกแล้ว`,
    });
  };

  const handleApplyJob = () => {
    toast.success("สมัครงานสำเร็จ", {
      description: `ส่งใบสมัคร ${job.titleThai || job.title} เรียบร้อยแล้ว`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Application Card */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-prompt text-lg font-semibold mb-4">สรุปงาน</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-3 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">เงินเดือน</p>
                <p className="text-primary font-semibold">{job.salary}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-3 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">ประเภทงาน</p>
                <p className="font-medium">{job.employmentType}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-3 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">สถานที่ทำงาน</p>
                <p className="font-medium">{job.location}</p>
              </div>
            </div>

            {job.workType && (
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-3 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">รูปแบบงาน</p>
                  <p className="font-medium">{job.workType}</p>
                </div>
              </div>
            )}

            {job.experience && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">ประสบการณ์</p>
                <Badge variant="outline">{job.experience}</Badge>
              </div>
            )}

            {job.education && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">การศึกษา</p>
                <Badge variant="outline">{job.education}</Badge>
              </div>
            )}
          </div>
          
          <div className="mt-6 space-y-3">
            <Button 
              onClick={handleApplyJob} 
              className="w-full bg-primary hover:bg-primary/90"
            >
              สมัครงาน
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSaveJob} 
              className="w-full"
            >
              <Bookmark className="mr-2 h-4 w-4" />
              บันทึกงานนี้
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Company Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="font-prompt text-base">เกี่ยวกับบริษัท</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="font-medium">{job.company}</p>
            <p className="text-sm text-muted-foreground">
              ดูข้อมูลเพิ่มเติมเกี่ยวกับบริษัทและตำแหน่งงานอื่นๆ
            </p>
            <Link to={`/company/${job.company.toLowerCase().replace(/\s+/g, '-')}`}>
              <Button variant="outline" size="sm" className="w-full">
                ดูโปรไฟล์บริษัท
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Share Card */}
      <Card>
        <CardHeader>
          <CardTitle className="font-prompt text-base">แชร์ตำแหน่งงานนี้</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">Facebook</Button>
            <Button variant="outline" size="sm">LINE</Button>
            <Button variant="outline" size="sm">อีเมล</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetailSidebar;