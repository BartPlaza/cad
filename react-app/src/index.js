import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import TranslationProvider from './I18n/TranslationsProvider';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <TranslationProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </TranslationProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
