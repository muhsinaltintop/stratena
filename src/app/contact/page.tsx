"use client";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message")
      })
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully. We will contact you shortly.");
      form.reset();
    } else {
      setStatus(result.error ?? "Unable to send message. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="bg-charcoal px-4 py-16 text-slate-200 sm:px-6 lg:px-20">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Contact Stratena</h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Share your needs and we&apos;ll get back to you. You can also reach us directly at info@stratena.com or +1 (832) 270-5239.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/30 p-6">
            <h2 className="text-xl font-semibold text-white">Direct contact</h2>
            <p className="mt-4 text-slate-300">Email: info@stratena.com</p>
            <p className="mt-2 text-slate-300">Phone: +1 (832) 270-5239</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-700 bg-slate-900/30 p-6">
            <h2 className="text-xl font-semibold text-white">Send us a message</h2>
            <div className="mt-4 space-y-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-md border border-slate-600 bg-charcoal p-3" />
              <input type="email" name="email" required placeholder="Email address" className="w-full rounded-md border border-slate-600 bg-charcoal p-3" />
              <input name="phone" placeholder="Phone number" className="w-full rounded-md border border-slate-600 bg-charcoal p-3" />
              <textarea name="message" required rows={5} placeholder="How can we help?" className="w-full rounded-md border border-slate-600 bg-charcoal p-3" />
              <button type="submit" disabled={loading} className="rounded-md bg-primary px-6 py-3 font-semibold text-black disabled:opacity-60">
                {loading ? "Sending..." : "Send message"}
              </button>
              {status && <p className="text-sm text-slate-300">{status}</p>}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
