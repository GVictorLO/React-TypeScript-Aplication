import React from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Box from '../../components/box'
import * as GS from '../../styles/globalStyle';

function Home() {

    return (
        <div className='App'>
            <Header />
            <main>
                <Box>
                    <h1>(Hello, seja bem vindo)</h1>
                </Box>
                <Box><></></Box>
            </main>
            <Footer />
        </div>
    );
}



export default Home;
