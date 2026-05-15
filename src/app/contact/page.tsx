"use client";

import { FormEvent, useState } from "react";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { SiteFooter } from "@/components/organisms/SiteFooter";

type FormStatus = {
  tone: "success" | "error";
  message: string;
} | null;

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
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
        setStatus({ tone: "success", message: "Message sent successfully. We will contact you shortly." });
        form.reset();
      } else {
        setStatus({ tone: "error", message: result.error ?? "Unable to send message. Please try again." });
      }
    } catch {
      setStatus({ tone: "error", message: "Network error. Please try again in a moment." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-charcoal text-slate-200">
      <SiteHeader />
      <main className="px-4 py-16 sm:px-6 lg:px-20">
        <section className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Contact Stratena</h1>
          <p className="mt-4 max-w-3xl text-slate-400">
            Share your goals and one of our advisors will get back to you. You can also contact us directly at info@stratena.com or +1 (832) 270-5239.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
            <aside className="rounded-2xl border border-slate-700 bg-slate-900/30 p-6">
              <h2 className="text-xl font-semibold text-white">Direct contact</h2>
              <p className="mt-4 text-slate-300">
                <span className="font-medium text-white">Email:</span> info@stratena.com
              </p>
              <p className="mt-2 text-slate-300">
                <span className="font-medium text-white">Phone:</span> +1 (832) 270-5239
              </p>
            </aside>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-700 bg-slate-900/30 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white">Send us a message</h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-300">
                  Full name
                  <input name="name" required className="mt-2 w-full rounded-md border border-slate-600 bg-charcoal p-3 text-white" />
                </label>

                <label className="text-sm text-slate-300">
                  Email address
                  <input type="email" name="email" required className="mt-2 w-full rounded-md border border-slate-600 bg-charcoal p-3 text-white" />
                </label>

                <label className="text-sm text-slate-300 sm:col-span-2">
                  Phone number
                  <input name="phone" className="mt-2 w-full rounded-md border border-slate-600 bg-charcoal p-3 text-white" />
                </label>

                <label className="text-sm text-slate-300 sm:col-span-2">
                  Message
                  <textarea name="message" required rows={6} className="mt-2 w-full rounded-md border border-slate-600 bg-charcoal p-3 text-white" />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="submit" disabled={loading} className="rounded-md bg-primary px-6 py-3 font-semibold text-black disabled:opacity-60">
                  {loading ? "Sending..." : "Send message"}
                </button>
                {status ? (
                  <p className={status.tone === "success" ? "text-sm text-emerald-300" : "text-sm text-rose-300"}>{status.message}</p>
                ) : null}
              </div>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
