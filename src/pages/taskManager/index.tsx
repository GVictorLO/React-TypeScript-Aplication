import Header from '../../components/header'
import TaskItem from '../../components/taskItem'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


import './styles.css'
import '../../styles/global.css';

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
            <section className="contatoSection">
                <h1>Task Manager</h1>
                <p className="texto">Obrigado por testar o task manager!!</p>
                <div>
                    <input className='inputStyle' value={tituloTarefa} onChange={(event) => { setTituloTarefa(event.target.value) }} />
                    <button className="button" onClick={adicionarTarefa}>adicionar tarefa</button>
                </div>
                <div className="taskContainer">
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
                </div>
                <Link className='LinkHome' to="/">Home Page</Link>
            </section>
        </div>
    )
}

export default TaskManager;