"use client"

export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block">
          <div className="w-16 h-16 border-4 border-white/20 border-t-primary rounded-full animate-spin"></div>
        </div>
        <p className="mt-6 text-lg text-muted-foreground">Loading...</p>
      </div>
    </main>
  )
}
