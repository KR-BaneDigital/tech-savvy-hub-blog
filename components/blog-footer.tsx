import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BlogFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image src="/logo.jpg" alt="Logo" width={24} height={24} className="size-6" />
              <span className="text-lg font-semibold text-foreground">Blog</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Add your blog description here.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Content</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <Link href="/category/1" className="text-muted-foreground hover:text-foreground transition-colors">
                  Category 1
                </Link>
              </li>
              <li>
                <Link href="/category/2" className="text-muted-foreground hover:text-foreground transition-colors">
                  Category 2
                </Link>
              </li>
              <li>
                <Link href="/category/3" className="text-muted-foreground hover:text-foreground transition-colors">
                  Category 3
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Newsletter</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to get the latest articles delivered to your inbox.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background text-foreground placeholder:text-muted-foreground"
                aria-label="Email address"
              />
              <Button type="submit" variant="default" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
