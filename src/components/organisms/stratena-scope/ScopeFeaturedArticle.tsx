import Image from "next/image";
import { Button } from "@/components/atoms/Button";

export function ScopeFeaturedArticle() {
  return (
    <section className="mx-auto mb-24 max-w-7xl px-6 lg:px-20">
      <article className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-2xl">
        <div className="grid items-stretch gap-0 md:grid-cols-2">
          <div className="flex flex-col justify-center p-10 md:p-14">
            <span className="mb-6 text-[12px] font-bold uppercase tracking-widest text-primary">Featured Deep Dive</span>
            <h2 className="mb-8 text-4xl font-extrabold leading-[1.1] text-navy md:text-5xl">
              The Geopolitical Reconfiguration of Global Capital Markets
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-slate-600">
              How shifting regulatory landscapes in the G7 are forcing a fundamental reassessment of institutional
              risk for sovereign wealth funds and private equity firms.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button className="inline-flex items-center gap-2" size="md">
                Read Full Analysis
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Button>
              <span className="text-sm font-semibold text-slate-400">18 Min Read</span>
            </div>
          </div>

          <div className="relative min-h-[380px] md:min-h-[500px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmSrldShv6-3O43V_AWVzaFoGlUzV400vAStfWUeuZ0l-ARTy42avTNCKkEaYF8vkkhcH7uYSHkdOCCHF9HeE1a5x7aoodXbguQBUbUyxaehMBuNacNUX-iamh8RuBcnsrJPorXe75n909YFFB8-tqUxdOLSktyHHt6M7cUB5FbnK550qT4xHfE0CuvrMD97GFohHbOiP4-soZolcBLM9lUcUwCX8wXaxC0APNdvgiuPIcMOsDr6_GLNed-Wkpg8Rn_bwKxTK95iVM"
              alt="Modern corporate architecture"
              fill
              className="object-cover grayscale contrast-125"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
