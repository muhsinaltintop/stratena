import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${light ? "text-white" : "text-charcoal"}`}>
      <Image src="/Stratena.png" alt="Stratena Logo" width="180" height="20"/>
    </div>
  );
}
