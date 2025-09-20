import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content/blog')

// Function to extract the first image from markdown content
function extractFirstImage(content: string): string | null {
  // Look for markdown image syntax: ![alt text](image-path)
  const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/
  const match = content.match(imageRegex)
  
  if (match && match[1]) {
    let imagePath = match[1]
    
    // Handle relative paths and ensure they start with /
    if (!imagePath.startsWith('/')) {
      imagePath = '/' + imagePath
    }
    
    return imagePath
  }
  
  return null
}

export interface BlogPost {
  slug: string
  metadata: {
    title: string
    date: string
    excerpt?: string
    description?: string
    tags?: string[]
    image?: string
    primaryImage?: string
  }
  content: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(contentDirectory)
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      const primaryImage = extractFirstImage(content)
      
      return {
        slug,
        metadata: {
          title: data.title || '',
          date: data.date || '',
          excerpt: data.excerpt || data.description || '',
          description: data.description || data.excerpt || '',
          tags: data.tags || [],
          image: data.image || '',
          primaryImage: data.image || primaryImage || '',
        },
        content,
      }
    })
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())

  return posts
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const primaryImage = extractFirstImage(content)
    
    return {
      slug,
      metadata: {
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || data.description || '',
        description: data.description || data.excerpt || '',
        tags: data.tags || [],
        image: data.image || '',
        primaryImage: data.image || primaryImage || '',
      },
      content,
    }
  } catch {
    return null
  }
}

export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.slice(0, limit)
}
