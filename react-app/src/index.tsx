import * as React from 'react';
import {render} from 'react-dom';
import configureStore from './store/store';
import {Provider} from 'react-redux';
import configureApi from './components/API/config';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import setUpActionDispatchers from './store/actions/actions';

export const store = configureStore();
const actions = setUpActionDispatchers(store);
configureApi(store);

export const useRedux = (state: string) => {
    const [data, setData] = React.useState(store.getState()[state]);

    React.useEffect(() => {
        setData(store.getState()[state]);
    }, [store.getState()[state]]);

    //@ts-ignore
    return [data, actions[state]];
};

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);