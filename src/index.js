import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Timer} from './App';
import * as serviceWorker from './serviceWorker';
import {Randomizer} from './randomizer';
import {Warning} from './App';



ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<Warning />, document.getElementById('warning'));


ReactDOM.render(<Randomizer />, document.getElementById('randomizer-button'))


ReactDOM.render(<Timer />, document.getElementById('timer'))




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
