import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  targetId: string;
  className?: string;
}

export function ScrollIndicator({ targetId, className }: ScrollIndicatorProps) {
  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "absolute bottom-10 left-1/2 transform -translate-x-1/2 text-leather cursor-pointer animate-bounce",
        className
      )}
      onClick={scrollToTarget}
    >
      <ChevronDown className="h-6 w-6" />
    </div>
  );
}
