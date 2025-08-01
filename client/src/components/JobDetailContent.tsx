import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Award, GraduationCap } from 'lucide-react';
import { Job } from '@/data/jobs';

interface JobDetailContentProps {
  job: Job;
}

const JobDetailContent: React.FC<JobDetailContentProps> = ({ job }) => {
  return (
    <div className="space-y-6">
      {/* Job Description */}
      <Card>
        <CardHeader>
          <CardTitle className="font-prompt flex items-center">
            <Star className="h-5 w-5 mr-2 text-wang-blue" />
            รายละเอียดงาน
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {job.description}
          </p>
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="font-prompt flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
            คุณสมบัติที่ต้องการ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{requirement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Skills */}
      {job.skills && job.skills.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="font-prompt flex items-center">
              <Award className="h-5 w-5 mr-2 text-purple-600" />
              ทักษะที่ต้องการ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Benefits */}
      {job.benefits && job.benefits.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="font-prompt flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
              สวัสดิการและผลประโยชน์
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Additional Info */}
      <Card>
        <CardHeader>
          <CardTitle className="font-prompt">ข้อมูลเพิ่มเติม</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {job.experience && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">ประสบการณ์ที่ต้องการ</p>
                <p className="font-medium">{job.experience}</p>
              </div>
            )}
            {job.education && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">การศึกษา</p>
                <p className="font-medium">{job.education}</p>
              </div>
            )}
            {job.workType && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">รูปแบบการทำงาน</p>
                <p className="font-medium">{job.workType}</p>
              </div>
            )}
            <div>
              <p className="text-sm text-muted-foreground mb-1">ประเภทการจ้างงาน</p>
              <p className="font-medium">{job.employmentType}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetailContent;