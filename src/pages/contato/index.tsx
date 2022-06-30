import Header from '../../components/header';
import { useState } from 'react'

import * as GS from '../../styles/globalStyle';

function Contato() {
    const [email, setEmail] = useState([]);

    return (
        <div>
            < Header />
            <section className="contatoSection">
                <h1>Pagina de contatos</h1>
                <GS.Texto>Insira seu melhor email para entrarmos em contato!</GS.Texto>
                <div>
                    <input />
                    <button>enviar email</button>
                </div>
                <GS.LinkHome to="/">Home Page</GS.LinkHome>
            </section>
        </div>
    )
}

export default Contato;