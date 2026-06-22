import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Ironwood Landscaping",
  description: "Ironwood Landscaping privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-8">Privacy Policy</h1>
        <div className="prose prose-sm text-ink/70 leading-relaxed space-y-4">
          <p>Ironwood Landscaping (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This policy explains how we collect, use, and protect information submitted through our website.</p>
          <h2 className="font-display font-semibold text-lg text-ink mt-8">Information we collect</h2>
          <p>When you submit a contact or estimate request, we collect the information you provide: name, phone, email, address, and any message content. We may also collect basic analytics data (page views, device type) through privacy-respecting analytics.</p>
          <h2 className="font-display font-semibold text-lg text-ink mt-8">How we use it</h2>
          <p>Your information is used solely to respond to your inquiry, provide estimates, and deliver our services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          <h2 className="font-display font-semibold text-lg text-ink mt-8">Contact</h2>
          <p>Questions about this policy? Email us at hello@ironwoodtucson.com or call (520) 000-0000.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
