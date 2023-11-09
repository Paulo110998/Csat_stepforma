import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Pesquisa from "./Componentes/Pesquisa"
import Cargo from "./Componentes/Cargo"
import Utilizacao from "./Componentes/Utilizacao"
import Satisfacao_1_a_5 from "./Componentes/Satisfacao1a5"



function App() {
  return(
    <div>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Pesquisa />} />
      <Route path="/cargo" element={<Cargo />} />
      <Route path="/utilizacao" element={<Utilizacao/>} />
      <Route path="/satisfacao_1_a_5" element={<Satisfacao_1_a_5/>}/>

      
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
