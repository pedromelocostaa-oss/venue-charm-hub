import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    el.querySelectorAll(".animate-on-scroll").forEach((t) => observer.observe(t));
    if (el.classList.contains("animate-on-scroll")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
