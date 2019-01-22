import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/app.jsx';
import css from './index.css';

window.Menu = Menu;
ReactDOM.render(<Menu />, document.getElementById('app'));
