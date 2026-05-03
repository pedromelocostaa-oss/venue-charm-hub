import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Sparkles, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-venue.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import corporateImg from "@/assets/event-corporate.jpg";
import celebrationImg from "@/assets/event-celebration.jpg";

const events = [
  { title: "Casamentos", desc: "Cerimônias inesquecíveis em ambiente atemporal.", img: weddingImg },
  { title: "Corporativo", desc: "Conferências, lançamentos e galas executivas.", img: corporateImg },
  { title: "Celebrações", desc: "Aniversários, bodas e ocasiões especiais.", img: celebrationImg },
];

const features = [
  { icon: Users, title: "Até 600 convidados", desc: "Salões modulares para grupos íntimos ou multidões." },
  { icon: Sparkles, title: "Equipe dedicada", desc: "Concierge de eventos do briefing ao último brinde." },
  { icon: Calendar, title: "Agenda flexível", desc: "Disponibilidade durante todo o ano, inclusive feriados." },
];

const Section = ({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} id={id} className={`${className} transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
        <div className="container flex items-center justify-between h-20">
          <a href="#" className="display text-2xl tracking-widest text-gradient-gold">VILLA AURUM</a>
          <div className="hidden md:flex gap-10 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#espaco" className="hover:text-foreground transition-colors">Espaço</a>
            <a href="#eventos" className="hover:text-foreground transition-colors">Eventos</a>
            <a href="#galeria" className="hover:text-foreground transition-colors">Galeria</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </div>
          <Button variant="outline" className="border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground hidden md:inline-flex">Reservar</Button>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative h-screen overflow-hidden">
        <img src={heroImg} alt="Salão de eventos Villa Aurum" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        <div className="relative z-10 h-full container flex flex-col justify-center items-center text-center">
          <div className="reveal-up" style={{ animationDelay: "0.2s" }}>
            <p className="uppercase tracking-[0.4em] text-gold text-xs mb-6">Espaço de Eventos · Desde 1998</p>
          </div>
          <h1 className="reveal-up display text-6xl md:text-8xl lg:text-9xl text-foreground max-w-5xl leading-[0.95]" style={{ animationDelay: "0.4s" }}>
            Onde momentos
            <br />
            <span className="italic text-gradient-gold">se tornam eternos</span>
          </h1>
          <div className="reveal-up mt-10 flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.7s" }}>
            <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 px-10 py-6 text-base tracking-wider uppercase">
              Agendar Visita
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/30 hover:bg-foreground/5 px-10 py-6 text-base tracking-wider uppercase">
              Ver Galeria
            </Button>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-gold/60" size={28} />
          </div>
        </div>
      </header>

      {/* INTRO */}
      <Section id="espaco" className="container py-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-gold text-xs mb-6">Bem-vindo</p>
            <h2 className="display text-5xl md:text-6xl mb-8 leading-tight">
              Um cenário <span className="italic text-gradient-gold">extraordinário</span> para sua história.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Aninhada entre jardins centenários e lustres de cristal, a Villa Aurum é uma celebração da arquitetura clássica e do refinamento contemporâneo.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada detalhe foi desenhado para envolver seus convidados em uma experiência sensorial inesquecível.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { n: "25+", l: "Anos de tradição" },
              { n: "1.200", l: "Eventos realizados" },
              { n: "600", l: "Convidados" },
            ].map((s) => (
              <div key={s.l} className="border-t border-gold/30 pt-6">
                <div className="display text-4xl md:text-5xl text-gradient-gold mb-2">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EVENTS */}
      <Section id="eventos" className="container py-32">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-gold text-xs mb-4">O que fazemos</p>
          <h2 className="display text-5xl md:text-6xl">Eventos <span className="italic text-gradient-gold">memoráveis</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <article key={e.title} className="hover-lift group relative overflow-hidden rounded-sm" style={{ aspectRatio: "3/4" }}>
              <img src={e.img} alt={e.title} loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="text-xs uppercase tracking-widest text-gold mb-3">0{i + 1} —</div>
                <h3 className="display text-3xl mb-3">{e.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* FEATURES */}
      <Section className="bg-card/50 py-32 border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/40 mb-6">
                  <f.icon className="text-gold" size={24} />
                </div>
                <h3 className="display text-2xl mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="galeria" className="container py-32">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-gold text-xs mb-4">Galeria</p>
          <h2 className="display text-5xl md:text-6xl">Detalhes que <span className="italic text-gradient-gold">encantam</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[heroImg, weddingImg, corporateImg, celebrationImg, weddingImg, heroImg, celebrationImg, corporateImg].map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-sm ${i % 3 === 0 ? "row-span-2" : ""}`}>
              <img src={img} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" style={{ aspectRatio: i % 3 === 0 ? "3/4" : "1/1" }} />
            </div>
          ))}
        </div>
      </Section>

      {/* CTA / CONTACT */}
      <Section id="contato" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-background/80" />
        <div className="container relative z-10 text-center max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-gold text-xs mb-6">Vamos conversar</p>
          <h2 className="display text-5xl md:text-7xl mb-8 leading-tight">
            Reserve seu <span className="italic text-gradient-gold">momento</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Marque uma visita guiada e descubra por que a Villa Aurum é o cenário escolhido por quem busca o extraordinário.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-12 text-sm">
            {[
              { icon: MapPin, label: "Av. das Acácias, 1500" },
              { icon: Phone, label: "+55 11 4002-8922" },
              { icon: Mail, label: "reservas@villaaurum.com" },
            ].map((c) => (
              <div key={c.label} className="flex items-center justify-center gap-3 text-muted-foreground">
                <c.icon size={16} className="text-gold" />
                <span>{c.label}</span>
              </div>
            ))}
          </div>
          <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 px-12 py-7 text-base tracking-wider uppercase">
            Agendar Visita Privada
          </Button>
        </div>
      </Section>

      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="display text-xl tracking-widest text-gradient-gold">VILLA AURUM</div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">© 2026 — Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
