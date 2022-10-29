import styles from '../css/Cashback.module.css'
import MulherCartao from '../imagens/mulhercartao.png'
import {Link} from 'react-router-dom'

function Cashback(){
    return(
        <div id={styles.content}>
            <section id={styles.areaTexto}>
                <h1 id={styles.h1}>Conta Cash</h1>
                <h2 id={styles.h2}>Aqui na CashBank <br />você faz o seu cashback</h2>
                <p id={styles.p}>Temos a melhor porcentagem<br/> de retorno no beneficio no mercado,<br />E o melhor, tudo direto na sua conta.
                    <br />De maneira pratica e simples aqui você<br />quem manda</p>
               <Link to="/Login"><input type="submit" value="Ativar Modo Cashback" id={styles.estiloBotao} /></Link> 
            </section>
            
            <section id={styles.areaFoto}>
                <img src={MulherCartao} alt="foto de uma mulher segurando um cartão cashbank" id={styles.tamanhoFoto} />
            </section>
        </div>
    )
}
export default Cashback