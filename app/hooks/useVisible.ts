import { useEffect, useRef, useState } from "react";

export const useVisible = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { isVisible, ref }
}
