import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import { fixCommas } from './../../utils/utils';
import './chart.css';

let config = {
  title: {
    text: 'Mortgage Paydown',
    x: -20 //center
  },
  xAxis: {
    allowDecimals: false,
    title: {
      text: 'Payment Period'
    },
    labels: {
      formatter: function () {
        return this.value === 0 ? 1 : this.value; // clean, unformatted number for age
      }
    }
  },
  yAxis: {
    title: {
      text: ''
    },
    labels: {
      formatter: function () {
        return `$${this.value}`;
      }
    }
  },
  tooltip: {
    formatter() {
			return `${this.series.name} at period <b>${this.x}</b> is <b>$${fixCommas(this.y)}</b>`;
		},
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
  },
  plotOptions: {
    line: {
      pointStart: 1,
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
  series: []
};

class Chart extends Component {
  componentDidMount() {
    let chart = this.refs.chart.getChart();
  }

  render() {
    config.series = [
      {
        name: 'Interest Paid',
        data: this.props.data.interest
      },
      {
        name: 'Total Paid',
        data: this.props.data.principal
      },
      {
        name: 'Remaining Balance',
        data: this.props.data.balance
      }
    ];
    return <ReactHighcharts ref='chart' config={config} />;
  }
};

export default Chart;
