import React from 'react';
import reactDom from 'react-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import store from 'Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';

reactDom.render(
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor} >
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.querySelector("#root"),
);