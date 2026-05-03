interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const brown  = variant === "light" ? "#E8C89A" : "#8B5E3C";
  const gray   = variant === "light" ? "#C9CDD6" : "#6B7280";
  const green  = "#2D5016";

  const dim = { sm: 36, md: 48, lg: 64 }[size];
  const wSize = { sm: "text-xs", md: "text-sm", lg: "text-lg" }[size];
  const eSize = { sm: "text-[8px]", md: "text-[10px]", lg: "text-xs" }[size];

  return (
    // SUBSTITUIR: inserir arquivo PNG/SVG oficial do logo La Nature Eventos
    <div className="flex flex-col items-center gap-1 select-none">
      <div
        className="flex items-center justify-center rounded-full border-2 shrink-0"
        style={{ width: dim, height: dim, borderColor: green }}
      >
        <span className="font-serif font-semibold" style={{ color: green, fontSize: dim * 0.36 }}>
          LN
        </span>
      </div>
      <div className="flex flex-col items-center leading-none gap-[2px]">
        <span className={`font-serif font-medium tracking-[0.22em] uppercase ${wSize}`} style={{ color: brown }}>
          La Nature
        </span>
        <span className={`font-sans font-light tracking-[0.38em] uppercase ${eSize}`} style={{ color: gray }}>
          Eventos
        </span>
      </div>
    </div>
  );
}
