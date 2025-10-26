"use client"

import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
  onToggleWishlist?: (productId: string) => void
  isWishlisted?: boolean
}

export default function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
}: ProductCardProps) {
  return (
    <div className="glass p-4 rounded-xl hover-lift group h-full">
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
          {onToggleWishlist && (
            <button
              onClick={(e) => {
                e.preventDefault()
                onToggleWishlist(product.id)
              }}
              className="absolute top-2 left-2 p-2 bg-white/20 hover:bg-white/40 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
          )}
        </div>
      </Link>

      <Link href={`/products/${product.id}`}>
        <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors cursor-pointer line-clamp-2">
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
        onClick={() => onAddToCart(product)}
        disabled={!product.inStock}
        className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ShoppingCart size={18} /> Add
      </button>
    </div>
  )
}
