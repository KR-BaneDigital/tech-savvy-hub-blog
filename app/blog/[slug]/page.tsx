import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, Facebook, Twitter, Linkedin, Mail, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { getPostBySlug, getRelatedPosts, blogPosts } from "@/lib/blog-data"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | PureWell Living`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id)
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id)
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="min-h-screen">
      <BlogHeader />

      {/* Hero Banner */}
      <section className="relative bg-foreground">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="size-full object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-foreground/80 to-transparent">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Badge variant="secondary" className="mb-4 bg-primary text-primary-foreground">
              {post.category}
            </Badge>
            <h1 className="mb-4 text-4xl font-bold text-background lg:text-5xl text-balance">{post.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-background/90">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="size-4" />
                <span>{post.readTime}</span>
              </div>
              <span>•</span>
              <span>By {post.author.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Social Share Buttons */}
          <div className="mb-8 flex items-center justify-between border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <img
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                className="size-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-foreground">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <Button variant="outline" size="icon" aria-label="Share on Facebook">
                <Facebook className="size-4" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Share on Twitter">
                <Twitter className="size-4" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Share on LinkedIn">
                <Linkedin className="size-4" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Share via Email">
                <Mail className="size-4" />
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# ")) {
                      return `<h1 class="text-3xl font-bold text-foreground mt-8 mb-4">${line.slice(2)}</h1>`
                    } else if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">${line.slice(3)}</h2>`
                    } else if (line.startsWith("### ")) {
                      return `<h3 class="text-xl font-semibold text-foreground mt-6 mb-3">${line.slice(4)}</h3>`
                    } else if (line.startsWith("**") && line.endsWith("**")) {
                      return `<p class="font-semibold text-foreground my-4">${line.slice(2, -2)}</p>`
                    } else if (line.startsWith("- ")) {
                      return `<li class="text-muted-foreground ml-6 my-2">${line.slice(2)}</li>`
                    } else if (line.trim() === "") {
                      return ""
                    } else {
                      return `<p class="text-muted-foreground my-4 leading-relaxed">${line}</p>`
                    }
                  })
                  .join(""),
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2 border-t border-border pt-6">
            <span className="text-sm font-medium text-foreground">Tags:</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Author Bio */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <img
                  src={post.author.image || "/placeholder.svg"}
                  alt={post.author.name}
                  className="size-20 shrink-0 rounded-full object-cover"
                />
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">About {post.author.name}</h3>
                  <p className="mb-2 text-sm text-muted-foreground">{post.author.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.author.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments Placeholder */}
          <div className="mt-12 border-t border-border pt-8">
            <h3 className="mb-6 text-2xl font-bold text-foreground">Comments</h3>
            <Card className="bg-muted">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">Comments section coming soon. Stay tuned!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-muted py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="flex flex-col flex-1 p-5">
                      <Badge variant="secondary" className="mb-3 w-fit">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="mb-3 text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                        {relatedPost.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Read Article <ArrowRight className="size-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Previous/Next Navigation */}
      <section className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {previousPost ? (
              <Link href={`/blog/${previousPost.slug}`} className="group">
                <Card className="transition-shadow hover:shadow-md h-full">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronLeft className="size-4" />
                      <span>Previous Article</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {previousPost.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="group">
                <Card className="transition-shadow hover:shadow-md h-full">
                  <CardContent className="p-6 text-right">
                    <div className="mb-2 flex items-center justify-end gap-2 text-sm text-muted-foreground">
                      <span>Next Article</span>
                      <ChevronRight className="size-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {nextPost.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <BlogFooter />
    </div>
  )
}
