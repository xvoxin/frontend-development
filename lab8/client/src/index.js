import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Dashboard } from './component/Dashboard';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
serviceWorker.unregister();
