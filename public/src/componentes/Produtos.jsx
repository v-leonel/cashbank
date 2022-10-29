import styles from '../css/Produtos.module.css'
import Icone from '../imagens/logocb.svg'


function Produtos(){
    return(
        <div className={styles.content}>
            <section id={styles.section1}>
                <img src={Icone} alt="icone do banco" className={styles.icone} />
                <article className={styles.contentarticle}>
                    <h2>Plano Padrão</h2>
                    <p>texto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae nam, at illum dolores reprehenderit eligendi quia blanditiis. At tenetur cum eos sapiente esse illo modi expedita repellendus omnis dignissimos!</p>
                </article>
                <input type="button" value="ASSINAR" id={styles.saibamaisS1}/>
            </section>

            <section id={styles.section2}>
                <img src={Icone} alt="icone do banco" className={styles.icone} />
                <article className={styles.contentarticle}>
                    <h2>Plano +</h2>
                    <p>texto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae nam, at illum dolores reprehenderit eligendi quia blanditiis. At tenetur cum eos sapiente esse illo modi expedita repellendus omnis dignissimos!</p>
                </article>
                <input type="button" value="ASSINAR" id={styles.saibamaisS2}/>
            </section>

            <section id={styles.section3}>
                <img src={Icone} alt="icone do banco" className={styles.icone} />
                <article className={styles.contentarticle}>
                    <h2>Plano Cashback</h2>
                    <p>texto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae nam, at illum dolores reprehenderit eligendi quia blanditiis. At tenetur cum eos sapiente esse illo modi expedita repellendus omnis dignissimos!</p>
                </article>
                <input type="button" value="ASSINAR" id={styles.saibamaisS3}/>
            </section>


        </div>
    )
}
export default Produtos