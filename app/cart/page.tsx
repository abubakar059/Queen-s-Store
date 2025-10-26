"use client"

import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="flex items-center gap-2 text-primary hover:text-accent mb-8">
            <ArrowLeft size={20} /> Continue Shopping
          </Link>

          <div className="glass p-12 rounded-2xl text-center">
            <ShoppingBag size={64} className="mx-auto mb-4 text-muted-foreground opacity-50" />
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8 text-lg">Start shopping to add items to your cart</p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products" className="flex items-center gap-2 text-primary hover:text-accent mb-8">
          <ArrowLeft size={20} /> Continue Shopping
        </Link>

        <h1 className="text-5xl font-bold mb-12">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="glass p-6 rounded-xl flex gap-6 items-center">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <Link
                      href={`/products/${item.id}`}
                      className="text-xl font-bold hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-muted-foreground">{item.category}</p>
                    <p className="text-lg font-bold text-accent mt-2">${item.price}</p>
                  </div>

                  <div className="flex items-center gap-2 glass p-2 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-white/10 rounded transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-1 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-white/10 rounded transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-xl font-bold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-500"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass p-8 rounded-2xl sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p className="font-semibold">${total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Shipping</p>
                  <p className="font-semibold">{total > 50 ? "Free" : "$5.00"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Tax</p>
                  <p className="font-semibold">${(total * 0.1).toFixed(2)}</p>
                </div>
              </div>

              <div className="flex justify-between mb-8">
                <p className="text-xl font-bold">Total</p>
                <p className="text-2xl font-bold text-accent">
                  ${(total + (total > 50 ? 0 : 5) + total * 0.1).toFixed(2)}
                </p>
              </div>

              <Link
                href="/checkout"
                className="w-full block text-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold mb-4"
              >
                Proceed to Checkout
              </Link>

              <button
                onClick={clearCart}
                className="w-full px-8 py-3 glass rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
