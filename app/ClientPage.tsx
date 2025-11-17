"use client"

import type React from "react"
import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { blogPosts, filterPosts, getAllCategories } from "@/lib/blog-data"

export default function ClientPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = useMemo(() => getAllCategories(), [])
  const filteredPosts = useMemo(
    () => filterPosts(searchQuery, selectedCategory),
    [searchQuery, selectedCategory],
  )

  const featuredPost = blogPosts.find((post) => post.featured)
  const recentPosts = filteredPosts.slice(0, 6)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <BlogHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Tech Savvy Hub
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Master technology and automation with expert-led tutorials. Enhance your productivity and technical skills through comprehensive guides for tech enthusiasts and digital professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="border-b border-border bg-muted/50">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <h2 className="mb-8 text-2xl font-bold text-foreground">Featured Article</h2>
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative aspect-video md:aspect-auto">
                      <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="flex flex-col justify-center p-6">
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="secondary">{featuredPost.category}</Badge>
                        <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="mb-4 text-muted-foreground line-clamp-3">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-3">
                        <Image
                          src={featuredPost.author.image || "/placeholder.svg"}
                          alt={featuredPost.author.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium text-foreground">{featuredPost.author.name}</p>
                          <p className="text-xs text-muted-foreground">{featuredPost.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-background"
                  aria-label="Search articles"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[200px] bg-background">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Recent Posts Grid */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Recent Articles</h2>
            {filteredPosts.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {recentPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                      <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                        <div className="relative aspect-video">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="mb-3 flex items-center gap-2">
                            <Badge variant="secondary">{post.category}</Badge>
                            <span className="text-sm text-muted-foreground">{post.readTime}</span>
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center gap-3">
                            <Image
                              src={post.author.image || "/placeholder.svg"}
                              alt={post.author.name}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                            <div>
                              <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                              <p className="text-xs text-muted-foreground">{post.date}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                {filteredPosts.length > 6 && (
                  <div className="mt-12 text-center">
                    <Button asChild size="lg">
                      <Link href="/blog">View All Articles</Link>
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  )
}
