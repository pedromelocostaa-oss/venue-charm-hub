import { useScrollAnimation } from "../hooks/useScrollAnimation";

const WA_LINK = "https://wa.me/5531991964746";

const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const incluso = [
  "Uso exclusivo do espaço durante o período contratado",
  "Acesso antecipado para montagem e decoração",
  "Cozinha completa de 75m²",
  "Estacionamento para até 90 veículos",
  "Banheiros adaptados para PCD",
];

export function Pacote() {
  const ref = useScrollAnimation();
  return (
    <section id="pacote" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "#F5F0EB" }} ref={ref}>
      <div className="absolute top-0 left-0 w-72 h-72 opacity-40 blob-shape pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(-30%, -30%)" }} />
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-30 blob-shape-2 pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(25%, 25%)" }} />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <p className="font-sans text-xs tracking-[0.35em] uppercase mb-3" style={{ color: "#8B5E3C" }}>Pacote Disponível</p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#2D5016" }}>
            Cerimônia &amp; Recepção
          </h2>
        </div>
        <div className="animate-on-scroll rounded-3xl overflow-hidden shadow-xl" style={{ backgroundColor: "#ffffff" }}>
          <div className="h-56 sm:h-72 overflow-hidden">
            {/* SUBSTITUIR: foto do Casarão ou da Tenda decorada para casamento */}
            <img src="https://picsum.photos/900/500?random=50" alt="Cerimônia e recepção no La Nature Eventos" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="p-8 sm:p-12">
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: "#6B7280" }}>
              Uso integral dos três ambientes por até{" "}
              <strong className="font-semibold" style={{ color: "#2D5016" }}>12 horas</strong>,
              com acesso antecipado para montagem e decoração. Uma experiência completa,
              do primeiro detalhe à última lembrança.
            </p>
            <div className="mb-10">
              <p className="font-sans text-xs tracking-[0.3em] uppercase mb-5" style={{ color: "#8B5E3C" }}>O que está incluso</p>
              <ul className="space-y-3">
                {incluso.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#2D5016" }}>✓</span>
                    <span className="font-sans text-sm leading-relaxed" style={{ color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-cormorant text-base italic mb-8 leading-relaxed" style={{ color: "#8B5E3C" }}>
              O valor do pacote é apresentado no orçamento personalizado,
              de acordo com a data e as necessidades do seu evento.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-sans font-semibold text-white text-base tracking-wide transition-all hover:scale-105 hover:brightness-110 active:scale-95 shadow-md"
              style={{ backgroundColor: "#2D5016" }}
            >
              <WaIcon />
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
