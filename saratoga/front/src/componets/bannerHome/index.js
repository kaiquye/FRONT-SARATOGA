import { ButtonsNavBar } from "./NavBar"
import './style.css'
import logo from './Imagem/logo (1).gif'

export function NavBar() {

    return (
        <main className="banner-home" >
            <div>
                <ButtonsNavBar />
            </div>
            <div className="mensagem-banner">
                <div className="fundo-mensagem">
                    <div className="mensagem-banner-">
                        <h2> Saratoga <br /> Trasnporte </h2>
                        <div className="button-banner">
                            <button>Entre em contato</button>
                            <button>Conheça nossos serviços</button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}