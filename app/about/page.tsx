"use client"

import Link from "next/link"
import { Leaf, Truck, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About The Queen's Grocery Store
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to bringing you the freshest, highest-quality groceries and organic products directly to
              your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At The Queen's Grocery Store, we believe that everyone deserves access to fresh, organic, and
                high-quality groceries. Our mission is to make premium grocery shopping convenient, affordable, and
                accessible to everyone.
              </p>
              <p className="text-lg text-muted-foreground">
                We partner directly with local farmers and suppliers to ensure that every product meets our strict
                quality standards and sustainability requirements.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <img src="/placeholder.svg?height=400&width=400" alt="Our mission" className="w-full rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Sustainability",
                desc: "We prioritize eco-friendly practices and sustainable sourcing",
              },
              {
                icon: Award,
                title: "Quality",
                desc: "Only the finest products make it to our shelves",
              },
              {
                icon: Truck,
                title: "Reliability",
                desc: "Fast, dependable delivery every single time",
              },
              {
                icon: Users,
                title: "Community",
                desc: "Supporting local farmers and communities",
              },
            ].map((value, i) => (
              <div key={i} className="glass p-8 rounded-2xl hover-lift text-center">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "500+", label: "Products Available" },
              { number: "100+", label: "Local Suppliers" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, i) => (
              <div key={i} className="glass p-8 rounded-2xl">
                <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 rounded-3xl text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Shop?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our wide selection of fresh groceries and premium products
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
