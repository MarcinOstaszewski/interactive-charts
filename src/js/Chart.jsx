import React, { Component } from 'react';

import Bars from '../js/Bars.jsx';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ratesQuantity : 10,
			percentage : 1,
			loanQuota : 1000
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name] : event.target.value
		})
	}
	
	render() {
		return (			
			<div className="width-full">
				<div className="container">
					<h1 className="header">Interactive Charts</h1>
				</div>
				<div className="container-input">
					<div className="column-container">
						<label className="label" htmlFor="ratesQuantity">Input quantity of rates
						<input 
							name="ratesQuantity"
							type="number"
							onChange={this.handleChange}
							value={this.state.ratesQuantity}/>
						</label>
					</div>
					<div className="column-container">
						<label className="label" htmlFor="percentage">Input percentage
						<input 
							name="percentage"
							type="number"
							onChange={this.handleChange}
							value={this.state.percentage}/>
						</label>
					</div>
					<div className="column-container">
						<label className="label" htmlFor="loanQuota">Input loan quota
						<input 
							className = "inputField"
							name="loanQuota"
							type="number"
							onChange={this.handleChange}
							value={this.state.loanQuota}/>
						</label>
					</div>
				</div>
				<div className="container">										
						<Bars quantity={this.state.ratesQuantity} />   
				</div>
			</div>
		);
	}
}

export default Chart;