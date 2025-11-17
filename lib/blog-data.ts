// Blog post data structure and sample content

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  tags: string[]
  date: string
  readTime: string
  author: {
    name: string
    bio: string
    image: string
    role: string
  }
  featured: boolean
  views?: number
  relatedPosts?: string[]
}

export interface Category {
  name: string
  slug: string
  description: string
  icon: string
}

export const categories: Category[] = [
  {
    name: "Automation",
    slug: "automation",
    description: "Streamline your workflow with automation tools and techniques",
    icon: "⚡",
  },
  {
    name: "Development",
    slug: "development",
    description: "Modern web development tutorials and best practices",
    icon: "💻",
  },
  {
    name: "Productivity",
    slug: "productivity",
    description: "Tips and tools to boost your productivity",
    icon: "🚀",
  },
  {
    name: "Technology",
    slug: "technology",
    description: "Latest tech trends and innovations",
    icon: "🔧",
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "blog-1",
    title: "Blog 1",
    excerpt: "Add description here...",
    content: `
# Blog 1

Add content here...

## Section 1

Add content here...

### Subsection 1

Add content here...

## Section 2

Add content here...
    `,
    image: "/placeholder.svg?height=800&width=1200",
    category: "automation",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    date: "January 8, 2025",
    readTime: "8 min read",
    author: {
      name: "Author Name",
      bio: "Add author bio here...",
      image: "/placeholder.svg?height=200&width=200",
      role: "Author Role",
    },
    featured: true,
    views: 12500,
    relatedPosts: ["2", "4", "5"],
  },
  {
    id: "2",
    slug: "blog-2",
    title: "Blog 2",
    excerpt: "Add description here...",
    content: `
# Blog 2

Add content here...

## Section 1

Add content here...

### Subsection 1

Add content here...

## Section 2

Add content here...
    `,
    image: "/placeholder.svg?height=800&width=1200",
    category: "development",
    tags: ["Tag 5", "Tag 6", "Tag 7", "Tag 8"],
    date: "January 5, 2025",
    readTime: "6 min read",
    author: {
      name: "Author Name",
      bio: "Add author bio here...",
      image: "/placeholder.svg?height=200&width=200",
      role: "Author Role",
    },
    featured: false,
    views: 8900,
    relatedPosts: ["1", "3", "6"],
  },
  {
    id: "3",
    slug: "blog-3",
    title: "Blog 3",
    excerpt: "Add description here...",
    content: `
# Blog 3

Add content here...

## Section 1

Add content here...

### Subsection 1

Add content here...

## Section 2

Add content here...
    `,
    image: "/placeholder.svg?height=800&width=1200",
    category: "productivity",
    tags: ["Tag 9", "Tag 10", "Tag 11", "Tag 12"],
    date: "January 3, 2025",
    readTime: "10 min read",
    author: {
      name: "Author Name",
      bio: "Add author bio here...",
      image: "/placeholder.svg?height=200&width=200",
      role: "Author Role",
    },
    featured: false,
    views: 15200,
    relatedPosts: ["5", "7", "8"],
  },
  {
    id: "4",
    slug: "blog-4",
    title: "Blog 4",
    excerpt: "Add description here...",
    content: `
# Blog 4

Add content here...

## Section 1

Add content here...

### Subsection 1

Add content here...

## Section 2

Add content here...
    `,
    image: "/placeholder.svg?height=800&width=1200",
    category: "automation",
    tags: ["Tag 1", "Tag 2", "Tag 13", "Tag 14"],
    date: "December 30, 2024",
    readTime: "5 min read",
    author: {
      name: "Author Name",
      bio: "Add author bio here...",
      image: "/placeholder.svg?height=200&width=200",
      role: "Author Role",
    },
    featured: false,
    views: 10300,
    relatedPosts: ["1", "2", "6"],
  },
  {
    id: "5",
    slug: "blog-5",
    title: "Blog 5",
    excerpt: "Add description here...",
    content: `
# Blog 5

Add content here...

## Section 1

Add content here...

### Subsection 1

Add content here...

## Section 2

Add content here...
    `,
    image: "/placeholder.svg?height=800&width=1200",
    category: "development",
    tags: ["Tag 15", "Tag 16", "Tag 17", "Tag 18"],
    date: "January 7, 2025",
    readTime: "7 min read",
    author: {
      name: "Author Name",
      bio: "Add author bio here...",
      image: "/placeholder.svg?height=200&width=200",
      role: "Author Role",
    },
    featured: false,
    views: 9100,
    relatedPosts: ["1", "3", "9"],
  },
  {
    id: "6",
    slug: "blog-6",
    title: "Blog 6",
    excerpt: "Add description here...",
    content: `
# Blog 6

Add content here...

## Section 1

Add content here...

### Subsection 1

Add content here...

## Section 2

Add content here...
    `,
    image: "/placeholder.svg?height=800&width=1200",
    category: "technology",
    tags: ["Tag 19", "Tag 20", "Tag 21", "Tag 22"],
    date: "January 4, 2025",
    readTime: "9 min read",
    author: {
      name: "Author Name",
      bio: "Add author bio here...",
      image: "/placeholder.svg?height=200&width=200",
      role: "Author Role",
    },
    featured: false,
    views: 7200,
    relatedPosts: ["1", "5", "10"],
  },
  {
    id: "7",
    slug: "blog-7",
    title: "Blog 7",
    excerpt: "Add description here...",
    content: `
# Blog 7

Add content here...

## Section 1

Add content here...

### Subsection 1

Add content here...

## Section 2

Add content here...
    `,
    image: "/placeholder.svg?height=800&width=1200",
    category: "automation",
    tags: ["Tag 23", "Tag 24", "Tag 25", "Tag 26"],
    date: "January 2, 2025",
    readTime: "8 min read",
    author: {
      name: "Author Name",
      bio: "Add author bio here...",
      image: "/placeholder.svg?height=200&width=200",
      role: "Author Role",
    },
    featured: false,
    views: 11400,
    relatedPosts: ["1", "5", "4"],
  },
  {
    id: "8",
    slug: "blog-8",
    title: "Blog 8",
    excerpt: "Add description here...",
    content: `
# Blog 8

Add content here...

## Section 1

Add content here...

### Subsection 1

Add content here...

## Section 2

Add content here...
    `,
    image: "/placeholder.svg?height=800&width=1200",
    category: "development",
    tags: ["Tag 27", "Tag 28", "Tag 29", "Tag 30"],
    date: "December 28, 2024",
    readTime: "7 min read",
    author: {
      name: "Author Name",
      bio: "Add author bio here...",
      image: "/placeholder.svg?height=200&width=200",
      role: "Author Role",
    },
    featured: false,
    views: 13800,
    relatedPosts: ["3", "6", "1"],
  },
  {
    id: "9",
    slug: "blog-9",
    title: "Blog 9",
    excerpt: "Add description here...",
    content: `
# Blog 9

Add content here...

## Section 1

Add content here...

### Subsection 1

Add content here...

## Section 2

Add content here...
    `,
    image: "/placeholder.svg?height=800&width=1200",
    category: "productivity",
    tags: ["Tag 31", "Tag 32", "Tag 33", "Tag 34"],
    date: "December 26, 2024",
    readTime: "10 min read",
    author: {
      name: "Author Name",
      bio: "Add author bio here...",
      image: "/placeholder.svg?height=200&width=200",
      role: "Author Role",
    },
    featured: false,
    views: 16700,
    relatedPosts: ["5", "6", "1"],
  },
  {
    id: "10",
    slug: "blog-10",
    title: "Blog 10",
    excerpt: "Add description here...",
    content: `
# Blog 10

Add content here...

## Section 1

Add content here...

### Subsection 1

Add content here...

## Section 2

Add content here...
    `,
    image: "/placeholder.svg?height=800&width=1200",
    category: "technology",
    tags: ["Tag 35", "Tag 36", "Tag 37", "Tag 38"],
    date: "December 23, 2024",
    readTime: "12 min read",
    author: {
      name: "Author Name",
      bio: "Add author bio here...",
      image: "/placeholder.svg?height=200&width=200",
      role: "Author Role",
    },
    featured: false,
    views: 19300,
    relatedPosts: ["4", "2", "3"],
  },
]

// Helper function to get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

// Helper function to get related posts
export function getRelatedPosts(postId: string): BlogPost[] {
  const post = blogPosts.find((p) => p.id === postId)
  if (!post || !post.relatedPosts) return []

  return post.relatedPosts
    .map((id) => blogPosts.find((p) => p.id === id))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, 3)
}

// Helper function to filter posts
export function filterPosts(query: string, category?: string): BlogPost[] {
  let filtered = blogPosts

  if (category && category !== "all") {
    filtered = filtered.filter((post) => post.category.toLowerCase() === category.toLowerCase())
  }

  if (query) {
    const lowerQuery = query.toLowerCase()
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
    )
  }

  return filtered
}

// Get all categories
export function getAllCategories(): string[] {
  const categoryNames = new Set(blogPosts.map((post) => post.category))
  return Array.from(categoryNames).sort()
}
