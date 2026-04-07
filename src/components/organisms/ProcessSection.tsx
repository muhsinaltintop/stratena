import { ProcessStep } from "@/components/molecules/ProcessStep";

const steps = [
  {
    title: "E-1 / E-2 Business Plans",
    description:
      "Plans built to explain trade or investment models, market opportunity, hiring logic, and practical growth.",
  },
  {
    title: "EB-1C / EB-2 NIW / EB-5 Plans",
    description:
      "Structured narratives connecting expansion strategy, proposed endeavors, job creation, and financial direction.",
  },
  {
    title: "H-1B / L-1 Business Plans",
    description:
      "Clear operating models for startup and cross-border contexts that show commercial activity and execution readiness.",
  },
  {
    title: "SBA Loan Business Plans",
    description:
      "Lender-facing plans with use-of-funds clarity, market context, operational detail, and disciplined projections.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <img
            className="rounded-2xl shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
            alt="Executive team discussing strategy around a laptop"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtsHn8gZW7p_jiyV9DFsEXbEYazt0mXEGKYelb7Aj0mXtllaLf52jDnia0On8X2HWa3J2AXATSDcCf62G6QDXSuoKf6sRhIbWq08OmJPe34aAh7Wx28e81uQ771Ss8nOvFDWiVA5bhl19-NQw9Gu1dPYExtZajE4Kiv7O4RPkvg56GxRoqDGADtAAQDjOY0V9a0LKk1zGzU_U7_wWkQ94CzplKQS7fPqPbHTLHWp-5DDLjK-g87bGB4tUkVudb-ffWIb-trKIAEF9p"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h3 className="mb-12 text-4xl font-bold text-charcoal">Business Planning Services</h3>
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
