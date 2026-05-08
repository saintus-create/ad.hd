import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SliderTabsProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SliderTabs({ options, value, onChange, className }: SliderTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = buttonRefs.current[value];
    const container = containerRef.current;
    if (!el || !container) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setIndicator({
      left: elRect.left - containerRect.left + container.scrollLeft,
      width: elRect.width,
    });

    el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [value]);

  return (
    <div
      ref={containerRef}
      role="tablist"
      className={cn(
        "relative flex overflow-x-auto border-b border-white/10",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
    >
      <div
        className="absolute bottom-0 h-0.5 bg-[#005ea2] transition-all duration-200 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
        aria-hidden="true"
      />
      {options.map((opt) => (
        <button
          key={opt}
          ref={(el) => { buttonRefs.current[opt] = el; }}
          role="tab"
          aria-selected={value === opt}
          onClick={() => onChange(opt)}
          className={cn(
            "whitespace-nowrap px-4 py-2.5 text-sm font-medium transition-colors shrink-0",
            value === opt ? "text-white" : "t-muted hover:text-white"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
