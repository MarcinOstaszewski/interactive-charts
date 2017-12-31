import React, { Component } from 'react';

import '../css/main.css';

class Main extends Component {
  render() {
    return (
      <div className="width-full">
        <div className="container">
            <h1>Interactive Charts</h1>
        </div>
        <div className="container-input">
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
        </div>
        <div className="container">
            <div className="chart">
                
            </div>        
        </div>
    </div>
    );
  }
}

export default Main;