"use client"

import Link from "next/link"
import { ArrowLeft, Package, Truck, CheckCircle } from "lucide-react"

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = {
    id: params.id,
    date: "2024-10-20",
    status: "Delivered",
    total: 125.99,
    items: [
      { id: "1", name: "Organic Tomatoes", quantity: 2, price: 4.99 },
      { id: "5", name: "Organic Apples", quantity: 1, price: 6.99 },
      { id: "9", name: "Organic Milk", quantity: 1, price: 4.49 },
    ],
    shipping: {
      address: "123 Main St, City, State 12345",
      method: "Standard Delivery",
      estimatedDate: "2024-10-22",
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/account" className="flex items-center gap-2 text-primary hover:text-accent mb-8">
          <ArrowLeft size={20} /> Back to Account
        </Link>

        <h1 className="text-5xl font-bold mb-12">Order Details</h1>

        {/* Order Header */}
        <div className="glass p-8 rounded-2xl mb-8">
          <div className="grid md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-white/10">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Order ID</p>
              <p className="text-2xl font-bold">{order.id}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Order Date</p>
              <p className="text-2xl font-bold">{order.date}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Total Amount</p>
              <p className="text-2xl font-bold text-accent">${order.total}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Status</p>
              <div className="flex items-center gap-2">
                <CheckCircle size={24} className="text-green-500" />
                <p className="text-2xl font-bold text-green-500">{order.status}</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            <p className="font-bold mb-4">Delivery Timeline</p>
            {[
              { icon: Package, label: "Order Placed", date: "Oct 20, 2024", completed: true },
              { icon: Truck, label: "In Transit", date: "Oct 21, 2024", completed: true },
              { icon: CheckCircle, label: "Delivered", date: "Oct 22, 2024", completed: true },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className={`p-2 rounded-lg ${step.completed ? "bg-green-500/20" : "bg-white/10"}`}>
                  <step.icon size={24} className={step.completed ? "text-green-500" : "text-muted-foreground"} />
                </div>
                <div>
                  <p className="font-bold">{step.label}</p>
                  <p className="text-sm text-muted-foreground">{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Items */}
        <div className="glass p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-6">Order Items</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0"
              >
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                </div>
                <p className="text-lg font-bold text-accent">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Information */}
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Delivery Address</p>
              <p className="font-bold">{order.shipping.address}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Shipping Method</p>
              <p className="font-bold">{order.shipping.method}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Estimated Delivery</p>
              <p className="font-bold">{order.shipping.estimatedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
