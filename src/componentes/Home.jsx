import Header from './Header'
import Cashback from './Cashback'
import Parceiros from './Parceiros'
import Milhas from './Milhas'
import Produtos from './Produtos'
import Footer from './Footer'
import styles from '../css/Home.module.css'
import Contabanco from '../imagens/contaCelular.png'
import {Link} from 'react-router-dom'

function Home(){
    return( 
     <>
        <Header />
 
       
        <div className={styles.content}>
            <section id={styles.esquerda}>
                <div id={styles.areaCelular}>
                    <img src={Contabanco} alt="" />
                </div>
            </section>
            <section id={styles.direita}>
                <div id={styles.areaTexto}>
                    <h1>Crie a sua conta CASH<br />conosco, e peça ja o seu <br /> cartão.</h1>
                    <p>Com a sua conta cash. <br />você tera acesso a diversos beneficios e fazer <br />
                    compras em diferentes moedas</p>
                    <form action="placeholder">
                        <Link to="/Login"><input type="button" value="Criar Conta" id={styles.estiloBotao} /></Link>
                    </form>
                </div>
            </section>
        </div>
        <Cashback />
        <Parceiros />
        <Milhas />
        <Produtos />
        <Footer />
     </>
    )
}
export default Home