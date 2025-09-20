export interface BlogPost {
  title: string;
  date: string;
  slug: string;
  description: string;
  tags: string[];
}

let cachedBlogPosts: BlogPost[] | null = null;

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  if (cachedBlogPosts) {
    return cachedBlogPosts;
  }

  try {
    const response = await fetch('/blogPosts.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status}`);
    }
    cachedBlogPosts = await response.json();
    return cachedBlogPosts!;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return await fetchBlogPosts();
}

// For backwards compatibility, export a promise that resolves to the blog posts
export const blogPosts = fetchBlogPosts();

export default getBlogPosts;
