"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, Home } from "lucide-react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass p-12 rounded-2xl animate-fade-in-up">
          <AlertCircle size={64} className="mx-auto mb-4 text-red-500" />
          <h1 className="text-4xl font-bold mb-4">Something Went Wrong</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={reset}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-8 py-3 glass rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold flex items-center gap-2"
            >
              <Home size={20} /> Go Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
