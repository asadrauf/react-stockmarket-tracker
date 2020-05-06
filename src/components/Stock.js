import React, { Component } from 'react'

export class Stock extends Component {
    constructor(props){
        super(props);
        this.state = {
            stockChartXValue: [],
            stockChartYValue: []
        }
    }

    componentDidMount(){
        this.fetchStock();
    }

    fetchStock(){
        const API_KEY = 'UN4Q3M7CQJEGQH6W';
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&outputsize=full&apikey=${API_KEY}`;
        fetch(API_CALL)
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            function(data){
                console.log(data)
            }
        )
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

