import { Hero } from "../components/Hero";
import { EspacoSection } from "../components/EspacoSection";
import { Galeria } from "../components/Galeria";
import { Localizacao } from "../components/Localizacao";
import { Pacote } from "../components/Pacote";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

export default function Index() {
  return (
    <main>
      <Hero />
      <EspacoSection />
      <Galeria />
      <Localizacao />
      <Pacote />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
