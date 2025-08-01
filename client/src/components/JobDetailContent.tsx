import React from 'react';
import { Check, MapPin, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface JobDetailContentProps {
  job: {
    description: string;
    descriptionThai?: string;
    requirements: string[];
    salary: string;
    benefits?: string[];
    skills?: string[];
  };
}

const JobDetailContent: React.FC<JobDetailContentProps> = ({ job }) => {
  return (
    <div className="space-y-8">
      {/* Job Description */}
      <Card>
        <CardHeader>
          <CardTitle className="font-prompt text-lg">รายละเอียดงาน</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>{job.descriptionThai || job.description}</p>
          </div>
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="font-prompt text-lg">คุณสมบัติที่ต้องการ</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
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
            <CardTitle className="font-prompt text-lg">ทักษะที่ต้องการ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50">
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
            <CardTitle className="font-prompt text-lg">สวัสดิการ</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 mr-3 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default JobDetailContent;