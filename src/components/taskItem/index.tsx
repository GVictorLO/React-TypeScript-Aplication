import { isPropertySignature, JsxTokenSyntaxKind } from 'typescript';
import './styles.css'

interface TaskItemProps {
    titulo: string;
    done: boolean;
    concluirTarefa: () => void;
    desfazerTarefa: () => void;
}

function TaskItem(props: TaskItemProps) {
    return (
        <li className={`taskItem${props.done}`} >
            <span onClick={props.desfazerTarefa}>❌</span>
            {props.titulo}
            <span onClick={props.concluirTarefa}>✔️</span>
        </li >
    )
}

export default TaskItem;