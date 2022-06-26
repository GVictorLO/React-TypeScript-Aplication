import React from 'react';
import Header from '../../components/header'
import Box from '../../components/box'
import '../../styles/global.css';

function Home() {

    const contatoAlert = () => {
        alert('Vá para a aba de contatos! :)');
    }


    return (
        <div className='App'>
            <Header />
            <main>
                < Box background="claro">
                    <div>
                        <h1>Apenas um exercício de React</h1>
                        <p className='texto' >Uma aplicação com React explorando várias funcionalidades! <br />Para saber mais basta clicar aqui embaixo!</p>
                        <button className='button' onClick={contatoAlert}>quero saber mais</button>
                    </div>
                </Box>
                < Box background="claro">
                    <h1>Algumas funcionalidades da Home Page!!</h1>
                </Box>
            </main>
        </div>
    );
}

export default Home;
