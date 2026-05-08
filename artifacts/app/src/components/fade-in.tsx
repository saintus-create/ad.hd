import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 520,
  distance = 24,
  threshold = 0.12,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
        transition: `opacity ${duration}ms cubic-bezier(.4,0,.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(.4,0,.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

interface FadeInGroupProps {
  children: React.ReactNode[];
  className?: string;
  stagger?: number;
  baseDelay?: number;
  duration?: number;
  distance?: number;
}

export function FadeInGroup({
  children,
  className,
  stagger = 80,
  baseDelay = 0,
  duration = 520,
  distance = 20,
}: FadeInGroupProps) {
  return (
    <>
      {children.map((child, i) => (
        <FadeIn
          key={i}
          className={className}
          delay={baseDelay + i * stagger}
          duration={duration}
          distance={distance}
        >
          {child}
        </FadeIn>
      ))}
    </>
  );
}
