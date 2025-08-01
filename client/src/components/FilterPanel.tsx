import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FilterPanelProps {
  selectedCategories: string[];
  selectedTypes: string[];
  onCategoryChange: (category: string, checked: boolean) => void;
  onTypeChange: (type: string, checked: boolean) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedCategories,
  selectedTypes,
  onCategoryChange,
  onTypeChange,
}) => {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [typeOpen, setTypeOpen] = useState(true);

  const categories = [
    'Tourism',
    'Hospitality', 
    'Food',
    'Technology',
    'Marketing',
    'Culture',
    'Education',
    'Service'
  ];

  const employmentTypes = [
    'Full-time',
    'Part-time',
    'Contract',
    'Freelance'
  ];

  const categoryLabels: Record<string, string> = {
    'Tourism': 'ท่องเที่ยว',
    'Hospitality': 'การโรงแรม',
    'Food': 'อาหารและเครื่องดื่ม',
    'Technology': 'เทคโนโลยี',
    'Marketing': 'การตลาด',
    'Culture': 'วัฒนธรรม',
    'Education': 'การศึกษา',
    'Service': 'การบริการ'
  };

  const typeLabels: Record<string, string> = {
    'Full-time': 'เต็มเวลา',
    'Part-time': 'พาร์ทไทม์',
    'Contract': 'สัญญาจ้าง',
    'Freelance': 'อิสระ'
  };

  return (
    <div className="space-y-4">
      {/* Categories Filter */}
      <Card>
        <Collapsible open={categoryOpen} onOpenChange={setCategoryOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-gray-50 pb-3">
              <CardTitle className="text-base font-prompt flex items-center justify-between">
                หมวดหมู่งาน
                <ChevronDown className={`h-4 w-4 transition-transform ${categoryOpen ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => 
                        onCategoryChange(category, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {categoryLabels[category] || category}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Employment Type Filter */}
      <Card>
        <Collapsible open={typeOpen} onOpenChange={setTypeOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-gray-50 pb-3">
              <CardTitle className="text-base font-prompt flex items-center justify-between">
                ประเภทการจ้างงาน
                <ChevronDown className={`h-4 w-4 transition-transform ${typeOpen ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {employmentTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`type-${type}`}
                      checked={selectedTypes.includes(type)}
                      onCheckedChange={(checked) => 
                        onTypeChange(type, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`type-${type}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {typeLabels[type] || type}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
};

export default FilterPanel;