import Logo from '../../assests/images/LogoEmpresa.png';
import * as S from './styles'


function Header() {
    return (
        <S.styledHeader>
            <S.logoImg src={Logo} alt="Logo da empresa" />
            <S.navbarStyle>
                <S.styledLink to='/contatos'>Contatos</S.styledLink>
                <S.styledLink to='/cursos'>Cursos</S.styledLink>
                <S.styledLink to='/taskManager'>Task Manager</S.styledLink>
            </S.navbarStyle>
        </S.styledHeader>
    )
}

export default Header;  