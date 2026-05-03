import { useEffect, useRef } from "react";

export function useReveal(rootMargin = "0px 0px -60px 0px") {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { rootMargin }
    );

    container.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    if (container.classList.contains("reveal")) observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return ref;
}
