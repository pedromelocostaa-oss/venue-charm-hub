import { useEffect } from "react";
import { useReveal } from "../hooks/useScrollAnimation";

// EDITAR: nome dos noivos e data do evento
const NOIVOS      = "Gabriella Tereza & Tales Augusto";
const DATA_EVENTO = "15 de maio de 2027";

const WA = "https://wa.me/5531991964746";

const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const paletaCores = [
  { hex: "#3D7A1A", name: "Verde Vivo",      papel: "Base e continuidade" },
  { hex: "#F8F7F4", name: "Branco Suave",    papel: "Leveza e delicadeza",  border: true },
  { hex: "#8B5E3C", name: "Marrom",          papel: "Rusticidade sofisticada" },
  { hex: "#1A1A1A", name: "Preto",           papel: "Contraste e elegância" },
  { hex: "#C0392B", name: "Vermelho Profundo", papel: "Ponto focal e emoção" },
];

const elementosCerimonia = [
  "Tapete vermelho central (eixo da cerimônia)",
  "Lustres orgânicos com aspargo e cipós (somente sobre o tapete)",
  "Jardineiras baixas com flores brancas, folhagens e galhos secos",
  "Fundo com trepadeira vazada (entrada de luz natural)",
  "Arco floral assimétrico, ascendente e envolvente",
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

export default function Casamento() {
  useEffect(() => {
    document.title = "Gabriella & Tales · Projeto Cenográfico · La Nature";
  }, []);

  return (
    <div style={{ backgroundColor: "#F8F7F4" }}>

      {/* CAPA */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16">
        {/* SUBSTITUIR: melhor foto da cerimônia */}
        <img src="https://picsum.photos/1600/900?random=60" alt="Cerimônia" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(248,247,244,0.78)" }} />
        <div className="absolute top-0 right-0 w-96 h-96 blob-2 opacity-30 pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(20%,-20%)" }} />

        <div className="relative z-10 flex flex-col items-center gap-5 max-w-3xl">
          <p className="animate-fade-in font-sans text-xs tracking-[0.45em] uppercase" style={{ color: "#8B5E3C", animationDelay: "0.1s" }}>
            La Nature Eventos
          </p>
          <h1 className="animate-fade-up font-serif font-medium leading-tight" style={{ color: "#1A1A1A", fontSize: "clamp(2.5rem, 7vw, 5rem)", animationDelay: "0.25s" }}>
            PROJETO CENOGRÁFICO
          </h1>
          <p className="animate-fade-up font-cormorant text-2xl sm:text-3xl italic" style={{ color: "#8B5E3C", animationDelay: "0.4s" }}>
            Cerimônia &amp; Recepção
          </p>
          <div className="animate-fade-up w-12 h-px my-2" style={{ backgroundColor: "#8B5E3C", animationDelay: "0.5s" }} />
          <p className="animate-fade-up font-serif text-xl sm:text-2xl font-medium" style={{ color: "#2D5016", animationDelay: "0.6s" }}>
            {NOIVOS}
          </p>
          <p className="animate-fade-up font-sans text-sm tracking-widest uppercase" style={{ color: "#6B7280", animationDelay: "0.7s" }}>
            {DATA_EVENTO}
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-40">
          <div className="w-px h-10 animate-pulse" style={{ backgroundColor: "#2D5016" }} />
        </div>
      </section>

      {/* PALETA */}
      <SectionWrap id="paleta" className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 blob-3 opacity-40 pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(-25%,25%)" }} />
        <div className="max-w-5xl mx-auto">
          <div className="reveal max-w-lg mb-14">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-3" style={{ color: "#8B5E3C" }}>Identidade Visual</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#1A1A1A" }}>Paleta de Cores</h2>
          </div>
          <div className="reveal flex flex-col sm:flex-row gap-3 mb-10">
            {paletaCores.map((c) => (
              <div key={c.hex} className="flex-1 flex flex-col gap-3">
                <div
                  className="h-28 sm:h-36 rounded-xl transition-transform hover:scale-105"
                  style={{ backgroundColor: c.hex, border: c.border ? "1px solid #E8DDD4" : "none" }}
                />
                <div>
                  <p className="font-serif text-sm font-medium" style={{ color: "#1A1A1A" }}>{c.name}</p>
                  <p className="font-sans text-xs" style={{ color: "#6B7280" }}>{c.papel}</p>
                  <p className="font-sans text-[10px] mt-1 font-medium tracking-widest" style={{ color: "#8B5E3C" }}>{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal font-cormorant text-xl italic" style={{ color: "#8B5E3C" }}>
            "Uma paleta que une natureza, sofisticação e identidade visual."
          </p>
        </div>
      </SectionWrap>

      {/* CONCEITO */}
      <SectionWrap id="conceito" bg="#FFFFFF" className="py-24 relative overflow-hidden">
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 blob-1 opacity-20 pointer-events-none" style={{ backgroundColor: "#E8DDD4" }} />
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-12">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-3" style={{ color: "#8B5E3C" }}>Conceito</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#1A1A1A" }}>A proposta</h2>
          </div>
          <div className="reveal max-w-2xl flex flex-col gap-7">
            <p className="font-cormorant text-2xl sm:text-3xl leading-relaxed" style={{ color: "#2D5016" }}>
              "A proposta combina elementos naturais com uma linguagem contemporânea, criando um
              cenário leve, elegante e acolhedor."
            </p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              A vegetação em movimento no teto acompanha o percurso da noiva, enquanto os elementos da
              recepção reforçam o aconchego e a sofisticação do ambiente.
            </p>
          </div>
        </div>
      </SectionWrap>

      {/* REFERÊNCIA GERAL */}
      <SectionWrap id="referencia" className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-3" style={{ color: "#8B5E3C" }}>Inspiração</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#1A1A1A" }}>Referência Visual</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="reveal flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                {/* SUBSTITUIR: prancha de referência — cerimônia */}
                <img src="https://picsum.photos/700/900?random=61" alt="Referência Cerimônia" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="font-sans text-xs tracking-widest uppercase text-center" style={{ color: "#8B5E3C" }}>Cerimônia</p>
            </div>
            <div className="reveal reveal-delay-2 flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                {/* SUBSTITUIR: prancha de referência — recepção */}
                <img src="https://picsum.photos/700/900?random=62" alt="Referência Recepção" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="font-sans text-xs tracking-widest uppercase text-center" style={{ color: "#8B5E3C" }}>Recepção</p>
            </div>
          </div>
        </div>
      </SectionWrap>

      {/* CERIMÔNIA */}
      <SectionWrap id="cerimonia" bg="#FFFFFF" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 blob-1 opacity-30 pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(-30%,-30%)" }} />
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-14">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-3" style={{ color: "#8B5E3C" }}>Projeto</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#1A1A1A" }}>Cerimônia</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Fotos — esquerda */}
            <div className="reveal grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
                {/* SUBSTITUIR: foto cerimônia 1 */}
                <img src="https://picsum.photos/900/500?random=63" alt="Cerimônia 1" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-xl overflow-hidden aspect-[1/1]">
                {/* SUBSTITUIR: foto cerimônia 2 */}
                <img src="https://picsum.photos/500/500?random=64" alt="Cerimônia 2" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-xl overflow-hidden aspect-[1/1]">
                {/* SUBSTITUIR: foto cerimônia 3 */}
                <img src="https://picsum.photos/500/500?random=65" alt="Cerimônia 3" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            {/* Texto — direita */}
            <div className="reveal reveal-delay-2 flex flex-col gap-7">
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                A cerimônia valoriza o caminho da noiva com um eixo central marcado e elementos suspensos
                que criam movimento e leveza.
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                O arco floral assimétrico finaliza o percurso com elegância e personalidade.
              </p>
              <div>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "#8B5E3C" }}>
                  Elementos principais
                </p>
                <ul className="space-y-3">
                  {elementosCerimonia.map((el) => (
                    <li key={el} className="flex items-start gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: "#C0392B" }} />
                      <span className="font-sans text-sm" style={{ color: "#374151" }}>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: "#F8F7F4", borderLeft: "3px solid #3D7A1A" }}>
                <p className="font-sans text-[10px] tracking-widest uppercase mb-2" style={{ color: "#3D7A1A" }}>Altar</p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  O arco floral se desenvolve a partir do lado esquerdo, com um movimento ascendente leve
                  e orgânico. O uso de urucum adiciona toque de cor e personalidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrap>

      {/* RECEPÇÃO */}
      <SectionWrap id="recepcao" className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 blob-2 opacity-30 pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(25%,25%)" }} />
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-14">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-3" style={{ color: "#8B5E3C" }}>Projeto</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#1A1A1A" }}>Recepção</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Texto — esquerda */}
            <div className="reveal flex flex-col gap-6">
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                A recepção traz uma atmosfera acolhedora, com iluminação quente, elementos naturais e
                uma composição elegante e equilibrada.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {[
                  { label: "Iluminação quente", cor: "#8B5E3C" },
                  { label: "Elementos naturais", cor: "#3D7A1A" },
                  { label: "Mesas comunitárias", cor: "#1A1A1A" },
                  { label: "Flores silvestres", cor: "#C0392B" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: "#fff" }}>
                    <span className="shrink-0 w-2 h-2 rounded-full" style={{ backgroundColor: item.cor }} />
                    <span className="font-sans text-xs" style={{ color: "#374151" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Fotos — direita */}
            <div className="reveal reveal-delay-2 grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
                {/* SUBSTITUIR: foto recepção 1 */}
                <img src="https://picsum.photos/900/500?random=66" alt="Recepção 1" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-xl overflow-hidden aspect-[1/1]">
                {/* SUBSTITUIR: foto recepção 2 */}
                <img src="https://picsum.photos/500/500?random=67" alt="Recepção 2" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-xl overflow-hidden aspect-[1/1]">
                {/* SUBSTITUIR: foto recepção 3 */}
                <img src="https://picsum.photos/500/500?random=68" alt="Recepção 3" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrap>

      {/* ENCERRAMENTO */}
      <section className="py-28 px-5 relative overflow-hidden text-center" style={{ backgroundColor: "#2D5016" }}>
        <div className="absolute top-0 left-0 w-96 h-96 blob-1 opacity-15 pointer-events-none" style={{ backgroundColor: "#fff", transform: "translate(-30%,-30%)" }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 blob-3 opacity-10 pointer-events-none" style={{ backgroundColor: "#fff", transform: "translate(25%,25%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
          <p className="font-sans text-xs tracking-[0.4em] uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
            La Nature Eventos
          </p>
          <p className="font-sans text-sm leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Um projeto pensado para integrar natureza, elegância e identidade — criando uma experiência única e memorável.
          </p>
          <blockquote className="font-cormorant italic leading-relaxed" style={{ color: "#E8C89A", fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
            "Buscamos um equilíbrio entre o natural e o sofisticado, criando um cenário leve,
            com movimento e identidade, que valoriza o momento da cerimônia."
          </blockquote>
          <div className="w-12 h-px" style={{ backgroundColor: "rgba(255,255,255,0.25)" }} />
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-sans text-sm font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#fff", color: "#2D5016" }}>
            <WaIcon /> Falar com a Simone
          </a>
        </div>
      </section>

    </div>
  );
}
