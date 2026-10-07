import { Routes, Route } from "react-router-dom";

// Componentes que aparecem em TODAS as páginas (ficam fora do <Routes>)
import Header from "./components/Header/index.tsx";

// Páginas: cada uma é um componente que a rota escolhe pra mostrar
import Home from "./routes/Home/index.tsx";
import LinhaDoTempo from "./routes/LinhaDoTempo/index.tsx";
import Acontecimentos from "./routes/Acontecimentos/index.tsx";
import Elenco from "./routes/Elenco/index.tsx";
import Idolos from "./routes/Idolos/index.tsx";
import Estadio from "./routes/Estadio/index.tsx";
import Classicos from "./routes/Classicos/index.tsx";

function App() {
  return (
    <>
      {/* Fragmento <>...</>: envolve vários elementos sem criar uma <div> extra na página */}

      {/* Header fixo: aparece em qualquer rota, por isso fica FORA do <Routes> */}
      <Header />

      {/* Routes = "porteiro": olha a URL atual e decide qual página mostrar */}
      <Routes>
        {/* Cada Route é uma regra: path (o caminho na URL) + element (o componente) */}
        <Route path="/" element={<Home />} />
        <Route path="/linha-do-tempo" element={<LinhaDoTempo />} />
        <Route path="/acontecimentos" element={<Acontecimentos />} />
        <Route path="/elenco" element={<Elenco />} />
        <Route path="/idolos" element={<Idolos />} />
        <Route path="/estadio" element={<Estadio />} />
        <Route path="/classicos" element={<Classicos />} />
      </Routes>

      {/* Footer entra aqui depois, quando fizer a branch dele — também fora do <Routes> */}
    </>
  );
}

export default App;