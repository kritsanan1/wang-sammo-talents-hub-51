import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const JobCardSkeleton: React.FC = () => {
  return (
    <Card className="h-full overflow-hidden border border-gray-200">
      <CardContent className="p-3 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <Skeleton className="h-5 sm:h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-1" />
            <Skeleton className="h-3 w-2/3" />
          </div>
          <Skeleton className="w-9 h-9 sm:w-12 sm:h-12 rounded" />
        </div>
        
        <div className="mt-2 sm:mt-3 mb-2 sm:mb-3 flex gap-1 sm:gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
        </div>
        
        <div className="flex items-center justify-between mt-2 sm:mt-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-16" />
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 px-3 sm:px-5 py-2">
        <Skeleton className="h-3 w-32" />
      </CardFooter>
    </Card>
  );
};

export default JobCardSkeleton;