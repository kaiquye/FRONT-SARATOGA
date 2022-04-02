
import './style.css'
import img from './filosofia.gif'
import ir from './ir.png'
import voltar from './voltar.png'


export function Services() {


    return (
        <section className='services'>
            <h2>Nossos serviços</h2>
            <div style={{ display: 'flex' }} className='teste' >
                <button> <img style={{ width: '26px' }} src={voltar} /> </button>
                <div className='lista-services'>
                    <div>
                        <label>Carga seca</label>
                    </div>
                    <div>
                        <label>Carga seca</label>
                    </div>
                    <div>
                        <label>Carga seca</label>
                    </div>
                </div>
                <button> <img style={{ width: '35px' }} src={ir} />  </button>
            </div>

        </section>

    )
}