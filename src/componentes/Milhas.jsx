import styles from '../css/Milhas.module.css'
import Fundo from '../imagens/fundoVerde.png'
import Aeroporto from '../imagens/aeroporto.png'
import {Link} from 'react-router-dom'


function Milhas(){
    return(
        <div id={styles.content}>
            <section id={styles.esquerda}>

            </section>
            <section id={styles.direita}>
                <p id={styles.P}>Acomule milhas<br />
                   para fazer aquela sua viagem<br />
                   dos sonhos.<br />
                   Conquiste isso com sua<br />
                   conta gratuita
                </p>
               <Link to="/Login"><input type="button" value="Saiba Mais" id={styles.botaoSM} /></Link> 

            </section>
        </div>
    )
}
export default Milhas