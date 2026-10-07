import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/index.tsx"
import LinhaDoTempo from "./routes/LinhaDoTempo/index.tsx"
import Acontecimentos from "./routes/Acontecimentos/index.tsx"
import Elenco from "./routes/Elenco/index.tsx"
import Idolos from "./routes/Idolos/index.tsx"
import Estadio from "./routes/Estadio/index.tsx"
import Classicos from "./routes/Classicos/index.tsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/linha-do-tempo" element={<LinhaDoTempo />} />    
        <Route path="/acontecimentos" element={<Acontecimentos />} />
        <Route path="/elenco" element={<Elenco />} />
        <Route path="/idolos" element={<Idolos />} />
        <Route path="/estadio" element={<Estadio />} />
        <Route path="/classicos" element={<Classicos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;