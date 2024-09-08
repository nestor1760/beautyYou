import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { headerState } from "../state/atoms/headerState";

export const useVisible = () => {
  const [_, setVisible] = useRecoilState(headerState);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
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

  return { ref }
}
