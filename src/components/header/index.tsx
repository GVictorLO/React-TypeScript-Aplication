import Link from '../link'
import Logo from '../../assests/images/logopintrest.png';
import './styles.css';


function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo da empresa" className="logoIm" />
            <nav className="navbarStyle">
                <Link texto="contatos"/>
                <Link texto="cursos" />
                <Link texto="TaskManager" />
            </nav>
        </header>
    )
}

export default Header;