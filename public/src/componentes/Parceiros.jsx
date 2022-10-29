import styles from '../css/Parceiros.module.css'
import LogoIfood from '../imagens/logoIfood.svg'
import LogoMLivre from '../imagens/logoMLivre.svg'
import LogoAmazon from '../imagens/logoAmazon.svg'
import LogoUber from '../imagens/logoUber.svg'
import LogoAmericanas from '../imagens/logoAmericanas.svg'


function Parceiros(){
    return(
     <div id={styles.content}> 
        <div id={styles.conteiner}>
            <ul>
                <li className={styles.caixas}>
                    <img src={LogoIfood} alt="" className={styles.tamanhoIcone} />
                    <br /><br /> <br />
                    iFood <br />
                    5% cashback
                </li>
                <li className={styles.caixas}>
                    <img src={LogoMLivre} alt=""className={styles.tamanhoIcone} />
                    <br /><br /> <br />
                    Mercado Livre
                    <br />
                    10% cashback
                </li>
                <li className={styles.caixas}>
                    <img src={LogoAmazon} alt=""className={styles.tamanhoIcone} />
                    <br /><br /> <br /><br />
                    Amazon
                    <br />
                    7% cashback
                </li>
                <li className={styles.caixas}>
                    <img src={LogoUber} alt=""className={styles.tamanhoIcone} />
                    <br /><br /> <br /><br />
                    Uber
                    <br />
                    15% cashback
                </li>
                <li className={styles.caixas}>
                    <img src={LogoAmericanas} alt=""className={styles.tamanhoIcone} />
                    <br /><br /> <br /><br />
                    Americanas
                    <br />
                    10% cashback
                </li>
            </ul>
        </div>
     </div> 
    )
}
export default Parceiros