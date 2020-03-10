import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import Sec1_title from './Sec1_title';
import Sec2_iphone from './Sec2_iphone';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Sec1_title/>, document.getElementById('root'));
ReactDOM.render(<Sec2_iphone/>, document.getElementById('root2'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
