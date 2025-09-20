const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// Test just the agile-principle-12 post
const filePath = path.join(process.cwd(), 'src/content/blog/agile-principle-12.mdx')
const fileContents = fs.readFileSync(filePath, 'utf8')
const { data, content } = matter(fileContents)

console.log('=== Agile Principle #12 Debug ===')
console.log('Frontmatter image:', data.image)
console.log('Content preview (first 200 chars):')
console.log(content.substring(0, 200))

// Test image extraction
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

const extractedImage = extractFirstImage(content)
console.log('Extracted image:', extractedImage)

const finalPrimaryImage = data.image || extractedImage || ''
console.log('Final primaryImage:', finalPrimaryImage)

// Check if image file exists
if (finalPrimaryImage) {
  const imagePath = path.join(process.cwd(), 'public', finalPrimaryImage)
  const exists = fs.existsSync(imagePath)
  console.log('Image file exists:', exists)
  if (exists) {
    const stats = fs.statSync(imagePath)
    console.log('Image file size:', stats.size, 'bytes')
  }
}
