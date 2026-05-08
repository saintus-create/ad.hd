import { cn } from "@/lib/utils";

interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHead({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        "py-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest t-sub mb-3">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl font-bold text-white leading-tight">{title}</h1>
      {description && (
        <p className="mt-4 text-lg t-sub max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
