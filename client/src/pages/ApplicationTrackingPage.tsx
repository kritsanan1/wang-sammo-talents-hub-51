import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Calendar, CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: 'pending' | 'reviewing' | 'interview' | 'accepted' | 'rejected';
  lastUpdate: string;
  notes?: string;
}

const ApplicationTrackingPage = () => {
  const [applications] = useState<Application[]>([
    {
      id: '1',
      jobTitle: 'Frontend Developer',
      company: 'Tech Solutions Co.',
      appliedDate: '2024-01-15',
      status: 'interview',
      lastUpdate: '2024-01-20',
      notes: 'สัมภาษณ์รอบแรกผ่านแล้ว รอการนัดสัมภาษณ์รอบสอง'
    },
    {
      id: '2',
      jobTitle: 'UX/UI Designer',
      company: 'Creative Agency',
      appliedDate: '2024-01-10',
      status: 'reviewing',
      lastUpdate: '2024-01-18',
    },
    {
      id: '3',
      jobTitle: 'Full Stack Developer',
      company: 'Startup Hub',
      appliedDate: '2024-01-05',
      status: 'accepted',
      lastUpdate: '2024-01-22',
      notes: 'ได้รับการตอบรับแล้ว! เริ่มงานวันที่ 1 กุมภาพันธ์'
    },
    {
      id: '4',
      jobTitle: 'Backend Developer',
      company: 'Enterprise Corp',
      appliedDate: '2024-01-01',
      status: 'rejected',
      lastUpdate: '2024-01-12',
      notes: 'ไม่ผ่านการคัดเลือก ขอบคุณสำหรับความสนใจ'
    },
    {
      id: '5',
      jobTitle: 'Product Manager',
      company: 'Innovation Labs',
      appliedDate: '2024-01-20',
      status: 'pending',
      lastUpdate: '2024-01-20',
    }
  ]);

  const getStatusBadge = (status: Application['status']) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200"><Clock className="h-3 w-3 mr-1" />รอตรวจสอบ</Badge>;
      case 'reviewing':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200"><Eye className="h-3 w-3 mr-1" />กำลังพิจารณา</Badge>;
      case 'interview':
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200"><AlertCircle className="h-3 w-3 mr-1" />สัมภาษณ์</Badge>;
      case 'accepted':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200"><CheckCircle className="h-3 w-3 mr-1" />ตอบรับ</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200"><XCircle className="h-3 w-3 mr-1" />ปฏิเสธ</Badge>;
      default:
        return <Badge variant="outline">ไม่ทราบสถานะ</Badge>;
    }
  };

  const filterApplications = (status?: Application['status']) => {
    if (!status) return applications;
    return applications.filter(app => app.status === status);
  };

  const getStatusCount = (status: Application['status']) => {
    return applications.filter(app => app.status === status).length;
  };

  const ApplicationList = ({ apps }: { apps: Application[] }) => (
    <div className="space-y-4">
      {apps.map(app => (
        <Card key={app.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="mb-2 sm:mb-0">
                <h3 className="font-prompt text-lg font-semibold text-foreground">
                  {app.jobTitle}
                </h3>
                <p className="text-muted-foreground">{app.company}</p>
              </div>
              {getStatusBadge(app.status)}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                สมัครเมื่อ: {new Date(app.appliedDate).toLocaleDateString('th-TH')}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                อัปเดตล่าสุด: {new Date(app.lastUpdate).toLocaleDateString('th-TH')}
              </div>
            </div>
            
            {app.notes && (
              <div className="bg-muted p-3 rounded-md mb-4">
                <p className="text-sm">{app.notes}</p>
              </div>
            )}
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                ดูรายละเอียด
              </Button>
              {app.status === 'interview' && (
                <Button size="sm" className="bg-primary">
                  นัดสัมภาษณ์
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
      
      {apps.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">ไม่มีใบสมัครในหมวดนี้</p>
        </div>
      )}
    </div>
  );

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
          
          <h1 className="font-prompt text-2xl md:text-3xl font-bold mb-2">
            ติดตามใบสมัครงาน
          </h1>
          <p className="text-muted-foreground">
            ตรวจสอบสถานะการสมัครงานของคุณ
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{applications.length}</div>
              <div className="text-sm text-muted-foreground">ทั้งหมด</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{getStatusCount('pending')}</div>
              <div className="text-sm text-muted-foreground">รอตรวจสอบ</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{getStatusCount('reviewing')}</div>
              <div className="text-sm text-muted-foreground">กำลังพิจารณา</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{getStatusCount('interview')}</div>
              <div className="text-sm text-muted-foreground">สัมภาษณ์</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{getStatusCount('accepted')}</div>
              <div className="text-sm text-muted-foreground">ตอบรับ</div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
                <TabsTrigger value="pending">รอตรวจสอบ</TabsTrigger>
                <TabsTrigger value="reviewing">กำลังพิจารณา</TabsTrigger>
                <TabsTrigger value="interview">สัมภาษณ์</TabsTrigger>
                <TabsTrigger value="accepted">ตอบรับ</TabsTrigger>
                <TabsTrigger value="rejected">ปฏิเสธ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <ApplicationList apps={applications} />
              </TabsContent>
              
              <TabsContent value="pending" className="mt-6">
                <ApplicationList apps={filterApplications('pending')} />
              </TabsContent>
              
              <TabsContent value="reviewing" className="mt-6">
                <ApplicationList apps={filterApplications('reviewing')} />
              </TabsContent>
              
              <TabsContent value="interview" className="mt-6">
                <ApplicationList apps={filterApplications('interview')} />
              </TabsContent>
              
              <TabsContent value="accepted" className="mt-6">
                <ApplicationList apps={filterApplications('accepted')} />
              </TabsContent>
              
              <TabsContent value="rejected" className="mt-6">
                <ApplicationList apps={filterApplications('rejected')} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default ApplicationTrackingPage;