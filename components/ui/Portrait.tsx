import Image from "next/image";

/** Photo with a slightly retro treatment: warm tint, grain, a small tilt. */
export function Portrait({ className = "" }: { className?: string }) {
  return (
    <figure className={`portrait relative ${className}`}>
      <Image
        src="/portrait.jpg"
        alt="Yerlan Aubakirov"
        width={724}
        height={1086}
        priority={false}
        sizes="(min-width: 1024px) 360px, 70vw"
        className="h-auto w-full rounded-[18px] object-cover"
      />
      <figcaption className="mt-3 num text-sm text-text-faint">Leicester, 2026</figcaption>
    </figure>
  );
}
