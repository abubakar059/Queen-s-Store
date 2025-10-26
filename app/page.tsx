"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, Truck, Award } from "lucide-react"
import { products, categories } from "@/lib/products"

export default function Home() {
  const featuredProducts = products.slice(0, 8)

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Fresh Groceries Delivered to Your Door
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Shop premium quality organic products, fresh vegetables, fruits, and pantry essentials. Experience the
                finest grocery shopping with The Queen's Store.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/products"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 font-semibold flex items-center gap-2"
                >
                  Shop Now <ArrowRight size={20} />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3 glass text-foreground rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block animate-slide-in-right">
              <div className="glass p-8 rounded-3xl relative overflow-hidden">
                <Image
                  src="../hero.jpg"
                  alt="Fresh groceries"
                  width={720}
                  height={480}
                  className="w-full rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "100% Organic", desc: "All products are certified organic and pesticide-free" },
              { icon: Truck, title: "Fast Delivery", desc: "Same-day delivery available in selected areas" },
              {
                icon: Award,
                title: "Quality Guaranteed",
                desc: "Premium quality products with satisfaction guarantee",
              },
            ].map((feature, i) => (
              <div key={i} className="glass p-8 rounded-2xl hover-lift text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase()}`}
                className="glass p-6 rounded-xl hover-lift text-center transition-all duration-300"
              >
                <div className="text-3xl mb-2">
                  {category === "Vegetables" && "🥬"}
                  {category === "Fruits" && "🍎"}
                  {category === "Dairy" && "🥛"}
                  {category === "Bakery" && "🍞"}
                  {category === "Pantry" && "🏺"}
                  {category === "Beverages" && "☕"}
                  {category === "All" && "🛒"}
                </div>
                <p className="font-semibold text-sm">{category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Products</h2>
            <Link href="/products" className="text-primary hover:text-accent transition-colors flex items-center gap-2">
              View All <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="glass p-4 rounded-xl hover-lift h-full cursor-pointer">
                  <div className="relative mb-4 overflow-hidden rounded-lg w-full h-48">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name} 
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 hover:scale-110"
                      priority={false}
                    />
                    {product.discount && (
                      <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                        -{product.discount}%
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <p className="text-2xl font-bold text-accent">${product.price}</p>
                      <p className="text-xs text-muted-foreground">
                        ⭐ {product.rating} ({product.reviews})
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 rounded-3xl text-center">
            <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get exclusive deals, fresh product updates, and recipes delivered to your inbox
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}