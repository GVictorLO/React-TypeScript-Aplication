import * as S from './styles';

interface TaskItemProps {
    titulo: string;
    done: boolean;
    concluirTarefa: () => void;
    desfazerTarefa: () => void;
}


function TaskItem(props: TaskItemProps) {
    let taskItem;

    if (props.done === true) {
        taskItem = <S.taskItemTrue>
            <span onClick={props.desfazerTarefa}>❌</span>
            {props.titulo}
            <span onClick={props.concluirTarefa}>✔️</span>
        </S.taskItemTrue>
    } else {
        taskItem = <S.taskItemFalse>
            <span onClick={props.desfazerTarefa}>❌</span>
            {props.titulo}
            <span onClick={props.concluirTarefa}>✔️</span>
        </S.taskItemFalse >
    }

    return (taskItem)
}

export default TaskItem;  