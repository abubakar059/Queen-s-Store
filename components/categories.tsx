"use client"

import { ShoppingBag, Sparkles, Heart, Zap } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Fashion",
    icon: ShoppingBag,
    color: "from-primary to-primary/50",
    count: "250+ Items",
  },
  {
    id: 2,
    name: "Accessories",
    icon: Sparkles,
    color: "from-accent to-accent/50",
    count: "180+ Items",
  },
  {
    id: 3,
    name: "Jewelry",
    icon: Heart,
    color: "from-secondary to-secondary/50",
    count: "120+ Items",
  },
  {
    id: 4,
    name: "Premium",
    icon: Zap,
    color: "from-primary/80 to-accent/80",
    count: "95+ Items",
  },
]

export default function Categories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Categories</h2>
          <p className="text-muted-foreground text-lg">Explore our curated collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="group glass p-8 rounded-2xl hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.count}</p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  Explore
                  <ArrowIcon />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}
