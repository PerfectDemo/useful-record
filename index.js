import React from 'react';
import ReactDom from 'react-dom';

import { Provider as ContextProvider } from './src/context';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './src/app';

const root = document.getElementById('root');

ReactDom.render( 
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
        <ContextProvider>
            <App />
        </ContextProvider>
        </Container>
    </React.Fragment>
    , root);