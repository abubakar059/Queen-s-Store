"use client"

import { useState } from "react"
import Link from "next/link"
import { products, categories } from "@/lib/products"
import { useCart } from "@/context/cart-context"
import { Heart, ShoppingCart } from "lucide-react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  const { addItem } = useCart()

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return 0
  })

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category,
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-12">Shop All Products</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass p-6 rounded-xl sticky top-24">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === cat ? "bg-primary text-primary-foreground" : "hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="glass p-4 rounded-xl hover-lift group">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative mb-4 overflow-hidden rounded-lg cursor-pointer">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.discount && (
                        <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                          -{product.discount}%
                        </div>
                      )}
                      <button className="absolute top-2 left-2 p-2 bg-white/20 hover:bg-white/40 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <Heart size={20} />
                      </button>
                    </div>
                  </Link>

                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-2xl font-bold text-accent">${product.price}</p>
                      <p className="text-xs text-muted-foreground">⭐ {product.rating}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
