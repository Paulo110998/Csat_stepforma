import LinkCargo from "./Menus/Linkcargo"
import LinkSatisfacao1a5 from "./Menus/LinkSatisfacao1a5"
import Logo from "./imgs/logo2.png"

function Utilizacao(){
    return(
        <div>
             <div className="img-popup">
            <form action="">
             <img src={Logo} className="logo" alt="" />
         <p className="pergunta">Com que frequência você utiliza a Stepforma?</p>
         <br />   
         <ul className="ul_principal">
          <li className="li_principal"><input type="radio" /> <label style={{color: "white"}}>Diariamente</label></li>
          <li className="li_principal"><input type="radio" /> <label style={{color: "white"}}>Semanalmente</label></li>
          <li className="li_principal"><input type="radio" /> <label style={{color: "white"}}>Mensalmente</label></li>
          <li className="li_principal"><input type="radio" /> <label style={{color: "white"}}>Menos de uma vez por mês</label></li>
         </ul>
        <br />
         <LinkSatisfacao1a5/>
      </form>
         
         
    </div>
        </div>
    )
}

export default Utilizacao