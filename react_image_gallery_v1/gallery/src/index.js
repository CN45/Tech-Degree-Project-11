import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//this files tells react where to render our app-----root


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
