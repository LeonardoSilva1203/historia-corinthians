import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/index.tsx"
import LinhaDoTempo from "./routes/LinhaDoTempo/index.tsx"
import Acontecimentos from "./routes/Acontecimentos/index.tsx"
import Elenco from "./routes/Elenco/index.tsx"
import Ídolos from "./routes/Idolos/index.tsx"
import Estádio from "./routes/Estadio/index.tsx"
import Clássicos from "./routes/Classicos/index.tsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/linha-do-tempo" element={<LinhaDoTempo />} />    
        <Route path="/acontecimentos" element={<Acontecimentos />} />
        <Route path="/elenco" element={<Elenco />} />
        <Route path="/idolos" element={<Ídolos />} />
        <Route path="/estadio" element={<Estádio />} />
        <Route path="/classicos" element={<Clássicos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;