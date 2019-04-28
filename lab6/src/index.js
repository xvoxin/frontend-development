import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Titles from './component/site'
import * as serviceWorker from './serviceWorker';

const items = ["jeden", "dwa", "trzy"] 

ReactDOM.render(<Titles items={items}/>, document.getElementById('root'));

serviceWorker.unregister();
