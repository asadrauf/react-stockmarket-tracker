import React, { Component } from 'react';
import Plot from 'react-plotly.js';

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
        const pointer = this;
        const API_KEY = 'UN4Q3M7CQJEGQH6W';
        let stockSymbol = 'AMZN';
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&outputsize=full&apikey=${API_KEY}`;
        
        let XvalFunc = [];
        let YvalFunc = [];
        fetch(API_CALL)
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            function(data){
                console.log(data)
                for(var key in data['Time Series (Daily)']){
                    XvalFunc.push(key);
                    YvalFunc.push(data['Time Series (Daily'][key]['1. open']);
                }
                pointer.setState({
                    stockChartXValue: XvalFunc,
                    stockChartYValue: YvalFunc
                });
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

