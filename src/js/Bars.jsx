import React, { Component } from 'react';

class Bars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity : this.props.quantity
        }
    }

    render() {
        let bars = [];
        for (let i = 1; i <= this.state.quantity; i++) {
        bars.push(<div className="bar" key={i}></div>);
        }

        return (
            <div className="chart">	
                {bars}
            </div>
        )
    }
}

export default Bars;