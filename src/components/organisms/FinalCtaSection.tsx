import { Button } from "@/components/atoms/Button";
import Image from "next/image";

export function FinalCtaSection() {
  return (
    <section className="bg-navy px-6 py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl border border-white/20">
          <Image
            className="h-56 w-full object-cover sm:h-72 lg:h-80"
            alt="Executive team collaborating over strategic planning documents"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          
            width={1600}
            height={900}
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl">Elevate Your Strategy Today</h2>
          <p className="mb-10 text-lg leading-relaxed text-slate-300 sm:text-xl">
            Join the ranks of successful corporations and legal firms that trust Stratena for their most critical
            documentation.
          </p>
          <Button variant="inverse" size="lg">
            Contact Stratena
          </Button>
        </div>
      </div>
    </section>
  );
}
