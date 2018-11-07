import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/app.js';
import css from './index.css';

window.Menu = Menu
ReactDOM.render(<Menu/> , document.getElementById('app'));

