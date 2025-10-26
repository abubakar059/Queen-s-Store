"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent mb-8">
          <ArrowLeft size={20} /> Back Home
        </Link>

        <h1 className="text-5xl font-bold mb-12">Terms of Service</h1>

        <div className="glass p-12 rounded-2xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using The Queen's Grocery Store website, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on The
              Queen's Grocery Store website for personal, non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on The Queen's Grocery Store website are provided on an 'as is' basis. The Queen's Grocery
              Store makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall The Queen's Grocery Store or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on The Queen's Grocery Store website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground">
              The materials appearing on The Queen's Grocery Store website could include technical, typographical, or
              photographic errors. The Queen's Grocery Store does not warrant that any of the materials on its website
              are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Links</h2>
            <p className="text-muted-foreground">
              The Queen's Grocery Store has not reviewed all of the sites linked to its website and is not responsible
              for the contents of any such linked site. The inclusion of any link does not imply endorsement by The
              Queen's Grocery Store of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
            <p className="text-muted-foreground">
              The Queen's Grocery Store may revise these terms of service for its website at any time without notice. By
              using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
              in which The Queen's Grocery Store operates, and you irrevocably submit to the exclusive jurisdiction of
              the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
