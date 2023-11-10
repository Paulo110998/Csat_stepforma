import LinkPesquisa from "./Menus/Linkpesquisa"
import LinkUtilizacao from "./Menus/LinkUtilizacao"
import Logo from "./imgs/logo2.png"
import { AiFillCloseCircle } from "react-icons/ai"



function Cargo() {
  return (
    <div className="img-popup">
      <form action="">
      <a href="#" className="botao_close" ><AiFillCloseCircle /></a>
        <img src={Logo} className="logo" alt="" />
        <p className="pergunta">Selecione o seu cargo:</p>
        <br />
        <ul className="ul_principal">
          <li className="li_principal"><input type="radio" /> <label style={{ color: "white" }}>Diretor/Gestor/Coordenador</label></li>
          <li className="li_principal"><input type="radio" /> <label style={{ color: "white" }}>Professor</label></li>
          <li className="li_principal"><input type="radio" /> <label style={{ color: "white" }}>Setor Administrativo</label></li>
        </ul>


        <ul className="ul_botoes">
          <li className="li_botoes"><LinkPesquisa /></li>
          <li className="li_botoes"><LinkUtilizacao /></li>
        </ul>

      </form>


    </div>
  )
}

export default Cargo