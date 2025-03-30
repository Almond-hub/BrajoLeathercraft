import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useScrollAnimation({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin]);

  return { ref, isVisible };
}
