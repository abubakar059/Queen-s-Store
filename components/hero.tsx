"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent leading-tight">
            Elegance Redefined
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover premium fashion, luxury accessories, and timeless pieces that celebrate your unique style
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold flex items-center justify-center gap-2 hover-lift">
              Shop Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass text-foreground rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
              Explore Collections
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mt-12 animate-slide-in-right">
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Featured Collection"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
