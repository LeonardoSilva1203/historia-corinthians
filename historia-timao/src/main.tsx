import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/index.tsx" //1
import LinhaDoTempo from "./routes/LinhaDoTempo/index.tsx" //2
import Acontecimentos from "./routes/Acontecimentos/index.tsx"//3
import Elenco from "./routes/Elenco/index.tsx" //6
import Idolos from "./routes/Idolos/index.tsx" //4
import Estadio from "./routes/Estadio/index.tsx" //7
import Classicos from "./routes/Classicos/index.tsx" //5

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