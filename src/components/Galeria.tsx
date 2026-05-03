import { useScrollAnimation } from "../hooks/useScrollAnimation";

const fotos = [
  { src: "https://picsum.photos/800/600?random=30", alt: "Vista aérea do La Nature Eventos", cls: "col-span-2 row-span-2" },
  /* SUBSTITUIR: foto da vista aérea do espaço */
  { src: "https://picsum.photos/600/400?random=31", alt: "Casarão colonial — fachada", cls: "col-span-1 row-span-1" },
  /* SUBSTITUIR: foto do Casarão / fachada colonial */
  { src: "https://picsum.photos/600/400?random=32", alt: "Tenda das Palmeiras decorada", cls: "col-span-1 row-span-1" },
  /* SUBSTITUIR: foto da Tenda das Palmeiras decorada */
  { src: "https://picsum.photos/600/400?random=33", alt: "Gramado com evento ao ar livre", cls: "col-span-1 row-span-1" },
  /* SUBSTITUIR: foto do Gramado com evento em andamento */
  { src: "https://picsum.photos/600/400?random=34", alt: "Detalhe de decoração — lounge", cls: "col-span-1 row-span-1" },
  /* SUBSTITUIR: foto de detalhe de decoração / lounge */
  { src: "https://picsum.photos/800/400?random=35", alt: "Acesso pelo Parque Estadual do Rola Moça", cls: "col-span-2 row-span-1" },
  /* SUBSTITUIR: foto do acesso pelo Parque Estadual do Rola Moça */
];

export function Galeria() {
  const ref = useScrollAnimation();
  return (
    <section id="galeria" className="py-24 px-6 relative" style={{ backgroundColor: "#F5F0EB" }} ref={ref}>
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-40 blob-shape-2 pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(-25%, 25%)" }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-on-scroll">
          <p className="font-sans text-xs tracking-[0.35em] uppercase mb-3" style={{ color: "#8B5E3C" }}>Galeria</p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#2D5016" }}>O espaço em imagens</h2>
        </div>
        <div className="animate-on-scroll grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3 md:gap-4">
          {fotos.map((foto, i) => (
            <div key={i} className={`${foto.cls} overflow-hidden rounded-xl group`}>
              <img src={foto.src} alt={foto.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
