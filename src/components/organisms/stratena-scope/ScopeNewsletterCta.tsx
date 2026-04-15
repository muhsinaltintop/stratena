import Image from "next/image";
import { Button } from "@/components/atoms/Button";

export function ScopeNewsletterCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-20">
      <div className="relative overflow-hidden rounded-xl bg-navy p-10 md:p-16">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-10">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1PKIgQp9rr-SW9jfLEJBymvZ_JxWYRK_wI-OtBHcnt6K4Tw31D7kvQ3GvQhOxtcKyIieDYXGzIhUeWUBQPNkN5O2G7RmzzTwvKbvMCnKVL0kx2KMNTSZ9uyo5OgxR8gR-32X5-33Ffks0WVe_LlhbDvklBQ5pXNwGyPaUltYzGJdcI0zuLXuRAM-WrDRBNJiVRqaUMFgpjP0lVHjW0Do07UphmgddFuy1uM20udujGZBLBMgl3ecfpjkvWAfOfSTprXU_0xfuJgcc"
            alt="Abstract technology pattern"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        </div>

        <div className="relative z-10 max-w-2xl">
          <span className="mb-6 block text-[12px] font-bold uppercase tracking-[0.4em] text-slate-300">
            Confidential Briefing
          </span>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white">Subscribe to the Briefing</h2>
          <p className="mb-10 text-lg leading-relaxed text-slate-300">
            Join 25,000+ global decision-makers. Receive exclusive strategic intelligence, curated insights, and early
            access to our quarterly reports.
          </p>

          <form className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Professional Email Address"
              className="flex-grow rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" className="bg-primary px-10 py-4 hover:bg-[#675775]">
              Secure Access
            </Button>
          </form>

          <p className="mt-6 text-xs font-medium italic text-slate-500">
            Strategic Intelligence. Zero noise. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
