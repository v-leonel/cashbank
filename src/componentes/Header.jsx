import {Link} from 'react-router-dom'


import styles from '../css/Header.module.css'
import Logo from '../imagens/logocb.svg'
import Login from '../imagens/Login.svg'

function Header(){
    return(
    
            
    
        <header className={styles.content}>
        <img src={Logo} alt="logo cash bank" className={styles.logo} />
            <nav className={styles.menu}>
                <ul>
                    <a href=""><li>O Cash</li></a>
                    <a href=""><li>Para Você</li></a>
                    <a href=""><li>Atendimento</li></a>
                    <a href=""><li>Produtos</li></a>
                </ul>
            </nav>
                <nav className={styles.login}>
                <ul >
                    <Link to="Login">
                        <li>Login</li>
                    </Link>
                </ul>
                </nav>
               <img src={Login} alt="icone de login" className={styles.iconelogin} />
        </header>   
       

    )
}
export default Header