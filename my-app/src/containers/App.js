import React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import Header from '../components/Header'
import Container from '../components/Container.js'


const App = ({children}) => (
    <>
        <GlobalStyle/>
        <Header/>
        <Container>
            {children}
        </Container>
        
    </>
)

export default  App