import React, { Component } from 'react';

class Bars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        
        let barWidth = 640 / this.props.quantity + "px";

        let barStyle = {
            color: 'blue',
            fontSize: 200,
            width: barWidth
          };

        let bars = [];
        for (let i = 1; i <= this.props.quantity; i++) {
        bars.push(<div className="bar" key={i} style={barStyle}></div>);
        }


        return (
            <div className="chart">	
                {bars}
            </div>
        )
    }
}

module.exports = Bars;