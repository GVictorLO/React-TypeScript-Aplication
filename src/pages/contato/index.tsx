import Header from '../../components/header';
import { Link } from 'react-router-dom';
import { useState } from 'react'

import './styles.css'
import '../../styles/global.css';

function Contato() {
    const [email, setEmail] = useState([]);

    return (
        <div>
            < Header />
            <section className="contatoSection">
                <h1>Pagina de contatos</h1>
                <p className="texto">Insira seu melhor email para entrarmos em contato!</p>
                <div>
                    <input />
                    <button>enviar email</button>
                </div>
                <Link className='LinkHome' to="/">Home Page</Link>
            </section>
        </div>
    )
}

export default Contato;