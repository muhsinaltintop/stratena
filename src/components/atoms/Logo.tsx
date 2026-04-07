import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${light ? "text-white" : "text-charcoal"}`}>
      <Image src="/Stratena.png" alt="Stratena Logo" width="180" height="20" />
    </Link>
  );
}
