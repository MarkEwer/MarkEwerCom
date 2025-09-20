'use client';

import { SearchResult } from '@/lib/search';
import { Badge } from '@/components/ui/badge';

interface SearchResultsInfoProps {
  query: string;
  results: SearchResult[];
  isSearchActive: boolean;
}

export function SearchResultsInfo({ query, results, isSearchActive }: SearchResultsInfoProps) {
  if (!isSearchActive) {
    return (
      <div className="mb-6 text-gray-600">
        Showing all {results.length} blog posts
      </div>
    );
  }
  
  const resultsWithMatches = results.filter(result => result.score > 0);
  
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-gray-600">
          {resultsWithMatches.length > 0 ? (
            <>
              Found <span className="font-semibold text-violet-600">{resultsWithMatches.length}</span> result{resultsWithMatches.length !== 1 ? 's' : ''} for &quot;<span className="font-medium">{query}</span>&quot;
            </>
          ) : (
            <>
              No results found for &quot;<span className="font-medium">{query}</span>&quot;
            </>
          )}
        </span>
      </div>
      
      {resultsWithMatches.length > 0 && (
        <div className="text-sm text-gray-500">
          Results sorted by relevance and publication date
        </div>
      )}
    </div>
  );
}

interface SearchResultItemProps {
  result: SearchResult;
}

export function SearchResultItemBadges({ result }: SearchResultItemProps) {
  if (result.score === 0) return null;
  
  return (
    <div className="flex items-center gap-2 mb-2">
      <Badge variant="secondary" className="text-xs bg-violet-100 text-violet-700">
        {result.score} match{result.score !== 1 ? 'es' : ''}
      </Badge>
      {result.matchedWords.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {result.matchedWords.slice(0, 3).map((word, index) => (
            <Badge key={index} variant="outline" className="text-xs border-violet-200 text-violet-600">
              {word}
            </Badge>
          ))}
          {result.matchedWords.length > 3 && (
            <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
              +{result.matchedWords.length - 3} more
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
