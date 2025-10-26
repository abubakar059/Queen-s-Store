"use client"

import { useState } from "react"
import Link from "next/link"
import { User, LogOut, Package, Heart, Settings } from "lucide-react"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
  })

  const orders = [
    {
      id: "ORD-001",
      date: "2024-10-20",
      total: 125.99,
      status: "Delivered",
      items: 5,
    },
    {
      id: "ORD-002",
      date: "2024-10-15",
      total: 89.5,
      status: "In Transit",
      items: 3,
    },
    {
      id: "ORD-003",
      date: "2024-10-10",
      total: 156.75,
      status: "Delivered",
      items: 8,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-12">My Account</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass p-6 rounded-2xl sticky top-24">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-bold">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                {[
                  { id: "profile", label: "Profile", icon: User },
                  { id: "orders", label: "Orders", icon: Package },
                  { id: "wishlist", label: "Wishlist", icon: Heart },
                  { id: "settings", label: "Settings", icon: Settings },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === item.id ? "bg-primary text-primary-foreground" : "hover:bg-white/10"
                    }`}
                  >
                    <item.icon size={20} />
                    {item.label}
                  </button>
                ))}
              </nav>

              <button className="w-full mt-8 px-4 py-3 glass rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-red-500">
                <LogOut size={20} /> Logout
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="glass p-8 rounded-2xl animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-8">Profile Information</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue={user.phone}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Address</label>
                    <input
                      type="text"
                      defaultValue={user.address}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-3xl font-bold">Order History</h2>

                {orders.map((order) => (
                  <div key={order.id} className="glass p-6 rounded-2xl hover-lift">
                    <div className="grid md:grid-cols-5 gap-4 items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Order ID</p>
                        <p className="font-bold">{order.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-bold">{order.date}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Items</p>
                        <p className="font-bold">{order.items}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total</p>
                        <p className="font-bold text-accent">${order.total}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            order.status === "Delivered"
                              ? "bg-green-500/20 text-green-500"
                              : "bg-blue-500/20 text-blue-500"
                          }`}
                        >
                          {order.status}
                        </span>
                        <Link href={`/orders/${order.id}`} className="text-primary hover:text-accent transition-colors">
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div className="glass p-8 rounded-2xl text-center animate-fade-in-up">
                <Heart size={64} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                <h2 className="text-3xl font-bold mb-4">Your Wishlist</h2>
                <p className="text-muted-foreground mb-8">You haven't added any items to your wishlist yet</p>
                <Link
                  href="/products"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Start Shopping
                </Link>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="glass p-8 rounded-2xl animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-8">Settings</h2>

                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div>
                      <p className="font-bold">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates about orders and promotions</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-6 h-6 cursor-pointer" />
                  </div>

                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div>
                      <p className="font-bold">SMS Notifications</p>
                      <p className="text-sm text-muted-foreground">Get SMS alerts for order updates</p>
                    </div>
                    <input type="checkbox" className="w-6 h-6 cursor-pointer" />
                  </div>

                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div>
                      <p className="font-bold">Marketing Emails</p>
                      <p className="text-sm text-muted-foreground">Receive exclusive deals and offers</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-6 h-6 cursor-pointer" />
                  </div>

                  <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold">
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
