import Header from '../../components/header'
import Footer from '../../components/footer'
import TaskItem from '../../components/taskItem'
import React, { useState } from 'react';


import * as S from './styles'
import * as GS from '../../styles/globalStyle';

interface Tarefa {
    titulo: string;
    done: boolean;
}

function TaskManager() {
    const [tarefas, setTarefa] = useState<Tarefa[]>([]);
    const [tituloTarefa, setTituloTarefa] = useState<string>("");

    function adicionarTarefa(event: React.FormEvent) {

        event.preventDefault();

        setTarefa([...tarefas, {
            titulo: tituloTarefa,
            done: false
        }])

        setTituloTarefa("")
    }

    function ConcluirTarefa(posicao: number) {
        const novaLista = [...tarefas]
        novaLista[posicao].done = true;
        setTarefa(novaLista);
    }

    function DesfazerTarefa(posicao: number) {
        const newList = [...tarefas]
        newList[posicao].done = false;
        setTarefa(newList)
    }


    return (
        <div>
            < Header />
            <S.ContatoSection>
                <h1>Task Manager</h1>
                <GS.Texto>Obrigado por testar o task manager!!</GS.Texto>
                <div>
                    <S.InputStyle value={tituloTarefa} onChange={(event) => { setTituloTarefa(event.target.value) }} />
                    <GS.StyledButton onClick={adicionarTarefa}>adicionar tarefa</GS.StyledButton>
                </div>
                <S.TaskContainer>
                    {
                        tarefas.map((tarefa: Tarefa, posicao: number) => {
                            return (
                                <TaskItem titulo={tarefa.titulo}
                                    done={tarefa.done}
                                    concluirTarefa={() => ConcluirTarefa(posicao)}
                                    desfazerTarefa={() => DesfazerTarefa(posicao)} />
                            )
                        })
                    }
                </S.TaskContainer>
                <GS.LinkHome to="/">Home Page</GS.LinkHome>
            </S.ContatoSection>
            <Footer />
        </div>
    )
}

export default TaskManager;