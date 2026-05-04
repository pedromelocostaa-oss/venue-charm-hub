import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/WhatsAppButton";
import Espaco from "./pages/Espaco";
import Casamento from "./pages/Casamento";
import NotFound from "./pages/NotFound";

// WhatsApp button is only shown on /espaco — the /casamento page is a
// clean proposal view shared with the couple, with no sales CTAs.
function EspacoWithWA() {
  return (
    <>
      <Espaco />
      <WhatsAppButton />
    </>
  );
}

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/"          element={<Navigate to="/casamento" replace />} />
      <Route path="/espaco"    element={<EspacoWithWA />} />
      <Route path="/casamento" element={<Casamento />} />
      <Route path="*"          element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
