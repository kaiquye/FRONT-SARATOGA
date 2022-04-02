import './style.css'
import nova from './NOVAMINAS.png'
import sara from './logo (1).gif'
import fjx from './FJX.jpg'
import tora from './black-logo.png'


export function MensagemGrupo() {

    return (
        <section className='grupo'>
            <div className='grupo-tora'>
                <h1>Grupo Tora Trasnporte</h1>
            </div>
            <div className='empr'>
                <div className=' empres  saratoga-grupo'>
                    <img  src={sara} />
                </div>
                <div className=' empres fjs-grupo'>
                    <img style={{width : '50px'}}  src={fjx} />
                </div>
                <div className=' empres novaminas-grupo'>
                    <img style={{width : '150px'}} src={nova} />
                </div>
                {/* <div className=' empres tora-grupo'>
                <img style={{width : '50px'}} src={tora} />
                    <label>Tora   <br /> Transporte </label>
                </div> */}
            </div>
        </section>
    )
}