"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent mb-8">
          <ArrowLeft size={20} /> Back Home
        </Link>

        <h1 className="text-5xl font-bold mb-12">Privacy Policy</h1>

        <div className="glass p-12 rounded-2xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              The Queen's Grocery Store ("we", "us", "our", or "Company") operates the website. This page informs you of
              our policies regarding the collection, use, and disclosure of personal data when you use our Service and
              the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information Collection and Use</h2>
            <p className="text-muted-foreground mb-4">
              We collect several different types of information for various purposes to provide and improve our Service
              to you.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Personal Data: Name, email address, phone number, address</li>
              <li>Usage Data: Browser type, IP address, pages visited, time spent</li>
              <li>Payment Information: Credit card details (processed securely)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Use of Data</h2>
            <p className="text-muted-foreground mb-4">
              The Queen's Grocery Store uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Security of Data</h2>
            <p className="text-muted-foreground">
              The security of your data is important to us but remember that no method of transmission over the Internet
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
              protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at support@queensgrocery.com
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
