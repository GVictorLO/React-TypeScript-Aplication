import Header from '../../components/header'
import * as GS from '../../styles/globalStyle';

function Curso() {
    return (
        <>
            <Header />
            <h1>Página de cursos</h1>
            <GS.LinkHome to="/">Home Page</GS.LinkHome>
        </>
    )
}

export default Curso;