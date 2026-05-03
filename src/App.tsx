import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/WhatsAppButton";
import Espaco from "./pages/Espaco";
import Casamento from "./pages/Casamento";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/"          element={<Navigate to="/espaco" replace />} />
      <Route path="/espaco"    element={<Espaco />} />
      <Route path="/casamento" element={<Casamento />} />
      <Route path="*"          element={<NotFound />} />
    </Routes>
    <WhatsAppButton />
  </BrowserRouter>
);

export default App;
