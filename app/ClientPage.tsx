"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Shield, Heart, Baby, ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react"

const featuredPosts = [
  {
    id: 1,
    slug: "blog-1",
    title: "Blog 1",
    excerpt: "Add description here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Category 1",
    date: "January 8, 2025",
    readTime: "8 min read",
    author: "Author Name",
    featured: true,
  },
  {
    id: 2,
    slug: "blog-2",
    title: "Blog 2",
    excerpt: "Add description here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Category 2",
    date: "January 5, 2025",
    readTime: "6 min read",
    author: "Author Name",
  },
  {
    id: 3,
    slug: "blog-3",
    title: "Blog 3",
    excerpt: "Add description here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Category 3",
    date: "January 3, 2025",
    readTime: "10 min read",
    author: "Author Name",
  },
  {
    id: 4,
    slug: "blog-4",
    title: "Blog 4",
    excerpt: "Add description here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Category 1",
    date: "December 30, 2024",
    readTime: "5 min read",
    author: "Author Name",
  },
  {
    id: 9,
    slug: "blog-9",
    title: "Blog 9",
    excerpt: "Add description here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Category 2",
    date: "December 25, 2024",
    readTime: "7 min read",
    author: "Author Name",
  },
  {
    id: 10,
    slug: "blog-10",
    title: "Blog 10",
    excerpt: "Add description here...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Category 3",
    date: "December 20, 2024",
    readTime: "9 min read",
    author: "Author Name",
  },
]

const recentPosts = [
  {
    id: 5,
    slug: "blog-5",
    title: "Blog 5",
    date: "January 7, 2025",
    category: "Category 2",
  },
  {
    id: 6,
    slug: "blog-6",
    title: "Blog 6",
    date: "January 4, 2025",
    category: "Category 3",
  },
  {
    id: 7,
    slug: "blog-7",
    title: "Blog 7",
    date: "January 2, 2025",
    category: "Category 1",
  },
  {
    id: 8,
    slug: "blog-8",
    title: "Blog 8",
    date: "December 28, 2024",
    category: "Category 2",
  },
]

const categories = [
  { name: "Category 1", icon: Shield, count: 24 },
  { name: "Category 2", icon: Heart, count: 18 },
  { name: "Category 3", icon: Baby, count: 32 },
]

export default function ClientPage() {
  const [sidebarEmail, setSidebarEmail] = useState("")
  const [sidebarSubmitted, setSidebarSubmitted] = useState(false)
  const [footerEmail, setFooterEmail] = useState("")
  const [footerSubmitted, setFooterSubmitted] = useState(false)
  const [headerEmail, setHeaderEmail] = useState("")
  const [headerSubmitted, setHeaderSubmitted] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleSidebarSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (sidebarEmail) {
      setSidebarSubmitted(true)
    }
  }

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (footerEmail) {
      setFooterSubmitted(true)
    }
  }

  const handleHeaderSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (headerEmail) {
      setHeaderSubmitted(true)
      setTimeout(() => {
        setModalOpen(false)
        setHeaderSubmitted(false)
        setHeaderEmail("")
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="size-8" />
              <span className="text-xl font-semibold text-foreground">Tech Savvy Hub</span>
            </Link>
            <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
              <Link
                href="/category/1"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Category 1
              </Link>
              <Link
                href="/category/2"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Category 2
              </Link>
              <Link
                href="/category/3"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Category 3
              </Link>
              <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
              <DialogTrigger asChild>
                <Button variant="default" size="sm" className="hidden md:inline-flex">
                  Subscribe
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Subscribe to Our Newsletter</DialogTitle>
                  <DialogDescription>Get the latest articles delivered to your inbox.</DialogDescription>
                </DialogHeader>
                {!headerSubmitted ? (
                  <form onSubmit={handleHeaderSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={headerEmail}
                      onChange={(e) => setHeaderEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" className="w-full">
                      Subscribe
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-sm font-semibold">Thank You!</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      You've successfully subscribed to our newsletter.
                    </p>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Main Featured Article with Title */}
            <div>
              <div className="mb-6">
                <h1 className="mb-3 text-4xl font-bold leading-tight text-foreground sm:text-5xl text-balance">
                  Hero Title Here
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Add your hero description here. This is where you can describe what your blog is about.
                </p>
              </div>

              <Link href={`/blog/${featuredPosts[0].slug}`} className="group">
                <Card className="overflow-hidden border-0 shadow-lg transition-shadow hover:shadow-xl">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={featuredPosts[0].image || "/placeholder.svg"}
                      alt={featuredPosts[0].title}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {featuredPosts[0].category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{featuredPosts[0].date}</span>
                    </div>
                    <h2 className="mb-3 text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                      {featuredPosts[0].title}
                    </h2>
                    <p className="mb-4 text-muted-foreground leading-relaxed">{featuredPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{featuredPosts[0].readTime}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Read Article <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Secondary Featured Articles */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {featuredPosts.slice(1, 4).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="flex gap-4">
                      <div className="w-1/3 shrink-0">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <CardContent className="flex flex-1 flex-col justify-center py-4 pr-4 pl-0">
                        <Badge variant="secondary" className="mb-2 w-fit text-xs">
                          {post.category}
                        </Badge>
                        <h3 className="mb-2 text-base font-semibold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="size-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Latest Posts - Main Column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="mb-2 text-3xl font-bold text-foreground">Top Articles</h2>
              <p className="text-muted-foreground">Custom top article description per brand.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {featuredPosts.slice(0, 6).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="mb-3 text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{post.readTime}</span>
                        <span className="inline-flex items-center gap-1 font-medium text-primary">
                          Read More <ChevronRight className="size-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Newsletter Signup */}
            <Card className="mb-8 bg-primary text-primary-foreground">
              <CardContent className="p-6">
                {!sidebarSubmitted ? (
                  <>
                    <h3 className="mb-3 text-xl font-bold">Stay Informed</h3>
                    <p className="mb-4 text-sm text-primary-foreground/90 leading-relaxed">
                      Get weekly insights on creating a healthier, chemical-free home for your family.
                    </p>
                    <form onSubmit={handleSidebarSubmit} className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={sidebarEmail}
                        onChange={(e) => setSidebarEmail(e.target.value)}
                        required
                        className="bg-primary-foreground text-foreground placeholder:text-muted-foreground"
                        aria-label="Email address"
                      />
                      <Button type="submit" variant="secondary" className="w-full">
                        Subscribe Now
                      </Button>
                    </form>
                    <p className="mt-3 text-xs text-primary-foreground/75">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <h3 className="mb-2 text-xl font-bold">Thank You!</h3>
                    <p className="text-sm text-primary-foreground/90">
                      You've successfully subscribed to our newsletter.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold text-foreground">Recently Published</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group block border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <h4 className="mb-2 text-sm font-semibold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="size-3" />
                        <span>{post.date}</span>
                      </div>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {post.category}
                      </Badge>
                    </Link>
                  ))}
                </div>
                <Button variant="outline" className="mt-6 w-full bg-transparent" asChild>
                  <Link href="/blog">View All Articles</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Browse by Category */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold text-foreground">Browse by Category</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Link key={category.name} href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}>
                      <div className="group flex items-center gap-3 rounded-lg border border-border p-3 transition-all hover:border-primary hover:bg-primary/5">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                          <category.icon className="size-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {category.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">{category.count} articles</p>
                        </div>
                        <ChevronRight className="size-4 text-muted-foreground" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Image src="/logo.jpg" alt="Logo" width={24} height={24} className="size-6" />
                <span className="text-lg font-semibold text-foreground">Tech Savvy Hub</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Add your blog description here.</p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Content</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    All Articles
                  </Link>
                </li>
                <li>
                  <Link href="/category/1" className="text-muted-foreground hover:text-primary transition-colors">
                    Category 1
                  </Link>
                </li>
                <li>
                  <Link href="/category/2" className="text-muted-foreground hover:text-primary transition-colors">
                    Category 2
                  </Link>
                </li>
                <li>
                  <Link href="/category/3" className="text-muted-foreground hover:text-primary transition-colors">
                    Category 3
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Policies</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-foreground">Newsletter</h4>
              {!footerSubmitted ? (
                <>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Subscribe to get the latest articles delivered to your inbox.
                  </p>
                  <form onSubmit={handleFooterSubmit} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={footerEmail}
                      onChange={(e) => setFooterEmail(e.target.value)}
                      required
                      className="bg-background text-foreground placeholder:text-muted-foreground"
                      aria-label="Email address"
                    />
                    <Button type="submit" variant="default" className="w-full">
                      Subscribe
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <p className="text-sm font-semibold text-foreground">Thank You!</p>
                  <p className="text-sm text-muted-foreground mt-2">You're now subscribed.</p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Tech Savvy Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
