import { Link } from "react-router-dom"
import './style.css'

export function ButtonsNavBar() {


    return (
        <div className="main-ButtonsNavBar" >
            <ul className="lista-ButtonsNavBar">
                    <div className="logo-NavBar" >
                        <label>Saratoga</label>
                    </div>
                    <div className="buttons-navbar-list">
                        <div className="buttons-navbar">
                            <Link to='#'>Filosofia</Link>
                        </div>
                        <div className="buttons-navbar">
                            <Link to='#'>Quem somos</Link>
                        </div>
                        <div className="buttons-navbar">
                            <Link to='#'>Contato</Link>
                        </div>
                        <div className="buttons-navbar" s>
                            <Link to='#'>Trabalhe conosco</Link>
                        </div>
                        
                    </div>
            </ul>
        </div>
    )
}