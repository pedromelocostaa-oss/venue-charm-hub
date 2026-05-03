interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const brownColor = variant === "light" ? "#E8C89A" : "#8B5E3C";
  const grayColor = variant === "light" ? "#D1D5DB" : "#6B7280";
  const greenColor = "#2D5016";

  const sizes = {
    sm: { icon: 40, wt: "text-sm", et: "text-[9px]" },
    md: { icon: 56, wt: "text-lg", et: "text-[11px]" },
    lg: { icon: 72, wt: "text-2xl", et: "text-sm" },
  };
  const s = sizes[size];

  return (
    /* SUBSTITUIR: inserir SVG oficial do logo La Nature Eventos */
    <div className="flex flex-col items-center gap-1 select-none">
      <div
        className="flex items-center justify-center rounded-full border-2"
        style={{ width: s.icon, height: s.icon, borderColor: greenColor }}
      >
        <span
          className="font-serif font-bold leading-none"
          style={{ color: greenColor, fontSize: s.icon * 0.38 }}
        >
          LN
        </span>
      </div>
      <div className="flex flex-col items-center leading-tight">
        <span
          className={`font-serif font-medium tracking-[0.25em] uppercase ${s.wt}`}
          style={{ color: brownColor }}
        >
          La Nature
        </span>
        <span
          className={`font-sans font-light tracking-[0.4em] uppercase ${s.et}`}
          style={{ color: grayColor }}
        >
          Eventos
        </span>
      </div>
    </div>
  );
}
