"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function BlogHeader() {
  const [email, setEmail] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setIsOpen(false)
        setSubmitted(false)
        setEmail("")
      }, 2000)
    }
  }

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="Tech Savvy Hub Logo" width={32} height={32} className="size-8" />
            <span className="text-xl font-semibold text-foreground">Tech Savvy Hub</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <Link
              href="/category/1"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Category 1
            </Link>
            <Link
              href="/category/2"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Category 2
            </Link>
            <Link
              href="/category/3"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Category 3
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Blog
            </Link>
          </nav>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="default" size="sm" className="hidden md:inline-flex">
                Subscribe
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Subscribe to Our Newsletter</DialogTitle>
                <DialogDescription>
                  Get the latest articles and updates delivered directly to your inbox.
                </DialogDescription>
              </DialogHeader>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background"
                  />
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              ) : (
                <div className="py-8 text-center">
                  <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                  <p className="text-sm text-muted-foreground">You've successfully subscribed to our newsletter.</p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
