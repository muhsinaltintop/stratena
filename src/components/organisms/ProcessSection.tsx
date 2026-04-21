import { ProcessStep } from "@/components/molecules/ProcessStep";
import Image from "next/image";

const steps = [
  {
    title: "Review & Analysis",
    description: "Deep dive into existing business data and specific regulatory or funding requirements.",
  },
  {
    title: "Market Mapping",
    description: "Comprehensive competitive analysis and demographic positioning to validate the model.",
  },
  {
    title: "Narrative Construction",
    description: "Crafting a compelling, data-backed story that resonates with high-level reviewers.",
  },
  {
    title: "Final Delivery",
    description: "Precision editing and professional formatting for immediate submission.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Image
            className="rounded-2xl shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
            alt="Clean-shaven American executives reviewing strategy on a laptop"
            src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600"
          
            width={1600}
            height={900}
          />
        </div>

        <div className="order-1 lg:order-2">
          <h3 className="mb-12 text-4xl font-bold text-charcoal">Our Methodical Approach</h3>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <ProcessStep key={step.title} index={index + 1} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
