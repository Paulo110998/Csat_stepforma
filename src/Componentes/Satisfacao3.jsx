import Logo from "./imgs/logo2.png"
import VoltarSatisfacao2 from "./Menus/Back/VoltarSatisfacao2"
import LinkSatisfacao4 from "./Menus/LinkSatisfacao4"
import { AiFillCloseCircle } from "react-icons/ai"

function Satisfacao3() {
    return (
        <div>
            <div className="img-popup">
                <form action="">
                <a href="#" className="botao_close" ><AiFillCloseCircle /></a>
                    <img src={Logo} className="logo1a5" alt="" />
                    <p className="pergunta2">De 1 a 5, qual o seu nível de satisfação com o atendimento por outros canais/outros agentes de atendimento e suporte?</p>
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
                        <li className="li_botoes"><VoltarSatisfacao2 /></li>
                        <li className="li_botoes"><LinkSatisfacao4 /></li>
                    </ul>


                </form>
            </div>
        </div>
    )
}
export default Satisfacao3