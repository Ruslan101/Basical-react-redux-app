import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import COMPONENT_1_W from './components/wrapComponents/component_1_w';
import COMPONENT_2_W from './components/wrapComponents/component_2_w';

ReactDOM.render(
	<Provider store={store}>
		<COMPONENT_1_W />
		<COMPONENT_2_W />
	</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();