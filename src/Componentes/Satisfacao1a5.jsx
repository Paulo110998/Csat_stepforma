import LinkSatisfacao2 from "./Menus/LinkSatisfacao2"
import VoltarUtilizacao from "./Menus/Back/VoltarUtilizacao"
import Logo from "./imgs/logo2.png"
import { AiFillCloseCircle } from "react-icons/ai"

function Satisfacao_1_a_5() {
  return (
    <div>
      <div className="img-popup">
        <form action="">
        <a href="#" className="botao_close" ><AiFillCloseCircle /></a>
          <img src={Logo} className="logo1a5" alt="" />
          <p className="pergunta2">De 1 a 5, qual seu nível de satisfação com a usabilidade da Stepforma?</p>

          <ul className="ul_botoes">
            <p className="classificacao">Muito Insatisfeito(a)</p>
            <li className="li_botoes"><input type="radio" /><label style={{ color: "white" }}>1</label></li>
            <li className="li_botoes"><input type="radio" /> <label style={{ color: "white" }}>2</label></li>
            <li className="li_botoes"><input type="radio" /> <label style={{ color: "white" }}>3</label></li>
            <li className="li_botoes"><input type="radio" /> <label style={{ color: "white" }}>4</label></li>
            <li className="li_botoes"><input type="radio" /> <label style={{ color: "white" }}>5</label></li>
            <p className="classificacao">Satisfeito(a)</p>
          </ul>

          <ul className="ul_botoes">
            <li className="li_botoes"><VoltarUtilizacao /></li>
            <li className="li_botoes"><LinkSatisfacao2 /></li>
          </ul>

        </form>
      </div>
    </div>
  )
}
export default Satisfacao_1_a_5