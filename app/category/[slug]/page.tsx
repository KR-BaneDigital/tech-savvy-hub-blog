import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts, getAllCategories } from "@/lib/blog-data"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${categoryName} Articles | PureWell Living`,
    description: `Explore all articles about ${categoryName.toLowerCase()} and learn how to avoid harmful chemicals.`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const categoryPosts = blogPosts.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === slug)

  const allCategories = getAllCategories()

  return (
    <div className="flex min-h-screen flex-col">
      <BlogHeader />
      <main className="flex-1">
        {/* Category Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">{categoryName}</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {categoryName} Articles
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
                Discover trusted insights and expert guidance about {categoryName.toLowerCase()}.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Articles Grid */}
              {categoryPosts.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2">
                  {categoryPosts.map((post) => (
                    <Card key={post.id} className="group overflow-hidden bg-card">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-3 flex items-center gap-3">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="size-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h2 className="mb-3 text-xl font-bold leading-tight text-card-foreground group-hover:text-primary">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="mb-4 leading-relaxed text-muted-foreground line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{post.date}</span>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="ghost" size="sm" className="gap-2">
                              Read More
                              <ArrowRight className="size-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-lg text-muted-foreground">No articles found in this category.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Categories Navigation */}
              <Card className="bg-card p-6">
                <h3 className="mb-4 text-lg font-bold text-card-foreground">Browse by Category</h3>
                <div className="flex flex-col gap-2">
                  {allCategories.map((category) => {
                    const catSlug = category.toLowerCase().replace(/\s+/g, "-")
                    const count = blogPosts.filter((p) => p.category === category).length
                    const isActive = catSlug === slug

                    return (
                      <Link
                        key={category}
                        href={`/category/${catSlug}`}
                        className={`flex items-center justify-between rounded-lg px-4 py-2 text-sm transition-colors ${
                          isActive ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                        }`}
                      >
                        <span className={isActive ? "font-semibold" : ""}>{category}</span>
                        <Badge variant={isActive ? "default" : "secondary"} className="ml-2">
                          {count}
                        </Badge>
                      </Link>
                    )
                  })}
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="bg-accent p-6 text-accent-foreground">
                <h3 className="mb-3 text-lg font-bold">Stay Updated</h3>
                <p className="mb-4 text-sm leading-relaxed">
                  Get the latest articles and insights delivered to your inbox.
                </p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
              </Card>
            </aside>
          </div>
        </div>
      </main>
      <BlogFooter />
    </div>
  )
}
