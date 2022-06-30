import * as S from './styles'

interface LinkProps {
    texto: string;
}

function Link(props: LinkProps) {
    return (
        <S.LinkMenu to={props.texto} >{props.texto}</S.LinkMenu>
    )
}

export default Link; 