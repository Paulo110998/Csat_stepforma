import Logo from "./imgs/logo2.png"
import VoltarSatisfacao3 from "./Menus/Back/VoltarSatisfacao3"
import LinkFinal from "./Menus/LinkFinal"
import { AiFillCloseCircle } from "react-icons/ai"

function Satisfacao4() {
    return (
        <div>
            <div className="img-popup">
                <form action="">
                <a href="#" className="botao_close" ><AiFillCloseCircle /></a>
                    <img src={Logo} className="logo1a5" alt="" />
                    <p className="pergunta2" >Para finalizarmos, no geral, quão satisfeito(a) você está com a Stepforma e os serviços ofertados?</p>

                    <ul className="ul_botoes">
                        <p className="classificacao">Muito Insatisfeito(a)</p>
                        <li className="li_botoes"><input type="radio" /><label style={{ color: "white" }}>1</label></li>
                        <li className="li_botoes"><input type="radio" /> <label style={{ color: "white" }}>2</label></li>
                        <li className="li_botoes"><input type="radio" /> <label style={{ color: "white" }}>3</label></li>
                        <li className="li_botoes"><input type="radio" /> <label style={{ color: "white" }}>4</label></li>
                        <li className="li_botoes"><input type="radio" /> <label style={{ color: "white" }}>5</label></li>
                        <p className="classificacao">Satisfeito(a)</p>
                    </ul>
                    
                    <ul className="ul_botoes" >
                        <li className="li_botoes"><VoltarSatisfacao3/></li>
                        <li className="li_botoes"><LinkFinal/></li>
                    </ul>
                    

                </form>
            </div>
        </div>
    )
}

export default Satisfacao4