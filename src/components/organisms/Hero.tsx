import { Button } from "@/components/atoms/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:min-h-[75vh] lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Boutique Strategic Consulting
          </div>
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-charcoal lg:text-6xl">
            Business Plans Built for Serious Review
          </h1>
          <p className="max-w-lg text-xl leading-relaxed text-slate-500">
            Premium strategic support for high-level corporate and legal clients. We transform complex visions into
            investor-ready narratives.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>See Samples</Button>
            <Button variant="secondary">Contact Us</Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-xl border-8 border-white/50 shadow-2xl">
            <img
              className="h-full w-full object-cover"
              alt="Sophisticated modern boardroom with large windows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_a4ObikuKHT33TBXiaT5Wekwn7PU0YYW-keG7qh_wYX9MK-b8HpVYBu7gKolSxBgB8croToF-t5t3p1SXqukmdbIkUf1hMXmPgagczS6lBDYZC3qbjDC9NF3qbYWz_d6TUomSB6jsATgRQ1amIb6hAvvTomQEQW6D94IP1eTvoNBZ4U8jgMgzjbEiSCQtspAZGpvzFkYNy5LBQgVN3CkpmK2myjHm-dRuH9ciYHGOhakFl5BDuS63ChU_6rs6rg8nf8IpzNLpX8JY"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-6 shadow-xl md:block">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">Certified Strategy</p>
                <p className="text-xs text-slate-500">Industry Grade Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
