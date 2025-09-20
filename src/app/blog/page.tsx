import { getBlogPosts } from '@/lib/blog';
import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { BlogClient } from '@/components/blog-client';

export default async function BlogPage() {
  const posts = await getBlogPosts();

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
        <BlogClient posts={posts} />
      </main>
    </div>
  );
}

export const metadata = {
  title: 'Blog - Mark Ewer',
  description: 'Thoughts on software design, agile methodologies, and technology architecture by Mark Ewer.',
};
