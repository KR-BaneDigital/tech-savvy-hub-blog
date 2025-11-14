"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { blogPosts, getAllCategories } from "@/lib/blog-data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("latest")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  const categories = getAllCategories()

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerQuery) ||
          post.excerpt.toLowerCase().includes(lowerQuery) ||
          post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
          post.content.toLowerCase().includes(lowerQuery),
      )
    }

    // Sort
    const sorted = [...filtered]
    if (sortBy === "latest") {
      sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === "popular") {
      sorted.sort((a, b) => (b.views || 0) - (a.views || 0))
    } else if (sortBy === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title))
    }

    return sorted
  }, [searchQuery, selectedCategory, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage)
  const paginatedPosts = filteredAndSortedPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  return (
    <div className="min-h-screen">
      <BlogHeader />

      {/* Hero Section */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl text-balance">Health & Wellness Blog</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Discover expert insights, practical guides, and in-depth research to help your family live a healthier,
              chemical-free life.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Search */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                aria-label="Search articles"
              />
            </div>

            {/* Sort */}
            <Select
              value={sortBy}
              onValueChange={(value) => {
                setSortBy(value)
                setCurrentPage(1)
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="title">Title (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedCategory("all")
                setCurrentPage(1)
              }}
            >
              All Articles
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentPage(1)
                }}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredAndSortedPosts.length} {filteredAndSortedPosts.length === 1 ? "article" : "articles"}
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <Card className="overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="flex flex-col flex-1 p-5">
                        <div className="mb-3 flex items-center gap-3">
                          <Badge variant="secondary">{post.category}</Badge>
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                        </div>
                        <h3 className="mb-3 text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm pt-3 border-t border-border">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="size-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <span className="inline-flex items-center gap-1 font-medium text-primary">
                            Read More <ArrowRight className="size-4" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="size-4 mr-1" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="min-w-[40px]"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="size-4 ml-1" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="py-12 text-center">
              <Filter className="mx-auto size-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setCurrentPage(1)
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <BlogFooter />
    </div>
  )
}
