"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { blogPosts, categories } from "@/lib/blog-data"
import { Search, Calendar, User, ArrowRight } from "lucide-react"

export default function ClientPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1, 4)

  return (
    <div className="min-h-screen flex flex-col">
      <BlogHeader />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Hero content */}
              <div className="space-y-6">
                <div className="inline-block">
                  <Badge variant="secondary" className="mb-4">
                    Welcome to Tech Savvy Hub
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Master Technology &{" "}
                  <span className="text-primary">Automation</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Expert-led tutorials and guides to enhance your productivity
                  and technical skills. Learn automation, development, and
                  cutting-edge tech solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="/blog">
                      Explore Tutorials
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/category/automation">Learn Automation</Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Featured posts */}
              <div className="grid gap-6">
                {recentPosts.map((post) => (
                  <Card
                    key={post.slug}
                    className="bg-card hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Badge variant="secondary" className="mb-2">
                            {post.category}
                          </Badge>
                          <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="hover:text-primary transition-colors"
                            >
                              {post.title}
                            </Link>
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {post.author}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Articles</h2>
                <p className="text-muted-foreground">
                  Discover our most popular and impactful content
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/blog">View All</Link>
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Large Featured Post */}
              <Card className="lg:row-span-2 overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-[400px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4">
                    {featuredPost.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Three Smaller Posts */}
              <div className="grid gap-6">
                {recentPosts.map((post) => (
                  <Card
                    key={post.slug}
                    className="overflow-hidden group hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-4 p-4">
                      <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="secondary" className="mb-2">
                          {post.category}
                        </Badge>
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Find Your Next Tutorial
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.slug} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Filtered Results */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.slug}
                    className="overflow-hidden group hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No articles found. Try adjusting your search or filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Explore by Category
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="group"
                >
                  <Card className="text-center p-8 hover:shadow-lg transition-all hover:scale-105">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  )
}
