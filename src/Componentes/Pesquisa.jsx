
import Logo from "./imgs/logo2.png"
import LinkCargo from "./Menus/Linkcargo"
import { AiFillCloseCircle } from "react-icons/ai"


function Pesquisa(){
  return (
    <div className="img-popup">
     
      <form action="">
        <a href="#" className="botao_close" ><AiFillCloseCircle /></a>
        <img src={Logo} className="logo" alt="" />
        <br />
        <br />
        <p className="pergunta">Pesquisa Stepforma 2023.2 - Maravilha</p>
        <p className="descricao">Com o intuito de validarmos alguns processos no que diz respeito à Stepforma, Stepformers e Atendimento, formulamos essa pesquisa de satisfação.</p>
        <LinkCargo />

      </form>

    </div>


  )
}


export default Pesquisa