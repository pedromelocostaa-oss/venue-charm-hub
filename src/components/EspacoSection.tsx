import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ambientes = [
  {
    nome: "Casarão Colonial",
    area: "350m²",
    descricao: "Telhado colonial, janelas antigas e varanda charmosa. Um espaço que carrega história e elegância em cada detalhe.",
    img: "https://picsum.photos/600/400?random=20",
    /* SUBSTITUIR: trocar src por foto oficial do Casarão Colonial */
    imgAlt: "Casarão Colonial — fachada e varanda",
  },
  {
    nome: "Tenda das Palmeiras",
    area: "200m²",
    descricao: "Tenda aberta, rodeada por verde, com ventilação e iluminação natural excepcionais. Perfeita para celebrações intimistas.",
    img: "https://picsum.photos/600/400?random=21",
    /* SUBSTITUIR: trocar src por foto oficial da Tenda das Palmeiras */
    imgAlt: "Tenda das Palmeiras decorada com luzes",
  },
  {
    nome: "Gramado",
    area: "",
    descricao: "Espaço ideal para welcomes, lounges e recepções ao ar livre. O verde ao redor cria um ambiente naturalmente deslumbrante.",
    img: "https://picsum.photos/600/400?random=22",
    /* SUBSTITUIR: trocar src por foto oficial do Gramado */
    imgAlt: "Gramado aberto para eventos ao ar livre",
  },
];

const diferenciais = [
  { icon: "🍽", label: "Cozinha de 75m²" },
  { icon: "🚗", label: "Estacionamento para 90 veículos" },
  { icon: "♿", label: "Banheiros adaptados PCD" },
];

export function EspacoSection() {
  const ref = useScrollAnimation();
  return (
    <section id="espaco" className="py-24 px-6 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 opacity-30 blob-shape pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(30%, -20%)" }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="font-sans text-xs tracking-[0.35em] uppercase mb-3" style={{ color: "#8B5E3C" }}>O Espaço</p>
          <h2 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight" style={{ color: "#2D5016" }}>
            Natureza e elegância<br className="hidden sm:block" /> em cada detalhe
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
            Rodeado por uma extensa paleta de tons verdes e um clima serrano, o La Nature Eventos traz aconchego e tranquilidade. O acesso pelo Parque Estadual do Rola Moça já é uma experiência à parte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {ambientes.map((a, i) => (
            <div key={a.nome} className={`animate-on-scroll animate-on-scroll-delay-${i + 1} group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300`} style={{ backgroundColor: "#F5F0EB" }}>
              <div className="overflow-hidden h-56">
                <img src={a.img} alt={a.imgAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-xl font-medium" style={{ color: "#2D5016" }}>{a.nome}</h3>
                  {a.area && <span className="font-sans text-xs tracking-wider" style={{ color: "#8B5E3C" }}>{a.area}</span>}
                </div>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>{a.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {diferenciais.map((d) => (
            <div key={d.label} className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-hidden="true">{d.icon}</span>
              <span className="font-sans text-sm font-medium" style={{ color: "#2D5016" }}>{d.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
