import React, { Component } from 'react';
import APOD from './components/apod';
import Picker from './components/datepicker';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Picker />
				<br />
				<APOD />
			</div>
		);
	}
}

export default App;
