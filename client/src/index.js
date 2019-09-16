import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Router from './Router';

ReactDOM.render(
    <Router/>
    , document.getElementById('root'));


serviceWorker.unregister();
