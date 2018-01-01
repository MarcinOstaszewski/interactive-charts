import React from 'react';
import ReactDOM from 'react-dom';

import Chart from '../js/Chart.jsx';
// import '../css/main.css';

document.addEventListener('DOMContentLoaded', function () {

class Main extends React.Component {
	render() {
		return (
			<div>
				<Chart />			
			</div>
		)
	}
}

ReactDOM.render(
		<Main />, document.getElementById('app'));
		
});
