import { NavBar } from "../componets/bannerHome"
import { MensagemGrupo } from "../componets/mensagemGrupo"
import { Services } from "../componets/NossosServicos"

export function Home (){

    return(
        <main>
            <section>
                 <NavBar/>
            </section>
            <section>
                 <MensagemGrupo/>
            </section>
            <section>
                <Services/>
            </section>
            <section>
                // filosofia
            </section>
            <section>
                // filias
            </section>
            <section>
                // quem somos
            </section>

        </main>
    )

}