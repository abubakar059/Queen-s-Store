"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  })

  if (items.length === 0 && !orderPlaced) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/cart" className="flex items-center gap-2 text-primary hover:text-accent mb-8">
            <ArrowLeft size={20} /> Back to Cart
          </Link>
          <div className="glass p-12 rounded-2xl text-center">
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">Add items to your cart before checking out</p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    )
  }

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 rounded-2xl text-center animate-fade-in-up">
            <CheckCircle size={80} className="mx-auto mb-6 text-green-500" />
            <h1 className="text-5xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-xl text-muted-foreground mb-2">Thank you for your purchase</p>
            <p className="text-muted-foreground mb-8">Order confirmation has been sent to {formData.email}</p>

            <div className="bg-white/5 p-6 rounded-xl mb-8 text-left">
              <h2 className="text-2xl font-bold mb-4">Order Details</h2>
              <div className="space-y-2 mb-6 pb-6 border-b border-white/10">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <p>
                      {item.name} x {item.quantity}
                    </p>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-lg font-bold">
                <p>Total:</p>
                <p className="text-accent">${(total + (total > 50 ? 0 : 5) + total * 0.1).toFixed(2)}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="/products"
                className="flex-1 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Continue Shopping
              </Link>
              <Link
                href="/account"
                className="flex-1 px-8 py-3 glass rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold"
              >
                View Orders
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      setOrderPlaced(true)
      clearCart()
    }
  }

  const shippingCost = total > 50 ? 0 : 5
  const tax = total * 0.1
  const finalTotal = total + shippingCost + tax

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/cart" className="flex items-center gap-2 text-primary hover:text-accent mb-8">
          <ArrowLeft size={20} /> Back to Cart
        </Link>

        <h1 className="text-5xl font-bold mb-12">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {/* Step Indicator */}
            <div className="flex gap-4 mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      s <= step ? "bg-primary" : "bg-white/10"
                    }`}
                  />
                  <p className="text-sm mt-2 text-muted-foreground">
                    {s === 1 ? "Shipping" : s === 2 ? "Billing" : "Payment"}
                  </p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Shipping */}
              {step === 1 && (
                <div className="glass p-8 rounded-2xl space-y-6 animate-fade-in-up">
                  <h2 className="text-2xl font-bold">Shipping Address</h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Billing */}
              {step === 2 && (
                <div className="glass p-8 rounded-2xl space-y-6 animate-fade-in-up">
                  <h2 className="text-2xl font-bold">Billing Address</h2>
                  <p className="text-muted-foreground">Same as shipping address</p>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="glass p-8 rounded-2xl space-y-6 animate-fade-in-up">
                  <h2 className="text-2xl font-bold">Payment Method</h2>

                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="cardExpiry"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="text"
                      name="cardCVC"
                      placeholder="CVC"
                      value={formData.cardCVC}
                      onChange={handleInputChange}
                      required
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 px-8 py-3 glass rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
                >
                  {step === 3 ? "Place Order" : "Continue"}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass p-8 rounded-2xl sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-white/10 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <p className="text-muted-foreground">
                      {item.name} x {item.quantity}
                    </p>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p className="font-semibold">${total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Shipping</p>
                  <p className="font-semibold">{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Tax</p>
                  <p className="font-semibold">${tax.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex justify-between">
                <p className="text-xl font-bold">Total</p>
                <p className="text-2xl font-bold text-accent">${finalTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
