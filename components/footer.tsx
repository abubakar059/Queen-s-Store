"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Q</span>
              </div>
              <span className="font-bold text-lg">Queen's Grocery</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Fresh, organic groceries and premium products delivered to your door.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-primary transition-colors">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/products?sort=discount" className="hover:text-primary transition-colors">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 The Queen's Grocery Store. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
