import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (term: string) => void;
  initialValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialValue = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="ค้นหาตำแหน่งงาน, บริษัท หรือสถานที่..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 text-base border-0 bg-white shadow-md rounded-l-lg focus:ring-2 focus:ring-wang-blue"
          />
        </div>
        <Button 
          type="submit"
          className="bg-wang-orange hover:bg-orange-600 text-white px-6 py-3 rounded-r-lg shadow-md"
        >
          <Search className="h-5 w-5 md:hidden" />
          <span className="hidden md:inline">ค้นหา</span>
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;