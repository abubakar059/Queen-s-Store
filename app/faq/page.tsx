"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ArrowLeft } from "lucide-react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Simply browse our products, add items to your cart, and proceed to checkout. Fill in your shipping and payment details, and your order will be confirmed.",
    },
    {
      question: "What are your delivery times?",
      answer:
        "We offer same-day delivery in selected areas and standard delivery within 2-3 business days. Delivery times are shown during checkout.",
    },
    {
      question: "Do you deliver to my area?",
      answer:
        "We deliver to most areas within the city and surrounding regions. Enter your postal code during checkout to check if we deliver to your location.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day money-back guarantee on all products. If you're not satisfied, contact our support team for a hassle-free return.",
    },
    {
      question: "Are all products organic?",
      answer:
        "Most of our products are certified organic. We clearly label non-organic items. All products meet our strict quality standards.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You'll receive a tracking link via email once your order ships. You can also track your order from your account dashboard.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, digital wallets, and bank transfers. All payments are secure and encrypted.",
    },
    {
      question: "Can I modify my order after placing it?",
      answer:
        "Orders can be modified within 1 hour of placement. Contact our support team immediately if you need to make changes.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent mb-8">
          <ArrowLeft size={20} /> Back Home
        </Link>

        <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground mb-12">Find answers to common questions about our service</p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/10 transition-colors duration-300"
              >
                <p className="text-lg font-bold text-left">{faq.question}</p>
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 py-6 border-t border-white/10 bg-white/5 animate-fade-in-up">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="glass p-12 rounded-2xl text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-8">Our support team is here to help</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
