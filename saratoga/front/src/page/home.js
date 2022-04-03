import { NavBar } from "../componets/bannerHome"
import { Filias } from "../componets/Filiais"
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
                <Filias/>
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