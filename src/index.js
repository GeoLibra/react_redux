import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import AppleItem from './components/AppleItem';
ReactDOM.render(
    <AppContainer>
        <AppleItem/>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}