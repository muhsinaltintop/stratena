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
            alt="Executive team discussing strategy around a laptop"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtsHn8gZW7p_jiyV9DFsEXbEYazt0mXEGKYelb7Aj0mXtllaLf52jDnia0On8X2HWa3J2AXATSDcCf62G6QDXSuoKf6sRhIbWq08OmJPe34aAh7Wx28e81uQ771Ss8nOvFDWiVA5bhl19-NQw9Gu1dPYExtZajE4Kiv7O4RPkvg56GxRoqDGADtAAQDjOY0V9a0LKk1zGzU_U7_wWkQ94CzplKQS7fPqPbHTLHWp-5DDLjK-g87bGB4tUkVudb-ffWIb-trKIAEF9p"
          
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
