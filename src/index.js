import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoatsContainer from './components/BoatsContainer/BoatsContainer';
const Boats = require('./boats.json');

ReactDOM.render(<BoatsContainer boats={Boats}/>, document.getElementById('root'));
