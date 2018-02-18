import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './containers/App';

// provider redux
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));