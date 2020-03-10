import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import Sec1_title from './Sec1_title';
import Sec2_iphone from './Sec2_iphone';
import Sec3_blog from './Sec3_blog';
import Sec4_textAnimation from './Sec4_textAnimation';
import Sec5_portfolioList from './Sec5_portfolioList';
import Sec6_contact from './Sec6_contact';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Sec1_title/>, document.getElementById('root'));
ReactDOM.render(<Sec2_iphone/>, document.getElementById('root2'));
ReactDOM.render(<Sec3_blog/>, document.getElementById('root3'));
ReactDOM.render(<Sec4_textAnimation/>, document.getElementById('root4'));
ReactDOM.render(<Sec5_portfolioList/>, document.getElementById('root5'));
ReactDOM.render(<Sec6_contact/>, document.getElementById('root6'));



serviceWorker.unregister();
