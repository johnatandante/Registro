import React from 'react';
import ReactDOM from 'react-dom';

// main app - our app is substituted by routes
//import App from './containers/App';

// provider redux
import {Provider} from 'react-redux';

// routes
import AppRoutes from './routes';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>, 
document.getElementById('app'));