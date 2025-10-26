"use client"

import Link from "next/link"
import { Heart, ArrowLeft, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { products } from "@/lib/products"

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<string[]>([])
  const { addItem } = useCart()

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id))

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

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent mb-8">
          <ArrowLeft size={20} /> Back Home
        </Link>

        <h1 className="text-5xl font-bold mb-12">My Wishlist</h1>

        {wishlistProducts.length === 0 ? (
          <div className="glass p-12 rounded-2xl text-center">
            <Heart size={64} className="mx-auto mb-4 text-muted-foreground opacity-50" />
            <h2 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h2>
            <p className="text-muted-foreground mb-8">Start adding your favorite products to your wishlist</p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="glass p-4 rounded-xl hover-lift group">
                <Link href={`/products/${product.id}`}>
                  <div className="relative mb-4 overflow-hidden rounded-lg cursor-pointer">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>

                <Link href={`/products/${product.id}`}>
                  <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                <div className="flex justify-between items-center mb-4">
                  <p className="text-2xl font-bold text-accent">${product.price}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} /> Add
                  </button>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="px-4 py-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                  >
                    <Heart size={18} fill="currentColor" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
