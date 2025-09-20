import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AuroraText } from '@/components/magicui/aurora-text';
import { BentoGrid } from '@/components/magicui/bento-grid';
import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { CalendarIcon, ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  // Get all unique categories from posts
  const categories = new Set<string>();
  posts.forEach(post => {
    post.metadata.tags?.forEach(tag => {
      categories.add(tag.toLowerCase().replace(/\s+/g, '-'));
    });
  });
  
  return Array.from(categories).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const allPosts = await getBlogPosts();
  
  // Decode the category slug back to display name
  const categoryDisplayName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  // Filter posts by category
  const posts = allPosts.filter(post => 
    post.metadata.tags?.some(tag => 
      tag.toLowerCase().replace(/\s+/g, '-') === category
    )
  );

  if (posts.length === 0) {
    notFound();
  }

  // Function to get size class based on post age
  const getSizeClass = (dateString: string, index: number) => {
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

  // Create bento items from posts
  const bentoItems = posts.map((post, index) => {
    const isLarge = index === 0;
    const isMedium = index >= 1 && index <= 3;
    const showImage = (isLarge || isMedium) && post.metadata.primaryImage && post.metadata.primaryImage.trim() !== '';
    
    return {
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
    <div className="min-h-screen relative bg-white">
      {/* Flickering Grid Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="rgb(139, 92, 246)" // violet-500
        maxOpacity={0.2}
        flickerChance={0.1}
      />
      
      <main className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12">
            <Link href="/blog" className="inline-block mb-6">
              <RainbowButton size="sm" className="text-xs">
                <ArrowLeftIcon className="h-3 w-3" />
                Back to All Posts
              </RainbowButton>
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {categoryDisplayName} Posts
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
              Exploring {categoryDisplayName.toLowerCase()} in software development and technology.
            </p>
          </div>

          {/* Blog Posts Bento Grid */}
          <BentoGrid className="auto-rows-[minmax(300px,auto)] gap-4">
            {bentoItems.map((item, index) => {
              // Extract custom props that shouldn't be passed to DOM
              const { primaryImage, showImage, isLarge } = item;
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl border border-violet-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl ${item.className}`}
                  >

                <div className="relative z-10 h-full flex flex-col">
                  {/* Primary Image for large and medium cards */}
                  {showImage && (
                    <div className="relative mb-4 overflow-hidden rounded-md">
                      <Image
                        src={primaryImage!}
                        alt={item.name}
                        width={isLarge ? 400 : 300}
                        height={isLarge ? 200 : 150}
                        className="object-cover w-full h-auto rounded-md"
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
                  <Link href={item.href} className="mt-auto">
                    <Button variant="outline" className="w-full">
                      {item.cta}
                    </Button>
                  </Link>
                </div>

                {/* Background */}
                {item.background}
              </div>
              );
            })}
          </BentoGrid>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'} in {categoryDisplayName}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryDisplayName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return {
    title: `${categoryDisplayName} Posts - Mark Ewer`,
    description: `Exploring ${categoryDisplayName.toLowerCase()} in software development and technology by Mark Ewer.`,
  };
}
