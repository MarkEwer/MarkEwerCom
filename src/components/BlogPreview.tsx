import React from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  readTime: string;
}

const BlogPreview: React.FC = () => {
  // This would typically come from your blog posts
  const recentPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Agile Principle #12: Team Reflection and Adaptation',
      excerpt: 'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.',
      date: 'November 2, 2018',
      category: 'Agile',
      image: '/blog/agile-principle-12.jpg',
      slug: '/blog/agile-principle-12',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Agile Principles #11: Self-Organizing Teams',
      excerpt: 'The best architectures, requirements, and designs emerge from self-organizing teams.',
      date: 'October 20, 2018',
      category: 'Agile',
      image: '/blog/agile-principles-11.jpg',
      slug: '/blog/agile-principles-11',
      readTime: '6 min read'
    },
    {
      id: '3',
      title: 'CQRS System Design: A Practical Approach',
      excerpt: 'I recently had the opportunity to design and implement a CQRS system for a large-scale enterprise application.',
      date: 'September 14, 2018',
      category: 'Architecture',
      image: '/blog/cqrs-system-design.jpg',
      slug: '/blog/cqrs-system-design',
      readTime: '8 min read'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights on software architecture, agile methodologies, and product development from my experience in the field.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article 
              key={post.id}
              className="blog-card group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 text-xs font-medium bg-white text-gray-800 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                  <a href={post.slug} className="block">
                    {post.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="pt-2">
                  <a 
                    href={post.slug}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm gap-1"
                  >
                    Read more
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/blog/" className="btn-primary">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
