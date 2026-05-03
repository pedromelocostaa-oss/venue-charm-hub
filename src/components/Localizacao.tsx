import { useScrollAnimation } from "../hooks/useScrollAnimation";

const MAPS_LINK = "https://maps.google.com/?q=Av.+Casa+Branca,+620,+Brumadinho,+MG";

export function Localizacao() {
  const ref = useScrollAnimation();
  return (
    <section id="localizacao" className="py-24 px-6 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 opacity-25 blob-shape pointer-events-none" style={{ backgroundColor: "#E8DDD4" }} />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <p className="font-sans text-xs tracking-[0.35em] uppercase mb-3" style={{ color: "#8B5E3C" }}>O Caminho Até Aqui</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight mb-6" style={{ color: "#2D5016" }}>
              A chegada já é parte da experiência
            </h2>
            <p className="font-sans text-base leading-relaxed mb-6" style={{ color: "#6B7280" }}>
              O espaço La Nature está situado a 28km de Belo Horizonte. O acesso é feito através do
              Parque Estadual do Rola Moça — com cachoeiras, trilhas e mirantes.
              O caminho até chegar já é uma atração à parte.
            </p>
            <div className="inline-flex flex-col gap-1 rounded-xl p-5 mb-8" style={{ backgroundColor: "#F5F0EB", borderLeft: "3px solid #2D5016" }}>
              <span className="font-sans text-xs tracking-widest uppercase" style={{ color: "#8B5E3C" }}>Endereço</span>
              <span className="font-serif text-lg font-medium" style={{ color: "#2D5016" }}>Av. Casa Branca, 620</span>
              <span className="font-sans text-sm" style={{ color: "#6B7280" }}>Brumadinho, MG · 35460-000</span>
            </div>
            <div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-sans font-semibold text-sm tracking-wide border-2 transition-all hover:scale-105 active:scale-95"
                style={{ borderColor: "#2D5016", color: "#2D5016" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.608 3.5-8.077a8 8 0 10-16 0c0 3.469 1.556 6.064 3.5 8.077a19.583 19.583 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Ver no Google Maps
              </a>
            </div>
          </div>
          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* SUBSTITUIR: foto do acesso pelo Parque Rola Moça ou vista da estrada */}
              <img src="https://picsum.photos/700/500?random=40" alt="Acesso ao La Nature Eventos pelo Parque Estadual do Rola Moça" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
