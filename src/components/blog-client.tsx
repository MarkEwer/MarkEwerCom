'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SearchBar } from '@/components/ui/search-bar';
import { SearchResultsInfo, SearchResultItemBadges } from '@/components/ui/search-results';
import { AuroraText } from '@/components/magicui/aurora-text';
import { BentoGrid } from '@/components/magicui/bento-grid';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { CalendarIcon, ArrowLeftIcon, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';
import { useSearch } from '@/hooks/useSearch';

interface BlogClientProps {
  posts: BlogPost[];
}

export function BlogClient({ posts }: BlogClientProps) {
  const [visibleCount, setVisibleCount] = useState(18);
  
  const { 
    query, 
    searchResults, 
    handleSearch, 
    clearSearch,
    isSearchActive 
  } = useSearch(posts);

  const POSTS_PER_PAGE = 18;
  
  // Get the posts to display (either search results or all posts)
  const displayPosts = isSearchActive ? searchResults.filter(r => r.score > 0) : searchResults;
  
  // Slice the posts based on visible count
  const visiblePosts = displayPosts.slice(0, visibleCount);
  const hasMorePosts = displayPosts.length > visibleCount;
  
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + POSTS_PER_PAGE);
  };
  
  // Reset visible count when search changes
  const handleSearchWrapper = (searchQuery: string) => {
    setVisibleCount(POSTS_PER_PAGE);
    handleSearch(searchQuery);
  };
  
  const handleClearWrapper = () => {
    setVisibleCount(POSTS_PER_PAGE);
    clearSearch();
  };

  // Function to get size class based on post age and search state
  const getSizeClass = (dateString: string, index: number) => {
    // During search, make all items smaller for better scanning
    if (isSearchActive) {
      return "md:col-span-1 md:row-span-1"; // All small during search
    }
    
    // Only the newest post (index 0) gets the largest size
    if (index === 0) {
      return "md:col-span-2 md:row-span-2"; // Large (2x2)
    }
    // Next 3 posts (indices 1-3) get medium sizes
    else if (index >= 1 && index <= 3) {
      return "md:col-span-1 md:row-span-2"; // Medium tall (1x2)
    }
    // All remaining posts get small sizes
    else {
      return "md:col-span-1 md:row-span-1"; // Small (1x1)
    }
  };

  // Create bento items from visible search results
  const bentoItems = visiblePosts.map((result, index) => {
    const post = result.post;
    const isLarge = index === 0 && !isSearchActive;
    const isMedium = index >= 1 && index <= 3 && !isSearchActive;
    // Show image on all cards if the post has a primary image
    const showImage = post.metadata.primaryImage && post.metadata.primaryImage.trim() !== '';
    
    return {
      ...result,
      name: post.metadata.title,
      className: getSizeClass(post.metadata.date, index),
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-white to-violet-50 opacity-50" />
      ),
      Icon: CalendarIcon,
      description: post.metadata.description || post.metadata.excerpt || "",
      href: `/blog/${post.slug}`,
      cta: "Read More",
      date: post.metadata.date,
      tags: post.metadata.tags || [],
      primaryImage: post.metadata.primaryImage,
      showImage,
      isLarge,
      isMedium,
    };
  });

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="inline-block mb-6">
          <RainbowButton size="sm" className="text-xs">
            <ArrowLeftIcon className="h-3 w-3" />
            Back to Home
          </RainbowButton>
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Mark&apos;s Blog Posts
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl">
          Thoughts on software design, agile methodologies, and technology architecture.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <SearchBar
          onSearch={handleSearchWrapper}
          onClear={handleClearWrapper}
          query={query}
          className="w-full"
          placeholder="Search posts by title, content, or tags..."
        />
      </div>

      {/* Search Results Info */}
      <SearchResultsInfo 
        query={query}
        results={displayPosts}
        isSearchActive={isSearchActive}
      />

      {/* Blog Posts Bento Grid */}
      {visiblePosts.length > 0 ? (
        <>
          <BentoGrid className="auto-rows-[minmax(300px,auto)] gap-4">
            {bentoItems.map((item, index) => {
              // Extract custom props that shouldn't be passed to DOM
              const { primaryImage, showImage, isLarge, isMedium } = item;
              
              return (
                <div
                  key={`${item.post.slug}-${index}`}
                  className={`group relative overflow-hidden rounded-xl border border-violet-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl ${item.className}`}
                  >

                <div className="relative z-10 h-full flex flex-col">
                  {/* Search Result Badges */}
                  <SearchResultItemBadges result={item} />

                  {/* Primary Image for all cards that have one */}
                  {showImage && (
                    <div className={`relative mb-4 overflow-hidden rounded-md ${
                      isLarge ? 'h-[200px]' : isMedium ? 'h-[150px]' : 'h-[100px]'
                    }`}>
                      <Image
                        src={primaryImage!}
                        alt={item.name}
                        fill
                        className={`rounded-md ${(isLarge || isMedium) ? 'object-cover' : 'object-contain'}`}
                        priority={index < 2}
                      />
                    </div>
                  )}

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <CalendarIcon className="h-4 w-4" />
                    
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>

                  {/* Title with Aurora Text */}
                  <h3 className="text-xl font-semibold mb-4 line-clamp-2">
                    <Link 
                      href={item.href}
                      className="hover:text-violet-600 transition-colors"
                    >
                      <AuroraText 
                        colors={["#7c3aed", "#a855f7", "#c084fc", "#e879f9"]}
                        className="font-semibold"
                      >
                        {item.name}
                      </AuroraText>
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag: string) => (
                      <Link 
                        key={tag} 
                        href={`/blog/category/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="hover:scale-105 transition-transform"
                      >
                        <Badge variant="secondary" className="text-xs cursor-pointer hover:bg-violet-200">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-end">
                    <Link 
                      href={item.href} 
                      className="flex items-center text-violet-600 hover:text-violet-800 transition-colors group/link"
                    >
                      <span className="text-sm font-medium mr-1">{item.cta}</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Background */}
                {item.background}
              </div>
              );
            })}
          </BentoGrid>
          
          {/* Load More Button */}
          {hasMorePosts && (
            <div className="mt-12 text-center">
              <RainbowButton
                onClick={handleLoadMore}
                size="lg"
                className="px-8 py-3"
              >
                Load More Posts ({displayPosts.length - visibleCount} remaining)
              </RainbowButton>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No blog posts found matching your search.</p>
          <Button 
            onClick={handleClearWrapper}
            variant="outline"
            className="mt-4"
          >
            Show All Posts
          </Button>
        </div>
      )}

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          {isSearchActive ? (
            <>
              Showing {visiblePosts.length} of {displayPosts.filter(r => r.score > 0).length} posts that match your search
            </>
          ) : (
            <>
              Showing {visiblePosts.length} of {posts.length} {posts.length === 1 ? 'post' : 'posts'} published
            </>
          )}
        </p>
      </div>
    </div>
  );
}
