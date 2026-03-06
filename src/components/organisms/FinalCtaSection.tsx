import { Button } from "@/components/atoms/Button";

export function FinalCtaSection() {
  return (
    <section className="bg-navy px-6 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-4xl font-extrabold text-white">Elevate Your Strategy Today</h2>
        <p className="mb-10 text-xl leading-relaxed text-slate-300">
          Join the ranks of successful corporations and legal firms that trust Stratena for their most critical
          documentation.
        </p>
        <Button variant="inverse" size="lg">
          Contact Stratena
        </Button>
      </div>
    </section>
  );
}
