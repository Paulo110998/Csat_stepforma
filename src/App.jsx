import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pesquisa from "./Componentes/Pesquisa"
import Cargo from "./Componentes/Cargo"
import Utilizacao from "./Componentes/Utilizacao"
import Satisfacao_1_a_5 from "./Componentes/Satisfacao1a5"
import Satisfacao2 from "./Componentes/Satisfacao2"
import Satisfacao3 from "./Componentes/Satisfacao3"
import Satisfacao4 from "./Componentes/Satisfacao4"
import Final from "./Componentes/Final"



function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Pesquisa />} />
          <Route path="/cargo" element={<Cargo />} />
          <Route path="/utilizacao" element={<Utilizacao />} />
          <Route path="/satisfacao_1_a_5" element={<Satisfacao_1_a_5 />} />
          <Route path="/satisfacao_stepformer" element={<Satisfacao2 />} />
          <Route path="/satisfacao_atendimento" element={<Satisfacao3 />} />
          <Route path="/satisfacao_servicos" element={<Satisfacao4 />} />
          <Route path="/obrigado" element={<Final />} />
    
          // Rotas de voltar
          <Route path="/back_cargo" element={<Cargo />} />
          <Route path="/back_utilizacao" element={<Utilizacao />} />
          <Route path="/back_satisfacao_1_a_5" element={<Satisfacao_1_a_5 />} />
          <Route path="/back_stepformer" element={<Satisfacao2 />} />
          <Route path="/back_satisfacao_atendimento" element={<Satisfacao3/>} />




        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
