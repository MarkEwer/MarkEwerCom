'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { BlogPost } from '@/lib/blog';
import { createSearchIndex, searchPosts, SearchResult, SearchIndex } from '@/lib/search';

export function useSearch(posts: BlogPost[]) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Create search index (memoized to avoid recreating on each render)
  // Ensure posts are properly formatted as arrays by converting from any serialized format
  const searchIndex: SearchIndex = useMemo(() => {
    if (!isClient) return {};
    // Ensure we have proper array of posts
    const safePosts = Array.isArray(posts) ? posts : [];
    return createSearchIndex(safePosts);
  }, [posts, isClient]);
  
  // Perform search (memoized to avoid unnecessary recalculations)
  const searchResults: SearchResult[] = useMemo(() => {
    if (!isClient) {
      // Return all posts as results during SSR/initial render
      return Array.isArray(posts) ? posts.map(post => ({
        post,
        score: 0,
        matchedWords: []
      })) : [];
    }
    
    const safePosts = Array.isArray(posts) ? posts : [];
    
    if (!query.trim()) {
      setIsSearching(false);
      return safePosts.map(post => ({
        post,
        score: 0,
        matchedWords: []
      }));
    }
    
    setIsSearching(true);
    const results = searchPosts(query, safePosts, searchIndex);
    setIsSearching(false);
    return results;
  }, [query, posts, searchIndex, isClient]);
  
  const handleSearch = useCallback((searchQuery: string) => {
    if (isClient) {
      setQuery(searchQuery);
    }
  }, [isClient]);
  
  const clearSearch = useCallback(() => {
    if (isClient) {
      setQuery('');
    }
  }, [isClient]);
  
  return {
    query,
    searchResults,
    isSearching,
    handleSearch,
    clearSearch,
    hasResults: searchResults.length > 0,
    isSearchActive: query.trim().length > 0
  };
}
