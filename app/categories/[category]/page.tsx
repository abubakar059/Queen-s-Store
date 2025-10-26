"use client"

import Link from "next/link"
import { products } from "@/lib/products"
import { useCart } from "@/context/cart-context"
import { ArrowLeft, ShoppingCart } from "lucide-react"

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1)
  const categoryProducts = products.filter((p) => p.category === categoryName)
  const { addItem } = useCart()

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
        <Link href="/categories" className="flex items-center gap-2 text-primary hover:text-accent mb-8">
          <ArrowLeft size={20} /> Back to Categories
        </Link>

        <h1 className="text-5xl font-bold mb-4">{categoryName}</h1>
        <p className="text-xl text-muted-foreground mb-12">{categoryProducts.length} products in this category</p>

        {categoryProducts.length === 0 ? (
          <div className="glass p-12 rounded-2xl text-center">
            <p className="text-2xl text-muted-foreground">No products found in this category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
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
                  <ShoppingCart size={18} /> Add
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
