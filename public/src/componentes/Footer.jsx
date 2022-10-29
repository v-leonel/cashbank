import styles from '../css/Footer.module.css'
import Icone from '../imagens/logocb.svg'
import Iconegit from '../imagens/githubcon.svg'
import Iconelinkedin from '../imagens/linkedincon.svg'

function Footer(){
    return(
        <footer className={styles.content}>
            <nav className={styles.navfooter}>
                <ul className={styles.ulfooter}>
                    <li id={styles.liprincipal}>CONTATOS</li>
                    <a href="#"></a><li className={styles.liconteudo}>Rua Tito 54, Lapa - SP</li>
                    <a href="#"><li className={styles.liconteudo}>(11) 989121266</li></a>
                    <a href="#"><li className={styles.liconteudo}>vitorleonell123@gmail.com</li></a>
                </ul>
            </nav>
            <nav className={styles.navfooter}>
                <ul className={styles.ulfooter}>
                    <li id={styles.liprincipal}>INFORMAÇÕES</li>
                    <a href=""><li className={styles.liconteudo}>Sobre nós</li></a>
                    <a href=""><li className={styles.liconteudo}>Politica de privacidade</li></a>
                    <a href=""><li className={styles.liconteudo}>Termos e condições</li></a>
                </ul>
            </nav>
            <nav className={styles.navfooter}>
                <ul className={styles.ulfooter}>
                    <li id={styles.liprincipal}>SERVIÇOS</li>
                    <a href=""><li className={styles.liconteudo}>Plano Padrão</li></a>
                    <a href=""><li className={styles.liconteudo}>Plano +</li></a>
                    <a href=""><li className={styles.liconteudo}>Plano Cashback</li></a>
                </ul>
            </nav>
            <nav className={styles.navfooter}>
                <ul className={styles.ulfooter}>
                    <li id={styles.liprincipal}>NEWSLETTER</li>
                    <li className={styles.conteudoNW}>
                        <p id={styles.newsletter}>Receba nossas mais atualizadas <br />informações sobre finanças toda semana</p>
                    </li>
                    <form action="">
                        <input type="email" className={styles.caixaemail} placeholder="Entre com seu email: " />
                        <input type="submit" value="Enviar" className={styles.enviarEmail} /> 
                    </form>
                </ul>
            </nav>
            <hr width='1'
                color='white'/>
             <nav>
                <ul className={styles.ulfooter}>
                    <li id={styles.liprincipal}>CashBank</li>
                    <li> <a href="https://github.com/v-leonel" target="_blank" rel="noopener noreferrer"><img src={Iconegit} alt="icone git hub" className={styles.icone} /></a></li>
                    <li> <a href="https://www.linkedin.com/in/victor-leonel-79b861247/" target="_blank" rel="noopener noreferrer"> <img src={Iconelinkedin} alt="icone linkedin" className={styles.icone} /></a></li>
                </ul>
             </nav>
        </footer>

)
}
export default Footer