import * as S from './styles'

interface BoxProps {
    children: JSX.Element;
}


function Box(props: BoxProps) {
    return (
        <S.box>
            {props.children}
        </S.box>
    )
};

export default Box; 