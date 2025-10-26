"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Get in touch with our team.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Mail,
              title: "Email",
              content: "support@queensgrocery.com",
              desc: "We'll respond within 24 hours",
            },
            {
              icon: Phone,
              title: "Phone",
              content: "+1 (555) 123-4567",
              desc: "Available 24/7 for support",
            },
            {
              icon: MapPin,
              title: "Address",
              content: "123 Main Street, City, State 12345",
              desc: "Visit our store or warehouse",
            },
          ].map((contact, i) => (
            <div key={i} className="glass p-8 rounded-2xl hover-lift text-center">
              <contact.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
              <p className="font-semibold mb-2">{contact.content}</p>
              <p className="text-muted-foreground">{contact.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="glass p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />

              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
