const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const contentDirectory = path.join(process.cwd(), 'src/content/blog')

// Function to extract the first image from markdown content
function extractFirstImage(content) {
  const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/
  const match = content.match(imageRegex)
  
  if (match && match[1]) {
    let imagePath = match[1]
    if (!imagePath.startsWith('/')) {
      imagePath = '/' + imagePath
    }
    return imagePath
  }
  return null
}

async function getBlogPosts() {
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

getBlogPosts().then(posts => {
  console.log('=== DETAILED DEBUG FOR FIRST 4 POSTS ===\n');
  
  posts.slice(0, 4).forEach((post, i) => {
    const isLarge = i === 0;
    const isMedium = i >= 1 && i <= 3;
    const showImage = (isLarge || isMedium) && post.metadata.primaryImage && post.metadata.primaryImage.trim() !== '';
    
    console.log(`${i+1}. ${post.metadata.title}`);
    console.log(`   Date: ${post.metadata.date}`);
    console.log(`   Slug: ${post.slug}`);
    console.log(`   Primary Image: "${post.metadata.primaryImage}"`);
    console.log(`   Primary Image Length: ${post.metadata.primaryImage ? post.metadata.primaryImage.length : 'null'}`);
    console.log(`   Primary Image Trimmed: "${post.metadata.primaryImage ? post.metadata.primaryImage.trim() : 'null'}"`);
    console.log(`   isLarge: ${isLarge}`);
    console.log(`   isMedium: ${isMedium}`);
    console.log(`   showImage: ${showImage}`);
    
    if (post.metadata.primaryImage) {
      const imagePath = path.join(process.cwd(), 'public', post.metadata.primaryImage);
      const exists = fs.existsSync(imagePath);
      console.log(`   Image file exists: ${exists}`);
      if (exists) {
        const stats = fs.statSync(imagePath);
        console.log(`   Image file size: ${stats.size} bytes`);
      }
    }
    
    console.log('   ==========================================\n');
  });
});
