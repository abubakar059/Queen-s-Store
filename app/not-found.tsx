"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass p-12 rounded-2xl animate-fade-in-up">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold flex items-center gap-2"
            >
              <Home size={20} /> Go Home
            </Link>
            <Link
              href="/products"
              className="px-8 py-3 glass rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold flex items-center gap-2"
            >
              <ArrowLeft size={20} /> Shop Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
