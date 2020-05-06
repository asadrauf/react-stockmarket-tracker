import React, { Component } from 'react'

export class Stock extends Component {
    constructor(props){
        super(props);
        this.state = {
            stockChartXValue: [],
            stockChartYValue: []
        }
    }
    render() {
        return (
            <div>
                <h1>Stock Market</h1>
            </div>
        )
    }
}

export default Stock

