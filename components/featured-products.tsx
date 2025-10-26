"use client"

import { Star, ShoppingCart, Heart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: "$299",
    rating: 4.8,
    reviews: 128,
    image: "/placeholder.svg?height=300&width=300",
    badge: "New",
  },
  {
    id: 2,
    name: "Diamond Necklace",
    price: "$599",
    rating: 5,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Premium",
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: "$449",
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Designer Heels",
    price: "$349",
    rating: 4.7,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Hot",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg">Handpicked luxury items for the discerning customer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group glass rounded-2xl overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 aspect-square">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 left-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                  <Heart size={18} className="text-primary" />
                </button>

                {/* Quick Add */}
                <button className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:from-black">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover-lift">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
