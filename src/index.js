import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware } from 'redux';
import AppleBasket from './containers/AppleBasket';
import rootReducer from './reducers';
const store=createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
            <AppleBasket/>
        </AppContainer>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
