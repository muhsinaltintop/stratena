import { Button } from "@/components/atoms/Button";
import { BalancedSplitSection } from "@/components/layout/BalancedSplitSection";
import Image from "next/image";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <BalancedSplitSection className="bg-navy" contentClassName="items-center">
      <div className="media-frame border-white/20">
        <Image
          className="media-aspect"
          alt="Clean-shaven American business team collaborating over planning documents"
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600"
          width={1600}
          height={900}
        />
      </div>
      <div className="flex h-full flex-col justify-center text-center lg:text-left">
        <h2 className="mb-6 text-2xl font-extrabold text-white sm:text-4xl">Elevate Your Strategy Today</h2>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:mb-10 sm:text-xl">
          Join the ranks of successful corporations and legal firms that trust Stratena for their most critical
          documentation.
        </p>
        <div className="flex">
          <Button as={Link} href="/contact" variant="inverse" size="lg" className="inline-flex w-full items-center justify-center sm:w-auto">
            Contact Stratena
          </Button>
        </div>
      </div>
    </BalancedSplitSection>
  );
}
