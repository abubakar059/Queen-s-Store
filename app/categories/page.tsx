"use client"

import Link from "next/link"
import { categories, products } from "@/lib/products"
import { ArrowRight } from "lucide-react"

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-4">Shop by Category</h1>
        <p className="text-xl text-muted-foreground mb-12">Browse our wide selection of fresh groceries and products</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories
            .filter((cat) => cat !== "All")
            .map((category) => {
              const categoryProducts = products.filter((p) => p.category === category)
              const categoryEmojis: Record<string, string> = {
                Vegetables: "🥬",
                Fruits: "🍎",
                Dairy: "🥛",
                Bakery: "🍞",
                Pantry: "🏺",
                Beverages: "☕",
              }

              return (
                <Link key={category} href={`/categories/${category.toLowerCase()}`}>
                  <div className="glass p-8 rounded-2xl hover-lift cursor-pointer h-full group">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {categoryEmojis[category] || "🛒"}
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{category}</h2>
                    <p className="text-muted-foreground mb-6">{categoryProducts.length} products available</p>

                    <div className="flex items-center gap-2 text-primary group-hover:text-accent transition-colors">
                      Shop Now <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
      </div>
    </main>
  )
}
