import Header from '../../components/header'
import { Link } from 'react-router-dom'
import './styles.css'

function Curso() {
    return (<>
        <Header />
        <h1>Página de cursos</h1>
        <Link className='LinkHome' to="/">Home Page</Link>
    </>
    )
}

export default Curso;