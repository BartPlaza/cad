import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {Provider} from 'react-redux';
import configureApi from './components/API/config';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import TranslationProvider from './I18n/TranslationsProvider';
import * as serviceWorker from './serviceWorker';
import setUpActionDispatchers from './store/actions/actions';
import {FormattedMessage} from "react-intl";

const store = configureStore();
const actions = setUpActionDispatchers(store);
configureApi(store);

export const useRedux = (state) => {
    const [data, setData] = useState(store.getState()[state]);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setData(store.getState()[state]);
        });

        // Unsubscribe
        return unsubscribe();
    });

    return [data, actions[state]];
};

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
