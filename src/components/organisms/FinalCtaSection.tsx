import { Button } from "@/components/atoms/Button";

export function FinalCtaSection() {
  return (
    <section className="bg-navy px-6 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-4xl font-extrabold text-white">Contact Stratena</h2>
        <p className="mb-10 text-xl leading-relaxed text-slate-300">
          Share a few details about your business, your objective, and your timeline, and we will help guide the next
          step with a focused and professional approach.
        </p>
        <Button variant="inverse" size="lg">
          Start Your Business Planning Conversation
        </Button>
      </div>
    </section>
  );
}
