import { notFound } from 'next/navigation'
import { getBlogPosts, getBlogPost } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  const readingTime = Math.ceil(post.content.split(' ').length / 200) // Rough estimate

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-100 relative">
      <FlickeringGrid
        className="z-0 absolute inset-0 w-full h-full"
        squareSize={4}
        gridGap={6}
        color="#8b5cf6"
        maxOpacity={0.1}
        flickerChance={0.1}
      />
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link href="/" className="inline-block mb-8">
            <RainbowButton size="sm" className="text-xs">
              <ArrowLeft className="w-3 h-3" />
              Back to Home
            </RainbowButton>
          </Link>

          {/* Blog Post Card */}
          <Card className="shadow-xl border-0">
            <CardHeader className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {post.metadata.tags?.map((tag) => (
                  <Link 
                    key={tag} 
                    href={`/blog/category/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:scale-105 transition-transform"
                  >
                    <Badge variant="secondary" className="bg-violet-100 text-violet-700 cursor-pointer hover:bg-violet-200">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {post.metadata.title}
              </h1>
              
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.metadata.date}>
                    {new Date(post.metadata.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{readingTime} min read</span>
                </div>
              </div>

              {post.metadata.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.metadata.excerpt}
                </p>
              )}
            </CardHeader>
            <CardContent className="prose prose-lg prose-violet max-w-none">
            {/* Blog Post Banner Image (moved below headers) */}
            {post.metadata.image && (
              <div className="mb-8 w-full">
                <img
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg border border-violet-100"
                  style={{ background: '#F5F7FA' }}
                />
              </div>
            )}
              <MDXRemote 
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypePrism],
                  },
                }}
              />
            </CardContent>
          </Card>

          {/* Related Posts Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link href="/blog" className="inline-block">
              <RainbowButton size="sm" className="text-xs">
                <ArrowLeft className="w-3 h-3" />
                View All Posts
              </RainbowButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
