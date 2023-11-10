import Logo from "./imgs/logo2.png"
import { AiFillCloseCircle } from "react-icons/ai"

function Final() {
    return (
        <div className="img-popup">

            <form action="">
            <a href="#" className="botao_close" ><AiFillCloseCircle /></a>
                <img src={Logo} className="logo" alt="" />
                <p className="final">"Prezado(a) participante, Agradecemos sinceramente
                    por dedicar seu tempo para completar nossa pesquisa de satisfação. <br /><br />
                    Sua opinião é extremamente valiosa e nos ajudará a aprimorar nossos processos na Stepforma, Obrigado !!</p>



            </form>

        </div>
    )
}
export default Final