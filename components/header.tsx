"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, Search, Heart, User } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Queen's Grocery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-foreground hover:text-primary transition-colors duration-300">
              Shop
            </Link>
            <Link href="/categories" className="text-foreground hover:text-primary transition-colors duration-300">
              Categories
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Link href="/search" className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
              <Search size={20} />
            </Link>
            <Link href="/wishlist" className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
              <Heart size={20} />
            </Link>
            <Link href="/account" className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
              <User size={20} />
            </Link>
            <Link href="/cart" className="relative p-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            <Link
              href="/products"
              className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              Shop
            </Link>
            <Link
              href="/categories"
              className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              Categories
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
