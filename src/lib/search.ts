import { BlogPost } from './blog';

export interface SearchIndex {
  [word: string]: string[]; // word -> array of slugs
}

export interface SearchResult {
  post: BlogPost;
  score: number;
  matchedWords: string[];
}

// Common stop words to exclude from indexing
const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
  'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
  'to', 'was', 'will', 'with', 'would', 'you', 'your', 'yours', 'this',
  'these', 'they', 'them', 'their', 'theirs', 'we', 'us', 'our', 'ours'
]);

// Important abbreviations and acronyms that should be indexed even if short
const IMPORTANT_SHORT_WORDS = new Set([
  'ai', 'ml', 'ui', 'ux', 'ci', 'cd', 'qa', 'db', 'os', 'js', 'ts', 'css', 'html',
  'api', 'sql', 'xml', 'json', 'http', 'ssl', 'tls', 'aws', 'gcp', 'azure'
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
    .split(/\s+/) // Split on whitespace
    .filter(word => {
      // Include important short words or words longer than 2 characters
      return (word.length > 2 || IMPORTANT_SHORT_WORDS.has(word)) && !STOP_WORDS.has(word);
    });
}

// Special tokenizer for titles that includes all words regardless of length
function tokenizeTitle(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
    .split(/\s+/) // Split on whitespace
    .filter(word => word.length > 0 && !STOP_WORDS.has(word)); // Only filter stop words, not short words
}

export function createSearchIndex(posts: BlogPost[]): SearchIndex {
  const index: SearchIndex = {};
  
  // Ensure posts is a proper array
  const safePosts = Array.isArray(posts) ? posts : [];
  
  safePosts.forEach(post => {
    // Ensure post has proper structure
    if (!post || !post.slug) return;
    
    // Tokenize title separately to include all words regardless of length
    const titleWords = tokenizeTitle(post.metadata?.title || '');
    
    // Create searchable text from description, content, and tags (excluding title)
    const otherSearchableText = [
      post.metadata?.description || '',
      post.metadata?.excerpt || '',
      post.content || '',
      ...(Array.isArray(post.metadata?.tags) ? post.metadata.tags : [])
    ].join(' ');
    
    const otherWords = tokenize(otherSearchableText);
    
    // Combine title words and other words
    const allWords = [...titleWords, ...otherWords];
    
    allWords.forEach(word => {
      if (!index[word]) {
        index[word] = [];
      }
      // Ensure index[word] is an array and doesn't already contain the slug
      const slugArray = Array.isArray(index[word]) ? index[word] : [];
      if (!slugArray.includes(post.slug)) {
        slugArray.push(post.slug);
        index[word] = slugArray;
      }
    });
  });
  
  return index;
}

export function searchPosts(
  query: string,
  posts: BlogPost[],
  index: SearchIndex
): SearchResult[] {
  const safePosts = Array.isArray(posts) ? posts : [];
  
  if (!query.trim()) {
    return safePosts.map(post => ({
      post,
      score: 0,
      matchedWords: []
    }));
  }
  
  const queryWords = tokenize(query);
  if (queryWords.length === 0) {
    return safePosts.map(post => ({
      post,
      score: 0,
      matchedWords: []
    }));
  }
  
  // Find posts that match any of the query words
  const postMatches: { [slug: string]: string[] } = {};
  
  queryWords.forEach(word => {
    const wordPosts = index[word];
    if (Array.isArray(wordPosts)) {
      wordPosts.forEach(slug => {
        if (!postMatches[slug]) {
          postMatches[slug] = [];
        }
        if (!postMatches[slug].includes(word)) {
          postMatches[slug].push(word);
        }
      });
    }
  });
  
  // Create results with scores
  const results: SearchResult[] = [];
  
  Object.entries(postMatches).forEach(([slug, matchedWords]) => {
    const post = safePosts.find(p => p.slug === slug);
    if (post) {
      const score = matchedWords.length; // Number of unique matched words
      results.push({
        post,
        score,
        matchedWords: matchedWords
      });
    }
  });
  
  // Sort by score (descending) then by date (descending)
  results.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score; // Higher score first
    }
    // If scores are equal, sort by date (newer first)
    const dateA = new Date(a.post.metadata?.date || '');
    const dateB = new Date(b.post.metadata?.date || '');
    return dateB.getTime() - dateA.getTime();
  });
  
  return results;
}

export function highlightSearchTerms(text: string, searchTerms: string[]): string {
  if (!searchTerms.length) return text;
  
  const pattern = new RegExp(`\\b(${searchTerms.join('|')})\\b`, 'gi');
  return text.replace(pattern, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
}
