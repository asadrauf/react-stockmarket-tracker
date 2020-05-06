import React from 'react';
import SearchBar from './SearchBar';
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

class Stock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        stockChartXValues: [],
        stockChartYValues: [],
        term: null,
      value: ''
      }
      this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
      this.fetchStock();
    }

    handleChange(e) {
        this.setState({
          value: e.target.value,
          term: this.state.value
        });
      }
    
      handleClick(e) {
        if(e) e.preventDefault();
        this.setState({
          value: '',
          term: this.state.value
        });
    
    }
    fetchStock() {
      const pointerToThis = this;
      
      console.log(pointerToThis);
      const API_KEY = 'HGJWFG4N8AQ66ICD';
     
      let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AMZN&outputsize=compact&apikey=${API_KEY}`;
      let stockChartXValuesFunction = [];
      let stockChartYValuesFunction = [];
  
      fetch(API_Call)
        .then(
          function(response) {
            return response.json();
          }
        )
        .then(
          function(data) {
            console.log(data);
  
            for (var key in data['Time Series (Daily)']) {
              stockChartXValuesFunction.push(key);
              stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
            }
  
            // console.log(stockChartXValuesFunction);
            pointerToThis.setState({
              stockChartXValues: stockChartXValuesFunction,
              stockChartYValues: stockChartYValuesFunction
            });
          }
        )
    }

  
    render() {
        const value = this.state.value;
      return (
        <div>
          <h1>Stock Market</h1>
          <SearchBar value={ value }
                   onChange={ this.handleChange }
                   onClick={ this.handleClick }/>
          <Plot
            data={[
              {
                x: this.state.stockChartXValues,
                y: this.state.stockChartYValues,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
              }
            ]}
            layout={{width: 720, height: 440, title: 'Stock Market Data'}}
          />
        </div>
      )
    }
  }
  
  export default Stock;

