import './styles.css'
import { Link as LinkRoute, Navigate } from 'react-router-dom';

interface LinkProps {
    texto: string;
}

function Link(props: LinkProps) {
    return (
        <LinkRoute className="LinkMenu" to={props.texto} replace={true}>{props.texto}</LinkRoute>
    )
}

export default Link;