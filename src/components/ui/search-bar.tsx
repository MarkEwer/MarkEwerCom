'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { SearchIcon, XIcon } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClear: () => void;
  placeholder?: string;
  className?: string;
  query: string;
}

export function SearchBar({ onSearch, onClear, placeholder = "Search blog posts...", className = "", query }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(query);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };
  
  const handleClear = () => {
    setInputValue('');
    onClear();
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10 pr-20 h-12 text-base border-violet-200 focus:border-violet-400 focus:ring-violet-400"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
          {inputValue && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="h-8 px-2 text-gray-400 hover:text-gray-600"
            >
              <XIcon className="h-4 w-4" />
            </Button>
          )}
          <RainbowButton
            type="submit"
            size="sm"
            className="h-8 px-4 text-xs"
          >
            Search
          </RainbowButton>
        </div>
      </div>
    </form>
  );
}
