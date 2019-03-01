import React, { Component } from 'react';
import APOD from './components/apod';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<APOD />
			</div>
		);
	}
}

export default App;
