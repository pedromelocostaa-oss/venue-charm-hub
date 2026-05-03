import { useEffect } from "react";
import { Logo } from "../components/Logo";
import { useReveal } from "../hooks/useScrollAnimation";

const WA   = "https://wa.me/5531991964746";
const MAPS = "https://maps.google.com/?q=Av.+Casa+Branca,+620,+Brumadinho,+MG";

const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.608 3.5-8.077a8 8 0 10-16 0c0 3.469 1.556 6.064 3.5 8.077a19.583 19.583 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

const ambientes = [
  { nome: "Casarão Colonial", area: "350m²", img: "https://picsum.photos/640/420?random=20",
    descricao: "Telhado colonial, janelas antigas e varanda charmosa. Elegância em cada detalhe." },
    // SUBSTITUIR: foto do Casarão Colonial
  { nome: "Tenda das Palmeiras", area: "200m²", img: "https://picsum.photos/640/420?random=21",
    descricao: "Tenda aberta, rodeada por verde, com ventilação e iluminação natural excepcionais." },
    // SUBSTITUIR: foto da Tenda das Palmeiras
  { nome: "Gramado", area: "", img: "https://picsum.photos/640/420?random=22",
    descricao: "Espaço ideal para welcomes, lounges e recepções ao ar livre." },
    // SUBSTITUIR: foto do Gramado
];

const galeria = [
  { src: "https://picsum.photos/800/600?random=1", alt: "Vista aérea",  cls: "col-span-2 row-span-2" },
  // SUBSTITUIR: foto 1 — vista aérea do espaço
  { src: "https://picsum.photos/600/420?random=2", alt: "Casarão",      cls: "" },
  // SUBSTITUIR: foto 2 — Casarão / fachada
  { src: "https://picsum.photos/600/420?random=3", alt: "Tenda",        cls: "" },
  // SUBSTITUIR: foto 3 — Tenda das Palmeiras
  { src: "https://picsum.photos/600/420?random=4", alt: "Gramado",      cls: "" },
  // SUBSTITUIR: foto 4 — Gramado com evento
  { src: "https://picsum.photos/600/420?random=5", alt: "Lounge",       cls: "" },
  // SUBSTITUIR: foto 5 — detalhe de lounge / decoração
  { src: "https://picsum.photos/800/360?random=6", alt: "Parque",       cls: "col-span-2" },
  // SUBSTITUIR: foto 6 — acesso / Parque Rola Moça
];

const incluso = [
  "Uso exclusivo do espaço durante o período contratado",
  "Acesso antecipado para montagem e decoração",
  "Cozinha completa de 75m²",
  "Estacionamento para até 90 veículos",
  "Banheiros adaptados para PCD",
];

function SectionWrap({ id, bg, className = "", children }: {
  id?: string; bg?: string; className?: string; children: React.ReactNode;
}) {
  const ref = useReveal();
  return (
    <section ref={ref} id={id} className={"px-5 " + className} style={bg ? { backgroundColor: bg } : undefined}>
      {children}
    </section>
  );
}

const delays = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function Espaco() {
  useEffect(() => { document.title = "La Nature Eventos — Casa Branca, Brumadinho"; }, []);

  return (
    <div style={{ backgroundColor: "#F8F7F4" }}>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16">
        {/* SUBSTITUIR: imagem hero do espaço */}
        <img src="https://picsum.photos/1600/900?random=10" alt="La Nature Eventos" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(45,80,22,0.60)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 blob-1 opacity-20 pointer-events-none" style={{ backgroundColor: "#E8DDD4" }} />
        <div className="relative z-10 flex flex-col items-center gap-7 max-w-3xl">
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Logo variant="light" size="lg" />
          </div>
          <div className="animate-fade-up flex flex-col items-center gap-3" style={{ animationDelay: "0.3s" }}>
            <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
              Um cenário único para o dia mais especial da sua vida
            </h1>
            <p className="font-cormorant text-lg sm:text-xl uppercase tracking-[0.2em]" style={{ color: "#E8C89A" }}>
              Casa Branca, Brumadinho · A 28km de Belo Horizonte
            </p>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="animate-fade-up inline-flex items-center gap-3 rounded-full px-8 py-4 font-sans text-white text-sm font-semibold shadow-xl transition-all hover:scale-105"
            style={{ backgroundColor: "#2D5016", border: "1px solid rgba(255,255,255,0.2)", animationDelay: "0.55s" }}>
            <WaIcon /> Falar com a Simone
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-50">
          <div className="w-px h-10 bg-white animate-pulse" />
        </div>
      </section>

      {/* AMBIENTES */}
      <SectionWrap id="ambientes" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 blob-2 opacity-50 pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(30%,-20%)" }} />
        <div className="max-w-6xl mx-auto">
          <div className="reveal max-w-xl mb-14">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-3" style={{ color: "#8B5E3C" }}>O Espaço</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight mb-5" style={{ color: "#2D5016" }}>
              Natureza e elegância em cada detalhe
            </h2>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              Rodeado por uma extensa paleta de tons verdes e um clima serrano, o La Nature Eventos traz
              aconchego e tranquilidade. O acesso pelo Parque Estadual do Rola Moça já é uma experiência à parte.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16">
            {ambientes.map((a, i) => (
              <div key={a.nome} className={"reveal " + delays[i + 1] + " group rounded-2xl overflow-hidden transition-shadow hover:shadow-lg"}
                style={{ backgroundColor: "#fff", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <div className="h-52 overflow-hidden">
                  <img src={a.img} alt={a.nome} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-lg font-medium" style={{ color: "#2D5016" }}>{a.nome}</h3>
                    {a.area && <span className="font-sans text-xs" style={{ color: "#8B5E3C" }}>{a.area}</span>}
                  </div>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "#6B7280" }}>{a.descricao}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
            {[["🍽", "Cozinha de 75m²"], ["🚗", "Estacionamento para 90 veículos"], ["♿", "Banheiros adaptados PCD"]].map(([ic, lb]) => (
              <div key={lb as string} className="flex items-center gap-3">
                <span className="text-xl" role="img" aria-hidden="true">{ic}</span>
                <span className="font-sans text-sm font-medium" style={{ color: "#2D5016" }}>{lb}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>

      {/* GALERIA */}
      <SectionWrap id="galeria" className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 blob-3 opacity-40 pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(-25%,25%)" }} />
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-2" style={{ color: "#8B5E3C" }}>Galeria</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#2D5016" }}>O espaço em imagens</h2>
          </div>
          <div className="reveal grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
            {galeria.map((f, i) => (
              <div key={i} className={f.cls + " overflow-hidden rounded-xl group"}>
                <img src={f.src} alt={f.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>

      {/* LOCALIZAÇÃO */}
      <SectionWrap id="localizacao" bg="#FFFFFF" className="py-24 relative overflow-hidden">
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 blob-1 opacity-25 pointer-events-none" style={{ backgroundColor: "#E8DDD4" }} />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-3" style={{ color: "#8B5E3C" }}>Localização</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight mb-5" style={{ color: "#2D5016" }}>
              A chegada já é parte da experiência
            </h2>
            <p className="font-sans text-sm leading-relaxed mb-7" style={{ color: "#6B7280" }}>
              O acesso ao La Nature é feito através do Parque Estadual do Rola Moça — com cachoeiras,
              trilhas e mirantes. O caminho até chegar já é uma atração à parte.
            </p>
            <div className="inline-flex flex-col gap-1 rounded-xl p-5 mb-7" style={{ backgroundColor: "#F8F7F4", borderLeft: "3px solid #2D5016" }}>
              <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "#8B5E3C" }}>Endereço</span>
              <span className="font-serif text-lg font-medium" style={{ color: "#2D5016" }}>Av. Casa Branca, 620</span>
              <span className="font-sans text-xs" style={{ color: "#6B7280" }}>Brumadinho, MG · 35460-000</span>
            </div>
            <a href={MAPS} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-xs font-semibold border-2 transition-all hover:scale-105"
              style={{ borderColor: "#2D5016", color: "#2D5016" }}>
              <PinIcon /> Ver no Google Maps
            </a>
          </div>
          <div className="reveal reveal-delay-2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            {/* SUBSTITUIR: foto do acesso pelo Parque Rola Moça */}
            <img src="https://picsum.photos/700/500?random=40" alt="Parque Rola Moça" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </SectionWrap>

      {/* PACOTE */}
      <SectionWrap id="pacote" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 blob-1 opacity-35 pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(-30%,-30%)" }} />
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-12">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-2" style={{ color: "#8B5E3C" }}>Pacote</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#2D5016" }}>
              Cerimônia &amp; Recepção
            </h2>
          </div>
          <div className="reveal rounded-3xl overflow-hidden" style={{ backgroundColor: "#fff", boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}>
            <div className="h-56 sm:h-64 overflow-hidden">
              {/* SUBSTITUIR: foto do espaço decorado para casamento */}
              <img src="https://picsum.photos/900/500?random=50" alt="Cerimônia La Nature" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-8 sm:p-12">
              <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: "#6B7280" }}>
                Uso integral dos três ambientes por até{" "}
                <strong className="font-semibold" style={{ color: "#2D5016" }}>12 horas</strong>,
                com acesso antecipado para montagem e decoração.
              </p>
              <div className="mb-10">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: "#8B5E3C" }}>Incluso</p>
                <ul className="space-y-3">
                  {incluso.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                        style={{ backgroundColor: "#2D5016", marginTop: 2 }}>✓</span>
                      <span className="font-sans text-sm" style={{ color: "#374151" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="font-cormorant text-base italic mb-8" style={{ color: "#8B5E3C" }}>
                O valor é apresentado no orçamento personalizado, de acordo com a data e necessidades do evento.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-sans text-white text-sm font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: "#2D5016" }}>
                <WaIcon /> Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </SectionWrap>

      {/* RODAPÉ */}
      <footer id="contato" className="py-20 px-5 relative overflow-hidden" style={{ backgroundColor: "#2D5016" }}>
        <div className="absolute top-0 right-0 w-80 h-80 blob-2 opacity-10 pointer-events-none" style={{ backgroundColor: "#fff", transform: "translate(20%,-20%)" }} />
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-7 relative z-10">
          <Logo variant="light" size="md" />
          <div className="flex flex-col items-center gap-1">
            <p className="font-serif text-lg" style={{ color: "#E8C89A" }}>Simone Mello</p>
            <a href="tel:+5531991964746" className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>(31) 99196-4746</a>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-sans text-white text-sm font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#25D366" }}>
            <WaIcon /> Falar pelo WhatsApp
          </a>
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            Av. Casa Branca, 620 · Brumadinho, MG
          </a>
          <div className="w-12 h-px" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
          <p className="font-sans text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            © La Nature Eventos · Todos os direitos reservados
          </p>
        </div>
      </footer>

    </div>
  );
}
