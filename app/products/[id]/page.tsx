"use client"

import { useState } from "react"
import Link from "next/link"
import { products } from "@/lib/products"
import { useCart } from "@/context/cart-context"
import { Heart, ShoppingCart, ArrowLeft, Star } from "lucide-react"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addItem } = useCart()

  if (!product) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="flex items-center gap-2 text-primary hover:text-accent mb-8">
            <ArrowLeft size={20} /> Back to Products
          </Link>
          <p className="text-2xl">Product not found</p>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      category: product.category,
    })
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="flex items-center gap-2 text-primary hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="glass p-8 rounded-2xl">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full rounded-xl" />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <p className="text-accent font-semibold mb-2">{product.category}</p>
              <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">({product.reviews} reviews)</p>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-8">{product.description}</p>

            {/* Price */}
            <div className="mb-8">
              <p className="text-5xl font-bold text-accent mb-2">${product.price}</p>
              {product.discount && <p className="text-muted-foreground">Save {product.discount}% on this item</p>}
            </div>

            {/* Stock Status */}
            <div className="mb-8">
              <p className={`text-lg font-semibold ${product.inStock ? "text-green-500" : "text-red-500"}`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <label className="font-semibold">Quantity:</label>
              <div className="flex items-center gap-2 glass p-2 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-white/10 rounded transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-1 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 hover:bg-white/10 rounded transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-8 py-4 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 ${
                  isWishlisted ? "bg-accent text-accent-foreground" : "glass hover:bg-white/20"
                }`}
              >
                <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Product Info */}
            <div className="glass p-6 rounded-xl space-y-4">
              <div>
                <p className="font-semibold mb-2">Shipping</p>
                <p className="text-muted-foreground">Free shipping on orders over $50</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Returns</p>
                <p className="text-muted-foreground">30-day money-back guarantee</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Support</p>
                <p className="text-muted-foreground">24/7 customer support available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/products/${p.id}`}>
                  <div className="glass p-4 rounded-xl hover-lift cursor-pointer h-full">
                    <img
                      src={p.image || "/placeholder.svg"}
                      alt={p.name}
                      className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                    <p className="text-2xl font-bold text-accent">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
