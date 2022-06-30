import * as S from './styles'
import emailIcon from '../../assests/icons/email.png'
import githubIcon from '../../assests/icons/github.png'

function Footer() {
    return (
        <S.footer>
            <S.Box>
                <S.label>Contact me!</S.label>
            </S.Box>
            <S.itemBox>
                <S.icons src={emailIcon} alt="icone do email" />
                <S.icons src={githubIcon} alt="icone do email" />
            </S.itemBox>
        </S.footer>
    )
}

export default Footer;