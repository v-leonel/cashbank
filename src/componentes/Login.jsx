import styles from '../css/Login.module.css'
import Logo from '../imagens/logocb.svg'
import {Link} from 'react-router-dom'

function Login(){
    return(
        <main id={styles.content}>
            {/* <section id={styles.header}></section> */}
                <section id={styles.login}>
                    <div id={styles.logo_texto} >
                        <img src={Logo} alt="logo cashbank" id={styles.logo}/>
                        <h1 id={styles.h_1}>Cash Bank</h1>
                        <h2 id={styles.titulo_login} >Faça seu login</h2>
                    </div>
                

                    <form action="" id={styles.formulario}>
                        <label htmlFor="">CPF</label><br />
                        <input type="text" className={styles.estiloform} /> <br /> <br /> <br />
                        <label htmlFor="">Senha</label> <br />
                        <input type="password" className={styles.estiloform} /> <br />
                        <Link to="/"><input type="submit" value='ACESSAR' id={styles.botao_acessar} /></Link>
                    </form>

                    <h3 className={styles.texto_senha_cliente}><a href="#">Esqueci minha senha!</a></h3>
                    <h3 className={styles.texto_senha_cliente}> <a href="">Ainda não sou cliente!</a></h3>
            </section> 
       </main>
           
            

    )
}
export default Login