const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

// Function to extract the first image from markdown content
function extractFirstImage(content) {
  const imageRegex = /!\[[^\]]*\]\(([^)]+)\)/;
  const match = content.match(imageRegex);
  
  if (match && match[1]) {
    let imagePath = match[1];
    
    if (!imagePath.startsWith('/')) {
      imagePath = '/' + imagePath;
    }
    
    return imagePath;
  }
  
  return null;
}

async function debugBlogPosts() {
  const files = fs.readdirSync(contentDirectory);
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      const primaryImage = extractFirstImage(content);
      
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
      };
    })
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  console.log('Total posts:', posts.length);
  console.log('\nFirst 4 posts with image analysis:');
  
  posts.slice(0, 4).forEach((post, index) => {
    const isLarge = index === 0;
    const isMedium = index >= 1 && index <= 3;
    const showImage = (isLarge || isMedium) && post.metadata.primaryImage && post.metadata.primaryImage.trim() !== '';
    
    console.log(`\nPost ${index} (${post.slug}):`);
    console.log('  Title:', post.metadata.title);
    console.log('  Date:', post.metadata.date);
    console.log('  isLarge:', isLarge);
    console.log('  isMedium:', isMedium);
    console.log('  primaryImage:', JSON.stringify(post.metadata.primaryImage));
    console.log('  primaryImage length:', post.metadata.primaryImage ? post.metadata.primaryImage.length : 0);
    console.log('  primaryImage trimmed:', JSON.stringify(post.metadata.primaryImage ? post.metadata.primaryImage.trim() : ''));
    console.log('  showImage:', showImage);
    
    // Check if image file exists
    if (post.metadata.primaryImage) {
      const imagePath = path.join(process.cwd(), 'public', post.metadata.primaryImage.startsWith('/') ? post.metadata.primaryImage.slice(1) : post.metadata.primaryImage);
      console.log('  Image file path:', imagePath);
      console.log('  Image file exists:', fs.existsSync(imagePath));
    }
  });
}

debugBlogPosts().catch(console.error);
