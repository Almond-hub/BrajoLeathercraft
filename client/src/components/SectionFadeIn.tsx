import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

interface SectionFadeInProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  threshold?: number;
}

export function SectionFadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.1,
}: SectionFadeInProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getDirectionClasses = () => {
    switch (direction) {
      case "left":
        return "transform translate-x-[-30px]";
      case "right":
        return "transform translate-x-[30px]";
      case "up":
      default:
        return "transform translate-y-[30px]";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out opacity-0",
        getDirectionClasses(),
        isVisible && "opacity-100 transform translate-x-0 translate-y-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
