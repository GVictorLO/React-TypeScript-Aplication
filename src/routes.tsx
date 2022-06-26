import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home'
import Contato from './pages/contato'
import Curso from './pages/cursos'
import TaskManager from './pages/taskManager'


function Routes() {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/" element={<Home />}/>
                <Route path="/contatos" element={<Contato />} />
                <Route path="/taskManager" element={<TaskManager />} />
                <Route path="/cursos" element={<Curso />} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}

export default Routes;