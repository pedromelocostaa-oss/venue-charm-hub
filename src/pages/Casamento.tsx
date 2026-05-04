import { useEffect } from "react";
import { useReveal } from "../hooks/useScrollAnimation";
import ZoomableImage from "@/components/ZoomableImage";
import cerimoniaFoto1 from "@/assets/cerimonia-1.png";
import cerimoniaFoto2 from "@/assets/cerimonia-2.png";
import recepcaoFoto1 from "@/assets/recepcao-1.png";
import recepcaoFoto2 from "@/assets/recepcao-2.png";
import recepcaoFoto3 from "@/assets/recepcao-3.png";
import recepcaoFoto4 from "@/assets/recepcao-4.png";
import recepcaoFoto5 from "@/assets/recepcao-5.png";

// EDITAR: nome dos noivos e data do evento
const NOIVOS      = "Gabriella Tereza & Tales Augusto";
const DATA_EVENTO = "15 de maio de 2027";

const paletaCores = [
  { hex: "#3D7A1A", name: "Verde Vivo",        papel: "Base e continuidade" },
  { hex: "#F8F7F4", name: "Branco Suave",      papel: "Leveza e delicadeza", border: true },
  { hex: "#8B5E3C", name: "Marrom",            papel: "Rusticidade sofisticada" },
  { hex: "#1A1A1A", name: "Preto",             papel: "Contraste e elegância" },
  { hex: "#C0392B", name: "Vermelho Profundo", papel: "Ponto focal e emoção" },
];

const elementosCerimonia = [
  "Tapete vermelho central (eixo da cerimônia)",
  "Lustres orgânicos com aspargo e cipós (somente sobre o tapete)",
  "Jardineiras baixas com flores brancas, folhagens e galhos secos",
  "Fundo com trepadeira vazada (entrada de luz natural)",
  "Arco floral assimétrico, ascendente e envolvente",
];

const elementosRecepcao = [
  { dot: "#3D7A1A", text: "Iluminação quente e acolhedora em todo o salão" },
  { dot: "#8B5E3C", text: "Centros de mesa com flores silvestres e velas" },
  { dot: "#1A1A1A", text: "Mesas comunitárias com galhos secos e folhagens" },
  { dot: "#C0392B", text: "Estação de doces com bolo decorado e bem-casados" },
  { dot: "#3D7A1A", text: "Cantinho fotográfico com arranjo floral exclusivo" },
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

      {/* ── CAPA ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16">
        {/* Foto real da cerimônia como capa */}
        <img
          src={cerimoniaFoto1}
          alt="Cerimônia — La Nature Eventos"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Overlay suave que preserva a foto mas dá legibilidade ao texto */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(248,247,244,0.55) 0%, rgba(248,247,244,0.72) 60%, rgba(248,247,244,0.92) 100%)" }} />

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
          <div className="animate-fade-up w-14 h-px my-1" style={{ backgroundColor: "#8B5E3C", animationDelay: "0.5s" }} />
          <p className="animate-fade-up font-serif text-xl sm:text-2xl font-medium" style={{ color: "#2D5016", animationDelay: "0.6s" }}>
            {NOIVOS}
          </p>
          <p className="animate-fade-up font-sans text-xs tracking-widest uppercase" style={{ color: "#6B7280", animationDelay: "0.7s" }}>
            {DATA_EVENTO}
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase" style={{ color: "#2D5016" }}>role para ver</span>
          <div className="w-px h-8 animate-pulse" style={{ backgroundColor: "#2D5016" }} />
        </div>
      </section>

      {/* ── PALETA ── */}
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
                <div className="h-28 sm:h-36 rounded-xl transition-transform hover:scale-105"
                  style={{ backgroundColor: c.hex, border: c.border ? "1px solid #E8DDD4" : "none" }} />
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

      {/* ── CONCEITO ── */}
      <SectionWrap id="conceito" bg="#FFFFFF" className="py-24 relative overflow-hidden">
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 blob-1 opacity-20 pointer-events-none" style={{ backgroundColor: "#E8DDD4" }} />
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-12">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-3" style={{ color: "#8B5E3C" }}>Conceito</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#1A1A1A" }}>A proposta</h2>
          </div>
          <div className="reveal max-w-2xl flex flex-col gap-7">
            <p className="font-cormorant text-2xl sm:text-3xl leading-relaxed" style={{ color: "#2D5016" }}>
              "O projeto foi pensado para valorizar o caminho da noiva e o momento da cerimônia de forma leve e natural."
            </p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              Os elementos suspensos acompanham o eixo do tapete, enquanto o arco se desenvolve
              em um movimento ascendente, criando um gesto elegante e contemporâneo.
            </p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              A composição une natureza, fluidez e sofisticação, sem excessos.
            </p>
          </div>
        </div>
      </SectionWrap>

      {/* ── REFERÊNCIA VISUAL ── */}
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

      {/* ── CERIMÔNIA ── */}
      <SectionWrap id="cerimonia" bg="#FFFFFF" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 blob-1 opacity-30 pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(-30%,-30%)" }} />
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-14">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-3" style={{ color: "#8B5E3C" }}>Projeto</p>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#1A1A1A" }}>Cerimônia</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Fotos */}
            <div className="reveal grid grid-cols-2 gap-3 lg:max-w-md">
              <ZoomableImage src={cerimoniaFoto1} alt="Cerimônia — eixo central com tapete vermelho" className="rounded-2xl aspect-[3/4]" />
              <ZoomableImage src={cerimoniaFoto2} alt="Cerimônia — arco floral assimétrico" className="rounded-2xl aspect-[3/4]" />
            </div>
            {/* Texto */}
            <div className="reveal reveal-delay-2 flex flex-col gap-7">
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                A cerimônia valoriza o caminho da noiva com um eixo central marcado e elementos
                suspensos que criam movimento e leveza.
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                O arco floral assimétrico finaliza o percurso com elegância e personalidade.
              </p>
              <div>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "#8B5E3C" }}>Elementos principais</p>
                <ul className="space-y-3">
                  {elementosCerimonia.map((el) => (
                    <li key={el} className="flex items-start gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-[7px]" style={{ backgroundColor: "#C0392B" }} />
                      <span className="font-sans text-sm" style={{ color: "#374151" }}>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: "#F8F7F4", borderLeft: "3px solid #3D7A1A" }}>
                <p className="font-sans text-[10px] tracking-widest uppercase mb-2" style={{ color: "#3D7A1A" }}>Altar</p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  O arco floral se desenvolve a partir do lado esquerdo, com um movimento ascendente
                  leve e orgânico. O uso de urucum adiciona toque de cor e personalidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrap>

      {/* ── RECEPÇÃO ── */}
      <SectionWrap id="recepcao" className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 blob-2 opacity-30 pointer-events-none" style={{ backgroundColor: "#E8DDD4", transform: "translate(25%,25%)" }} />
        <div className="max-w-6xl mx-auto flex flex-col gap-16">

          {/* Cabeçalho */}
          <div className="reveal">
            <p className="font-sans text-xs tracking-[0.32em] uppercase mb-3" style={{ color: "#8B5E3C" }}>Projeto</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="font-serif text-4xl sm:text-5xl leading-tight" style={{ color: "#1A1A1A" }}>Recepção</h2>
              <p className="font-cormorant text-xl italic lg:max-w-sm" style={{ color: "#2D5016" }}>
                "Um ambiente que envolve, acolhe e permanece na memória de cada convidado."
              </p>
            </div>
          </div>

          {/* Bloco 1 — texto esq / galeria dir */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Esquerda: texto + elementos + card */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                A recepção integra iluminação quente, vegetação viva e uma composição cuidadosa
                de materiais que criam um ambiente íntimo e sofisticado.
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                Cada mesa foi pensada para convidar os convidados a ficarem — com centros florais
                elaborados, velas e texturas naturais que dialogam com o entorno do La Nature.
              </p>

              <div>
                <p className="font-sans text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: "#8B5E3C" }}>
                  Elementos da decoração
                </p>
                <ul className="flex flex-col gap-3">
                  {elementosRecepcao.map((el) => (
                    <li key={el.text} className="flex items-start gap-3">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-[7px]" style={{ backgroundColor: el.dot }} />
                      <span className="font-sans text-sm leading-relaxed" style={{ color: "#374151" }}>{el.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-5" style={{ backgroundColor: "#fff", borderLeft: "3px solid #8B5E3C" }}>
                <p className="font-sans text-[10px] tracking-widest uppercase mb-2" style={{ color: "#8B5E3C" }}>Atmosfera</p>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  A iluminação trabalha em conjunto com a vegetação para criar camadas de
                  profundidade — quente perto das mesas, suave nas bordas do salão.
                </p>
              </div>
            </div>

            {/* Direita: foto grande + duas menores */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <ZoomableImage
                src={recepcaoFoto1}
                alt="Vista geral da recepção — decoração completa"
                className="rounded-2xl w-full aspect-[16/10]"
              />
              <div className="grid grid-cols-2 gap-4">
                <ZoomableImage
                  src={recepcaoFoto2}
                  alt="Castiçal com velas e arranjo floral"
                  className="rounded-2xl w-full aspect-[4/3]"
                />
                <ZoomableImage
                  src={recepcaoFoto3}
                  alt="Mesa redonda com centro floral e velas"
                  className="rounded-2xl w-full aspect-[4/3]"
                />
              </div>
            </div>
          </div>

          {/* Bloco 2 — texto esq / fotos dir */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Esquerda: citação de fechamento */}
            <div className="flex flex-col gap-4">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase" style={{ color: "#8B5E3C" }}>
                Detalhes que fazem a diferença
              </p>
              <p className="font-cormorant text-2xl sm:text-3xl italic leading-snug" style={{ color: "#2D5016" }}>
                "São os pequenos gestos — o arranjo ao lado do bolo, o aroma das flores,
                a luz baixa nas mesas — que os convidados vão levar para sempre."
              </p>
              <div className="w-10 h-px" style={{ backgroundColor: "#E8DDD4" }} />
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                Cada detalhe da estação de doces e bem-casados foi pensado para ser fotografado
                e lembrado — como uma extensão do cuidado que permeia todo o evento.
              </p>
            </div>

            {/* Direita: duas fotos lado a lado */}
            <div className="grid grid-cols-2 gap-4">
              <ZoomableImage
                src={recepcaoFoto4}
                alt="Arranjo floral em vaso com folhagens"
                className="rounded-2xl w-full aspect-[4/3]"
              />
              <ZoomableImage
                src={recepcaoFoto5}
                alt="Estação de bem-casados com flores silvestres"
                className="rounded-2xl w-full aspect-[4/3]"
              />
            </div>
          </div>

        </div>
      </SectionWrap>

      {/* ── ENCERRAMENTO ── */}
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
          <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © La Nature Eventos · Casa Branca, Brumadinho · MG
          </p>
        </div>
      </section>

    </div>
  );
}
