"use client"

import { Mail, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-full">
                <Mail size={24} className="text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new collections, and insider tips
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold flex items-center justify-center gap-2 hover-lift whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={18} />
              </button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
